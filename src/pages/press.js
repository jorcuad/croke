import React from 'react';
import Section from "../components/section";
import Press from "../components/press";
import Layout from "../components/layout/layout"

import styled from 'styled-components';
import tw from 'tailwind.macro';

const press = "Somethimes I appear in the media as an invited expert, speaker or even as a reference when some of my personal projects catch the attention of someone. I think that is important to record these little moments when someone is considered as an expert and their contributions are valuable enought to be share in the media."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen mt-40 max-w-4xl px-4`}
`;
export default () => (
  <Layout>
    <Wrapper>
        <Section header="Press" content={press}/>
        <Press/>
    </Wrapper>
  </Layout>
)
