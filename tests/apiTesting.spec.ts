import { test, expect } from '@playwright/test';

test('test', async ({ request }) => {
    const response = await request.post('https://dummyapi.io/data/v1/post/create', {
        data: {
            text: "mynameisABC",
            image: "https://cdn.tgdd.vn/GameApp/2/244935/Screentshots/tai-manabie-ung-dung-hoc-tap-truc-tuyen-cho-hoc-sinh-244935-logo-05-07-2021.png",
            likes: 1,
            tags: ["manabie 1", "manabie 2"],
            owner: "60d0fe4f5311236168a109d9"
        },
        headers: {
            "app-id": "62284ee707de6ec60b4a884c"
        }
    })
    console.log(await response.json())
});