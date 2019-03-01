import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import Layout from '../components/layout'
import ArticlePreview from '../components/article-preview'

import HoverName from '../components/hover-name'
import DigitalArtwork from '../components/digital-artwork'
import FixedScrolling from '../components/fixed-scrolling'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')
    const digArt = get(this, 'props.data.allContentfulDigitalArtwork.edges')

    return (
      <Layout location={this.props.location} >
        <div style={{ background: 'transparent' }}>
          <Helmet title={siteTitle} />
          <HoverName />
          <FixedScrolling one="oneone" two="twotwo"/>

          <Hero data={author.node} />
          <div className="wrapper">
            <h2 className="section-headline">Recent articles</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <ArticlePreview article={node} />
                  </li>
                )
              })}
            </ul>

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
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulFluid_tracedSVG
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
    allContentfulPerson(filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
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
