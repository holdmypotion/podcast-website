import React from "react"
import { Link } from "gatsby"

const blogPost = ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <Link>
        <hr />
        <h1>{post.frontmatter.title}</h1>
        <h4>
          Posted by {post.frontmatter.author} on {post.frontmatter.date}
        </h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Link>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        author
        date
      }
    }
  }
`

export default blogPost
