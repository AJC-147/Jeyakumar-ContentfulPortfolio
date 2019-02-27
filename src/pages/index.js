import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import HoverName from '../components/hoverName'
import DigitalArtwork from '../components/digital-artwork'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const digArt = get(this, 'props.data.allContentfulDigitalArtwork.edges')

    return (
  <div style={{ position: `relative` }}>
    <HoverName />
    <div style={{ background: 'red' }}>
      <Helmet title={siteTitle} />
      <Hero data={author.node} />
      <div className="wrapper">

        <h2 className="section-headline">Digital Artwork</h2>
        <ul className="article-list">
          {digArt.map(({ node }) => {
            return (
              <li key={node.slug}>
                <DigitalArtwork digitalartwork={node} />
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  </div>

)
}
}

export default RootIndex

export const pageQuery = graphql`
query HomeQuery {
allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
  edges {
    node {
      title
      slug
      publishDate(formatString: "MMMM Do, YYYY")
      tags
      heroImage {
        sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
         ...GatsbyContentfulSizes_withWebp
        }
      }
      description {
        childMarkdownRemark {
          html
        }
      }
    }
  }
}
allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
  edges {
    node {
      name
      shortBio {
        shortBio
      }
      title
      heroImage: image {
        sizes(
          maxWidth: 1180
          maxHeight: 480
          resizingBehavior: PAD
          background: "rgb:000000"
        ) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
    }
  }
}
            allContentfulDigitalArtwork(sort: { fields: [updatedAt], order: DESC }) {
              edges {
                node {
                  title
                  slug
                  date
                  primaryImage {
                    sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
                     ...GatsbyContentfulSizes_withWebp
                    }
                  }
                  image {
                    id
                    file {
                      url
                      fileName
                      contentType
                    }
                  }
                  description {
                    description
                  }
                  technologiesUsed
                  link
                  tags
                  updatedAt(formatString: "MMMM Do, YYYY")
                }
              }
            }
}
`
