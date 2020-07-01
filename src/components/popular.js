import React from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Post from './post/popular-post.js';
import useTranslations from './useTranslations';

import Tizona from '../../static/popular/tizona.jpg';
import Marimorena from '../../static/popular/cybercamp.jpg';
import X1red from '../../static/popular/x1redmassegura.png';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col md:flex-row justify-between`};

  > a {
    margin-bottom: 1rem;
  }
`;

const Popular = props => {
  const t = useTranslations();

  return (
    <Content>
      <Link to={props.locale === 'es' ? '/es/blog/cybercamp-2019' : '/blog/cybercamp-2019'}>
        <Post
          date="02/02/2020"
          image={Marimorena}
          title={t.popular.titleMarimorena}
          tags={t.popular.tagsMarimorena}
          description={t.popular.descriptionMarimorena}
        />
      </Link>
      <Link to={props.locale === 'es' ? '/es/blog/tizonaconf-2019' : '/blog/tizonaconf-2019'}>
        <Post
          date="02/02/2020"
          image={Tizona}
          title={t.popular.titleTizona}
          tags={t.popular.tagsTizona}
          description={t.popular.descriptionTizona}
        />
      </Link>
      <Link
        to={props.locale === 'es' ? '/es/blog/x1redmassegura-2019' : '/blog/x1redmassegura-2019'}>
        <Post
          date="02/02/2020"
          image={X1red}
          title={t.popular.titleRedSegura}
          tags={t.popular.tagsRedSegura}
          description={t.popular.descriptionRedSegura}
        />
      </Link>
    </Content>
  );
};

export default Popular;
