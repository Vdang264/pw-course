import { test, expect } from '@playwright/test';

test("Personal note", async ({ page }) => {
    await test.step("Navigate to Home page", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("Navigate to Personal note page", async() => {
        await page.click("//a[@href='04-xpath-personal-notes.html']");
    });

    await test.step("Input note 1", async() => {
        const noteTitle = page.locator("//input[@id='note-title']");
        const noteContent = page.locator("//textarea[@id='note-content']");
        const noteTitleData = `199 hồ sơ vào vòng loại cuộc thi Sáng kiến Khoa học 2025`
        const noteContentData = `Cuộc thi Sáng kiến Khoa học do VnExpress tổ chức bắt đầu bình chọn vòng loại với 199 hồ sơ tranh tài trong thời gian 2 tuần (từ 1/4 đến 14/4).
Sáng kiến Khoa học (Creative Science Contest - CSC) là cuộc thi thường niên do Bộ Khoa học và Công nghệ chỉ đạo, báo VnExpress tổ chức. Sau hơn hai tháng phát động, Ban tổ chức nhận được 280 hồ sơ gửi về từ các địa phương, viện nghiên cứu, trường đại học trên cả nước. Trong số này, có 199 hồ sơ được lựa chọn bước vào vòng loại.
Trong số hồ sơ tham dự, tác giả là cá nhân trên 18 tuổi chiếm tỷ lệ cao nhất (103), tiếp theo là các nhóm nghiên cứu (52), các dự án của doanh nghiệp (13) và số con lại thuộc về nhóm dưới 18 tuổi.`
        
        await noteTitle.fill(noteTitleData);
        await noteContent.fill(noteContentData);
        await page.click("//button[@id='add-note']")

    });

    await test.step("Input note 2", async() => {
        const noteTitle = page.locator("//input[@id='note-title']");
        const noteContent = page.locator("//textarea[@id='note-content']");
        const noteTitleData = `Những công trình thông minh tự làm mát ở đô thị Trung Quốc`
        const noteContentData = `Hè năm nay, nhiều khu vực ở Trung Quốc hứng chịu sóng nhiệt. Nhiệt độ trung bình tháng 7 là 23,2 độ C, cao nhất kể từ năm 1961, theo dữ liệu từ Cơ quan Khí tượng Trung Quốc. Từ nay đến giữa tháng 8, quốc gia này dự kiến đón nhận thêm hai đợt sóng nhiệt nữa.`
        
        await noteTitle.fill(noteTitleData);
        await noteContent.fill(noteContentData);
        await page.click("//button[@id='add-note']")

    });

    await test.step("Input note 3", async() => {
        const noteTitle = page.locator("//input[@id='note-title']");
        const noteContent = page.locator("//textarea[@id='note-content']");
        const noteTitleData = `Em bé AI biết làm nũng, giận dỗi như trẻ 6 tuổi`
        const noteContentData = `Chen Hao, giám đốc điều hành Trung tâm công nghệ tiên tiến ở Viện Siêu trí tuệ nhân tạo Bắc Kinh, mô tả TongTong 2.0 như một cá nhân kỹ thuật số với giá trị và tầm nhìn riêng.`
        
        await noteTitle.fill(noteTitleData);
        await noteContent.fill(noteContentData);
        await page.click("//button[@id='add-note']")

    });
});