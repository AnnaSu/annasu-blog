import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { SOCIALS } from '../constants/abouts';

const Groups = styled.ul`
  list-style: none;
  margin-bottom: 30px;
`;

const Group = styled.li`
  display: inline-block;
  margin-right: 30px;
`;

const Img = styled.img`
  width: 25px;
  height: auto;
`;

class SocialGroup extends PureComponent {
  render() {
    return (
      <Groups>
        <Group>
          <a href={SOCIALS['mail']}>
            <Img src="/img/icon_mail.svg" alt="" />
          </a>
        </Group>
        <Group>
          <a href={SOCIALS['github']} target="_blank" rel="noopener noreferrer">
            <Img src="/img/icon_github.svg" alt="" />
          </a>
        </Group>
        <Group>
          <a
            href={SOCIALS['linkedin']}
            target="_blank"
            rel="noopener noreferrer">
            <Img src="/img/icon_linkedin.svg" alt="" />
          </a>
        </Group>
        <Group>
          <a href={SOCIALS['fb']} target="_blank" rel="noopener noreferrer">
            <Img src="/img/icon_facebook.svg" alt="" />
          </a>
        </Group>
      </Groups>
    );
  }
}

export default SocialGroup;
