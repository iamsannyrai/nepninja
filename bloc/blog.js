import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import prism from 'remark-prism'

const allContentPath = path.join(process.cwd(), 'contents')

export function getSortedBlogList() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(allContentPath)
    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id
      const id = fileName.replace(/\.md$/, '')
  
      // Read markdown file as string
      const fullPath = path.join(allContentPath, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
  
      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents)
  
      // Combine the data with the id
      return {
        id,
        ...matterResult.data
      }
    })
    // Sort posts by date
    return allPostsData.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  }
  
  export function getAllPostIds() {
    const fileNames = fs.readdirSync(allContentPath)
    return fileNames.map(fileName => {
      return {
        params: {
          id: fileName.replace(/\.md$/, '')
        }
      }
    })
  }
  
  // gets data of a single post
  export async function getPostData(id) {
    const fullPath = path.join(allContentPath, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
  
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
  
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
      .use(html).use(prism)
      .process(matterResult.content)
    const contentHtml = processedContent.toString()
  
    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data
    }
  }
