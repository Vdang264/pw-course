import { test, request, expect } from '@playwright/test';
import { ConduitAPI } from './pom-conduit-api.ts';


test.describe('Conduit API Automation Suite', () => {
    let api: ConduitAPI;
    let token: string;
    let slug: string;

    const userData = {
        username: 'vandang13',
        email: 'vandang13@yopmail.com',
        password: '1234567890',
    };

    const articleInput = {
        title: 'API in Playwright',
        description: 'How to use Playwright to create article',
        body: 'Body Lorem Ipsum...',
        tagList: ['Playwright', 'API', 'Testing'],
    };

    test.beforeAll(async () => {
        const baseUrl = 'https://conduit-api.bondaracademy.com/api';
        const context = await request.newContext({ baseURL: baseUrl });

        api = new ConduitAPI(context, baseUrl);

        const registerRes = await api.register(userData.username, userData.email, userData.password);
        
        expect(registerRes.status()).toBe(201);

        const loginRes = await api.login(userData.email, userData.password);
        expect(loginRes.status()).toBe(200);

        const loginData = await loginRes.json();
        token = loginData.user.token;
        console.log(token);
    });

    test('Create, comment, and delete article with API', async () => {
        let articleData;
        const comments: any[] = [];

        await test.step('Create a new article', async () => {
            const articleRes = await api.createArticle(
                token,
                articleInput.title,
                articleInput.description,
                articleInput.body,
                articleInput.tagList
            );
            expect(articleRes.status()).toBe(201);

            articleData = await articleRes.json();
            slug = articleData.article.slug;

            expect(articleData.article.title).toBe(articleInput.title);
            expect(articleData.article.body).toBe(articleInput.body);
            expect(articleData.article.description).toBe(articleInput.description);

            console.log(
                articleData.article.title,
                articleData.article.body,
                articleData.article.description
            );
        });

        await test.step('Add 5 comments to the article', async () => {
            for (let i = 1; i <= 5; i++) {
                const bodyText = `Comment ${i}`;
                const commentRes = await api.addComment(token, slug, bodyText);
                expect(commentRes.status()).toBe(200);

                const commentData = await commentRes.json();
                expect(commentData.comment.body).toBe(bodyText);
                comments.push(commentData.comment);

                console.log(commentData.comment.body);
            }
        });

        await test.step('Delete Comment 1 and Comment 3', async () => {
            const toDelete = comments.filter(c => c.body === 'Comment 1' || c.body === 'Comment 3');
            for (const comment of toDelete) {
              const delRes = await api.deleteComment(token, slug, comment.id);
              expect(delRes.status()).toBe(200);
            }
          });          

        await test.step('Delete the article', async () => {
            const delArticleRes = await api.deleteArticle(token, slug);
            expect(delArticleRes.status()).toBe(204);
        });
    });
});
