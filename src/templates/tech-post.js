import React, { Component } from 'react';
import * as R from 'ramda';
import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import Layout from '../components/Layout';
import PostArticle from '../components/PostArticle';
import { THEME_COLOR } from '../constants/themes';
import BackBar from '../components/BackBar';
import { CLIENT_ENDPOINT } from '../constants/endpoints';
import { HTMLContent, Content } from '../components/Content';

const category = 'tech';

export const TechPostTemplate = ({
  title = '',
  date = '',
  html = '',
  tags = [],
  helmet = '',
  url = '',
  ContentComponent = Content,
}) => {
  const color = THEME_COLOR[category];
  return (
    <React.Fragment>
      {helmet}
      <PostArticle
        title={title}
        date={date}
        html={html}
        tags={tags}
        color={color}
        category={category}
        url={url}
        hashTags={tags.join(',')}
        ContentComponent={ContentComponent}
      />
      <BackBar
        category={category}
        title={title}
        url={url}
        hashTags={tags.join(',')}
      />
    </React.Fragment>
  );
};

class index extends Component {
  render() {
    const {
      data: { markdownRemark: post },
    } = this.props;
    const title = R.pathOr('', ['frontmatter', 'title'], post);
    const description = R.pathOr('', ['frontmatter', 'description'], post);
    const tags = R.pathOr([], ['frontmatter', 'tags'], post);
    const date = R.pathOr('', ['frontmatter', 'date'], post);
    const slug = R.pathOr('/', ['fields', 'slug'], post);
    const url = CLIENT_ENDPOINT + slug;
    const cover = CLIENT_ENDPOINT + R.pathOr('', ['frontmatter', 'cover', 'childImageSharp', 'fluid', 'src'], post);
    const html = R.pathOr('', ['html'], post);
    const helmet = (
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={cover} />
        <script type="application/ld+json">{`
                       {
                        "@context": "http://schema.org/",
                        "@type": "TechArticle",
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
    );
    return (
      <Layout>
        <TechPostTemplate
          title={title}
          html={html}
          tags={tags}
          url={url}
          date={date}
          helmet={helmet}
          ContentComponent={HTMLContent}
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
        cover {
              childImageSharp {
                fluid(maxWidth: 700, quality: 60) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
