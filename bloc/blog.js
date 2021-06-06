import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const allContentPath = path.join(process.cwd(), 'contents')

export function getSortedBlogList() {
    const allContents = fs.readdirSync(allContentPath)
    const blogList = [];

    allContents.forEach(contentFolder => {
        const contentPath = path.join(allContentPath, contentFolder)
        const fileName = fs.readdirSync(contentPath)

        const markdownFile = fileName.find((file) => file.endsWith(".md"))

        // Remove ".md" from file name to get id
        const id = markdownFile.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(contentPath, markdownFile)

        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents)

        blogList.push({ id, ...matterResult.data })
    })

    // Sort posts by date
    return blogList.sort((a, b) => {
        if (a.date < b.date) {
            return 1
        } else {
            return -1
        }
    })
}


export function getAllPostIds() {
    const folders = fs.readdirSync(allContentPath)
    const allMarkdownFiles = [];

    folders.forEach(folder => {
        const blogDirectory = path.join(allContentPath, folder)
        const fileName = fs.readdirSync(blogDirectory)

        const markdownFile = fileName.find((file) => file.endsWith(".md"))

        allMarkdownFiles.push(markdownFile)
    })

    return allMarkdownFiles.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}


export async function getPostData(id) {
    const folders = fs.readdirSync(allContentPath)

    const targetFolder = folders.find((folder) => folder == id)

    const blogDirectory = path.join(allContentPath, targetFolder)
    const fullPath = path.join(blogDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html).use(prism)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // Combine the data with the id
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}