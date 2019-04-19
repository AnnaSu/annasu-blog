import React, { Component } from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PostArticle from '../components/PostArticle';
import { THEME_COLOR } from '../constants/themes';
import BackBar from '../components/BackBar';
import { CLIENT_ENDPOINT } from '../constants/endpoints';

const category = 'tech';

class index extends Component {
  render() {
    const {
      data: { markdownRemark: post },
    } = this.props;
    const color = THEME_COLOR[category];
    const title = R.pathOr('', ['frontmatter', 'title'], post);
    const description = R.pathOr('', ['frontmatter', 'description'], post);
    const tags = R.pathOr([], ['frontmatter', 'tags'], post);
    const date = R.pathOr('', ['frontmatter', 'date'], post);
    const url = R.pipe(
      R.pathOr('/', ['fields', 'slug']),
      R.concat(CLIENT_ENDPOINT)
    )(post);
    return (
      <Layout>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:url" content={url} />
          <script type="application/ld+json">{`
                       {
                        "@context": "http://schema.org/",
                        "@type": "${
                          category === 'tech'
                            ? 'TechArticle'
                            : 'SocialMediaPosting'
                        }",
                        "headline": "${title}",
                        "datePublished": "${date}",
                        "description": "${description}",
                        "keywords": "${tags.join(',')}",
                        "image": {
                          "@type": "ImageObject",
                          "height": "1200",
                          "width": "630",
                          "url": "/img/default-cover.png"
                        },
                        "author": "Anna Su",
                        "publisher": {
                          "@type": "Organization",
                          "logo": {
                            "@type": "ImageObject",
                            "url": ""
                          },
                          "name": "Anna Su"
                        }
                      }
                    `}</script>
        </Helmet>
        <PostArticle
          title={title}
          date={date}
          html={R.pathOr('', ['html'], post)}
          tags={tags}
          color={color}
          category={category}
          url={url}
          hashTags={tags.join(',')}
        />
        <BackBar
          category={category}
          title={title}
          url={url}
          hashTags={tags.join(',')}
        />
      </Layout>
    );
  }
}

export default index;

export const pageQuery = graphql`
  query TechPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
