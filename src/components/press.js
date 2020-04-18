import React from "react";

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Post from "./post/post.js";

import Xataka from "../../static/press/xataka.png"
import Rt from "../../static/press/rt.png"
import ElSalto from "../../static/press/elsalto.png"
import HelpNet from "../../static/press/helpnetsecurity.jpg"

const Content = styled.div`
  ${tw`overflow-hidden flex flex-col mb-20`}
`;

export default props => (
  <Content>
    <Post date="19/03/2020" link="https://www.elsaltodiario.com/coronavirus/la-comunidad-maker-se-organiza-y-responde-al-covid-19" image={ElSalto} title="La comunidad maker se organiza y responde al covid19" description="La impresión 3D tiene un potencial enorme y en casos de emergencia como este, grupos organizados de voluntarios pueden ayudar. Pero claro, en casos como este se necesita una sincronización con los organismos públicos de sanidad responsables"/>
    <Post date="13/02/2020" link="https://actualidad.rt.com/programas/detras_de_la_noticia/342956-progreso-regreso-eeuu-migracion" image={Rt} title="¿Progreso o regreso?" description="¿Un mecanismo de seguridad o una invasión de la privacidad? El creciente uso de cámaras inteligentes en las calles está creando en EE.UU. un estado policial que pone en peligro los derechos humanos."/>
    <Post date="12/04/2018" link="https://www.xataka.com/moviles/freephone-es-el-smartphone-casero-que-te-puedes-montar-con-una-raspberry-pi" image={Xataka} title="FreePhone es el smartphone casero que te puedes montar con una Raspberry Pi " description="Se trata del FreePhone, un proyecto desarrollado por dos expertos en seguridad españoles que ahora han publicado su trabajo para que cualquiera pueda construirse un smartphone casero."/>
    <Post date="05/04/2018" link="https://www.helpnetsecurity.com/2018/04/05/covert-communication-channels/" image={HelpNet} title="Establishing covert communication channels by abusing GSM AT commands" description="Security research often starts as a hobby project, and Alfonso Muñoz’s and Jorge Cuadrado’s probe into mobile privacy is no exception. The duo, who’s scheduled to reveal the results of their research at the Hack in the Box Conference in Amsterdam next week, ended up finding a way to establishing covert communication channels over GSM by abusing GSM AT commands."/>
  </Content>
)
