import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import COLOR from '../constants/colors';
import { PROJECTS, EXPERIENCES } from '../constants/abouts';
import SocialGroup from '../components/SocialGroup';
import Layout from '../components/Layout';
import media from '../utils/mediaQueries';

const pageInfo = {
  title: '關於 Anna Su (^_^) Anna Su notes',
  description: '紀錄程式碼與生活',
};

const Wrap = styled.article`
  margin: 50px auto;
  text-align: center;
`;

const Avatar = styled.img.attrs({
  src: '/img/anna.png',
  alt: 'anna avatar',
})`
  width: 270px;
  height: 245px;
  margin: 0 auto;
  border-style: none;
`;

const Article = styled.article`
  width: 860px;
  margin: 0 auto 100px;
  text-align: center;
  ${media.mobile`width: 250px;`};
`;

const Section = styled.section``;

const Title = styled.h2``;
const SubTitle = styled.h3`
  margin-top: 30px;
`;

const Desc = styled.p`
  line-height: 24px;
  font-size: 16px;
  color: ${COLOR.DESC_FONT};
`;

const Line = styled.span`
  display: block;
`;

const Galleries = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 860px;
  padding: 0;
  list-style: none;
  ${media.mobile`width: 250px;`};
`;

const Gallery = styled.li`
  width: 220px;
`;

const LogoLink = styled.a.attrs({
  href: props => props.url,
  target: '_blank',
})`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: ${COLOR.WHITE};
`;

const Logo = styled.img.attrs({
  src: props => props.logo,
})`
  width: 90px;
  height: auto;
`;

class index extends Component {
  render() {
    return (
      <Layout>
        <Wrap>
          <Helmet>
            <title>{pageInfo.title}</title>
            <meta name="description" content={pageInfo.description} />
            <meta property="og:title" content={pageInfo.title} />
            <meta property="og:description" content={pageInfo.description} />
            <meta property="og:url" content="/about" />
            <script type="application/ld+json">{`
                       {
                        "@context": "http://schema.org/",
                        "@type": "NewsArticle",
                        "headline": "${pageInfo.title}",
                        "datePublished": "2018-08-18",
                        "description": "${pageInfo.description}",
                        "image": {
                          "@type": "ImageObject",
                          "height": "500",
                          "width": "500",
                          "url": "https://trello-attachments.s3.amazonaws.com/5b6f861a971bbe6855d0e88e/5b6f8681d4eacf628d09437c/33b2dd572137f4b55baf671ffd6f03ff/38668152_10209846645883057_8420278186897571840_o.jpg"
                        },
                        "author": "Anna Su",
                        "publisher": {
                          "@type": "Organization",
                          "logo": {
                            "@type": "ImageObject",
                            "url": "https://trello-attachments.s3.amazonaws.com/5b6f861a971bbe6855d0e88e/5b6f862dca1d2b2d62653c53/081264e2ce742fd8739b7d59ad44cdef/logo.png"
                          },
                          "name": "Anna Su"
                        },
                        "articleBody": "Hello, I am Anna Su, a front-end developer. 實踐視覺介面與程式功能的結合，認真與程式碼做朋友，期許能在工作中發揮熱情，在工作之餘也能充實自己、持續的進修。 不夠聰明，那麼就努力一點吧！希望可以透過筆記，紀錄工作與生活的心得，學習、思考、內化、累積、分享，與大家共同成長！"
                      }
                    `}</script>
          </Helmet>
          <Avatar />
          <SocialGroup />
          <Article>
            <Desc>Hello, I am Anna Su, a front-end developer.</Desc>
            <Desc>
              <Line>
                喜歡做網站的前端工程師，熱衷於視覺介面與程式功能的實踐，
              </Line>
              <Line>
                期許能在工作中發揮熱情，在工作之餘也能充實自己、持續的進修。
              </Line>
            </Desc>
            <Desc>
              <Line>
                不夠聰明，那麼就努力一點吧！希望可以透過筆記，紀錄工作與生活的心得，
              </Line>
              <Line>學習、思考、內化、累積、分享，與大家共同成長！</Line>
            </Desc>
          </Article>
          <Article>
            <Section>
              <Title>Skills</Title>
              <SubTitle>HTML & CSS</SubTitle>
              <Desc>HTML(5) / CSS(3) / Sass / PostCSS / Susy</Desc>
              <SubTitle>JavaScript</SubTitle>
              <Desc>
                React (Redux) / StoryBook / CSS Module / Redux Observable /
                Service Worker
              </Desc>
              <SubTitle>Other</SubTitle>
              <Desc>Webpack / Babel / NodeJS / Nginx</Desc>
            </Section>
          </Article>
          <Article>
            <Title>Projects</Title>
            <Galleries>
              {PROJECTS.map((project, index) => (
                <Gallery key={`projects_${index}`}>
                  <LogoLink url={project.URL}>
                    <Logo logo={project.LOGO} />
                  </LogoLink>
                  <Desc>{project.DESC}</Desc>
                </Gallery>
              ))}
            </Galleries>
          </Article>
          <Article>
            <Title>Experience</Title>
            <Galleries>
              {EXPERIENCES.map((experience, index) => (
                <Gallery key={`experiences_${index}`}>
                  <LogoLink url={experience.URL}>
                    <Logo logo={experience.LOGO} />
                  </LogoLink>
                  <Desc>{experience.COMPANY}</Desc>
                  <Desc>{experience.TITLE}</Desc>
                </Gallery>
              ))}
            </Galleries>
          </Article>
        </Wrap>
      </Layout>
    );
  }
}

export default index;
