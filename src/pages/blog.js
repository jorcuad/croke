import React from 'react';
import Section from "../components/section";
import Blog from "../components/blog";
import Popular from "../components/popular";
import Layout from "../components/layout/layout"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const blog = "Here you should find some interesting topics about security. I love that point when the software touch the physical world, so, you should expect finding here some interesting hardware projects (or that’s my hope). Right now, the web is under construction so let’s cross our fingers in order to see this site working safe and sound."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen mt-40 max-w-4xl px-4`}
`;

export default () => (
  <Layout>
    <Wrapper>
        <Section header="Blog" content={blog}/>
        <Section header="Most Popular"/>
        <Popular/>
        <Section header="Latest Posts"/>
        <Blog last={3}/>
    </Wrapper>
  </Layout>
);
