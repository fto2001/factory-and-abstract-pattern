import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import html from 'remark-html';
import { remark } from 'remark';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function getSortedPostData() {
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = [];

    for (const fileName of fileNames) {
        const id = fileName.replace(/\.md$/, '');

        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf-8');

        const matterResult = matter(fileContents);

        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        allPostsData.push({
            id,
            contentHtml,
            ...matterResult.data,
        });
    }

    return allPostsData;
}
