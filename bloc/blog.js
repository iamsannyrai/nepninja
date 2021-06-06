import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

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
