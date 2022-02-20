import React from 'react';

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Post from './post/post.js';
import useTranslations from './useTranslations';

import Xataka from '../../static/press/xataka.png';
import Rt from '../../static/press/rt.png';
import RtPegassus from '../../static/press/rtp.png';
import ElDiario from '../../static/press/eldiario.jpg';
import H24L from '../../static/press/24h24l.jpg';
import ElSalto from '../../static/press/elsalto.png';
import HelpNet from '../../static/press/helpnetsecurity.jpg';
import PostNau from '../../static/press/postnau.jpg';

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20`}
`;

const Press = props => {
  const t = useTranslations();

  return (
    <Content>
      <Post
        date="16/02/2022"
        link="https://www.youtube.com/watch?v=13lYLGHvWRA"
        image={H24L}
        title={t.pressComponent.title24h24lGNU}
        description={t.pressComponent.description24h24lGNU}
      />
      <Post
        date="09/01/2022"
        link="https://open.spotify.com/episode/1jSIwEnzmCEwYJAhcazZ4W"
        image={H24L}
        title={t.pressComponent.title24h24lEvento}
        description={t.pressComponent.description24h24lEvento}
      />
      <Post
        date="28/01/2022"
        link="https://www.eldiario.es/castilla-y-leon/jovenes-castilla-leon-conocen-gobiernos-pp-35-anos-buf_1_8661102.html"
        image={ElDiario}
        title={t.pressComponent.titleElDiario}
        description={t.pressComponent.descriptionElDiario}
      />
      <Post
        date="29/07/2021"
        link="https://actualidad.rt.com/programas/detras_de_la_noticia/399252-amenazas-vida-libre"
        image={RtPegassus}
        title={t.pressComponent.titleRTPegassus}
        description={t.pressComponent.descriptionRTPegassus}
      />
      <Post
        date="08/12/2020"
        link="https://www.elsaltodiario.com/post-apocalipsis-nau/podcast-or-post-apocalipsis-nau-46-diogenes-digital-y-comunidad-maker"
        image={PostNau}
        title={t.pressComponent.titleNau}
        description={t.pressComponent.descriptionNau}
      />
      <Post
        date="19/03/2020"
        link="https://www.elsaltodiario.com/coronavirus/la-comunidad-maker-se-organiza-y-responde-al-covid-19"
        image={ElSalto}
        title={t.pressComponent.titleSalto}
        description={t.pressComponent.descriptionSalto}
      />
      <Post
        date="13/02/2020"
        link="https://actualidad.rt.com/programas/detras_de_la_noticia/342956-progreso-regreso-eeuu-migracion"
        image={Rt}
        title={t.pressComponent.titleRT}
        description={t.pressComponent.descriptionRT}
      />
      <Post
        date="12/04/2018"
        link="https://www.xataka.com/moviles/freephone-es-el-smartphone-casero-que-te-puedes-montar-con-una-raspberry-pi"
        image={Xataka}
        title={t.pressComponent.titleXataka}
        description={t.pressComponent.descriptionXataka}
      />
      <Post
        date="05/04/2018"
        link="https://www.helpnetsecurity.com/2018/04/05/covert-communication-channels/"
        image={HelpNet}
        title={t.pressComponent.titleHelp}
        description={t.pressComponent.descriptionHelp}
      />
    </Content>
  );
};

export default Press;
