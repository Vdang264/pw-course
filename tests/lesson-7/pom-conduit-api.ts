import { APIRequestContext } from '@playwright/test';

export class ConduitAPI {
  request: APIRequestContext;
  baseUrl: string;

  constructor(request: APIRequestContext, baseUrl: string) {
    this.request = request;
    this.baseUrl = baseUrl;
  }

  async register(
    username: string, 
    email: string, 
    password: string) {
    const url = `${this.baseUrl}/users`;
    const response = await this.request.post(url, {
      data: {
        user: { username, email, password },
      },
    });
    return response;
  }

  async login(email: string, password: string) {
    const url = `${this.baseUrl}/users/login`;
    const response = await this.request.post(url, {
      data: {
        user: { email, password },
      },
    });
    return response;
  }

  async createArticle(
    token: string, 
    title: string, 
    description: string, 
    body: string, 
    tagList: string[]) {
    const url = `${this.baseUrl}/articles`;
    const response = await this.request.post(url, {
      headers: { Authorization: `Bearer ${token}` },
      data: {
        article: {
          title,
          description,
          body,
          tagList,
        },
      },
    });
    return response;
  }
  
  async addComment(
    token: string, 
    slug: string, 
    comment: string) {
    const url = `${this.baseUrl}/articles/${slug}/comments`;
    const response = await this.request.post(url, {
      headers: { Authorization: `Bearer ${token}` },
      data: { comment: { body: comment } },
    });
    return response;
  }

  async deleteComment(
    token: string, 
    slug: string, 
    commentId: number) {
    const url = `${this.baseUrl}/articles/${slug}/comments/${commentId}`;
    return this.request.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }

  async deleteArticle(token: string, slug: string) {
    const url = `${this.baseUrl}/articles/${slug}`;
    return this.request.delete(url, {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

