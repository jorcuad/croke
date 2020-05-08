import React from 'react';
import {
  SectionTitle,
  SectionWrapper,
  SectionText,
} from '../components/section';
import Layout from "../components/layout/layout"
import Publication from "../components/publication/publication"

import styled from 'styled-components';
import tw from 'tailwind.macro';

import Xataka from "../../static/press/xataka.png"
import Rt from "../../static/press/rt.png"
import ElSalto from "../../static/press/elsalto.png"
import HelpNet from "../../static/press/helpnetsecurity.jpg"

const publications = "One of my interest is pointed in share my knowledge and experiences. In these years, I had the opportunity and the honor to be accepted in several congresses as speaker. Here, you can find the slides, videos, demos, papers and other press clipping that maybe can be of your interest."

const Wrapper = styled.div`
  ${tw`flex flex-col relative w-screen items-center justify-center`}
`;
export default () => (
  <Layout>
    <Wrapper>
      <SectionWrapper>
        <SectionTitle header="Publications"/>
        <SectionText content={publications}/>
        <Publication  image={Xataka}
                      title="Desconfiando de la Autoridad, Certificate Transparency"
                      con="https://interferencias.tech/2019/04/20/jasyp-2019/"
                      tags="Conferencia, Privacidad, Interferencias, JASyP"
                      date="26/04/2019"
                      description="Los asistentes de voz se han puesto de moda y han entrado en nuestros hogares. Estos dispositivos tienen un gran número de posibilidades y permiten domotizar nuestro hogar de forma sencilla. Sin embargo, surgen dudas respecto a tener micrófonos en escucha activa constante a nuestro alrededor."
                      slides="https://drive.google.com/file/d/0B9UPRn22E-WtRUprMDI4UXM4OEU/view"/>

        <Publication  image={Xataka}
                      title="Tendencias en Certificación Digital"
                      web="https://www.bbvanexttechnologies.com/i4s-tendencias-en-certificacion-digital-ciberseguridad/"
                      tags="Certificación Digital, Seguridad, Lets Encrypt"
                      date="07/07/2017"
                      description="Con certificate transparency nos encontramos ante un cambio en la certificación digital tradicional, de cara al usuario puede no verse una diferencia fundamental pero empresas como Google vana forzar mediante esta tecnología que los grandes actores de la certificación tengan que cambiar su forma de operar."/>

        <Publication  image={Xataka}
                      title="Phreaking is alive! Abusing GSM: Covert channels using AT commands"
                      con="https://www.rootedcon.com/archive/rooted2018/"
                      tags="Seguridad, privacidad, covert channels, rootedcon"
                      date="02/04/2018"
                      description="From the '60s and '70s, the hacker community started to design tools and procedures in order to take advantage of telephone networks (such as blue boxes, phreaking, etc.). These oldschool hacking stuff is coming back with the commercialitation of cheap open hardware which establish new threats."
                      code="https://github.com/jorcuad/FreePhone"
                      video="https://www.youtube.com/watch?v=BhizVlKoLQA"/>

        <Publication  image={Xataka}
                      title="Call Me Maybe: Establishing Covert Channels By Abusing GSM AT Commands"
                      con="https://conference.hitb.org/hitbsecconf2018ams/"
                      tags="Seguridad, privacidad, covert channels, HackInTheBox"
                      date="13/04/2018"
                      description="From the '60s and '70s, the hacker community started to design tools and procedures in order to take advantage of telephone networks (such as blue boxes, phreaking, etc.). These oldschool hacking stuff is coming back with the commercialitation of cheap open hardware which establish new threats."
                      code="https://github.com/jorcuad/FreePhone"
                      video="https://conference.hitb.org/hitbsecconf2018ams/sessions/call-me-maybe-establishing-covert-channels-by-abusing-gsm-at-commands/"/>

        <Publication  image={Xataka}
                      title="Introducción a los mecanismos de privacidad basados en tecnología blockchain"
                      web="https://www.bbvanexttechnologies.com"
                      tags="Blockchain, privacidad, seguridad, estudio"
                      date="05/07/2018"
                      description="Aparecen muchas cryptomonedas en el mercado que tienen propiedad respecto a privacidad innovadoras y que generan casos de uso que podrían ser revoluciones en el mercado. En este documento se analizan las alternativas más destacadas a bajo nivel."
                      document="https://www.bbvanexttechnologies.com"/>

        <Publication  image={Xataka}
                      title="Espías domésticos: A talk about virtual voice assistants"
                      con="https://interferencias.tech/jasyp/17/"
                      tags="Conferencia, Privacidad, Interferencias, JASyP"
                      date="11/05/2017"
                      description="Los asistentes de voz se han puesto de moda y han entrado en nuestros hogares. Estos dispositivos tienen un gran número de posibilidades y permiten domotizar nuestro hogar de forma sencilla. Sin embargo, surgen dudas respecto a tener micrófonos en escucha activa constante a nuestro alrededor."
                      slides="https://docs.google.com/presentation/d/1qguUIEktor6wzUed0-gMfRtfOTAUK1QzwtI2StDeZQU/edit?usp=sharing"
                      blog="https://www.croke.es/post/jasyp2019/"/>

        <Publication  image={Xataka}
                      title="¿Qué hay detrás de los mayordomos virtuales?"
                      con="https://www.x1redmassegura.com/2019/05/publicada-la-agenda-de-los-talleres.html"
                      tags="educational, children, privacy, voice assistants, x1RedMásSegura"
                      date="11/05/2019"
                      description="Una charla enfocada en enseñar a los niños y niñas los peligros de los asistentes de voz como Alexa o Siri y los conceptos más básicos de privacidad usando como metáfora la lego película de batman."
                      slides="https://docs.google.com/presentation/d/1exJhZqNJ8yu6hasiW14P0ckbgDfLMfQNW7VS2Jnc2TU/edit?usp=sharing"
                      blog="https://www.croke.es/post/x1redmassegura2019/"/>

        <Publication  image={Xataka}
                      title="Project Alias, privacy in virtual voice assistants"
                      tags="seguridad, innovacion, assistentes de voz, alias"
                      date="29/07/2019"
                      description="Los asistentes de voz y nuestra privacidad no son muy buenos amigos. Esto hace que se estén creando proyectos tipo “parásito” como Alias, que toman el control del asistente de voz ayudando a proteger la intimidad del usuario. Pero, ¿es esta la solución definitiva?"
                      web="https://www.bbvanexttechnologies.com/hemos-puesto-a-prueba-el-proyecto-alias-y-esto-es-lo-que-hemos-descubierto/"/>

        <Publication  image={Xataka}
                      title="Análisis de seguridad de asistentes virtuales."
                      con="https://www.tizonaconf.com/tizona2019/index.html"
                      tags="seguridad, industrial, asistentes de voz, tizonaconf, privacy"
                      date="16/10/2019"
                      description="Tizona addresses the issue of cybersecurity in industrial environments. Following my usual topics, I talked about smart assistants. Right now this kind of devices are not present in this kind of places, but it isn’t uncommon thinking about a near future where people are using this type of interfaces in order to manage complex tasks in the industry."
                      slides="https://docs.google.com/presentation/d/1qguUIEktor6wzUed0-gMfRtfOTAUK1QzwtI2StDeZQU/edit?usp=sharing"
                      blog="https://www.croke.es/post/tizonaconf2019/"/>

        <Publication  image={Xataka}
                      title="Cybersecurity module in Quality, Audit and Security subject as an external teacher"
                      web="http://www.uva.es"
                      tags="Educational, cryptography, pentesting, master, security"
                      date="25/11/2019"
                      description="Profesor externo de la asignatura de Calidad, auditoria y seguridad del máster de big data de la universidad de valladolid. Durante mis seminarios hablé sobre los conceptos básicos de seguridad y las metodologías para realizar una auditoría en relación a grandes cantidades de datos."
                      slides="https://drive.google.com/open?id=1q7u3I15W55xHSFi4Q0hBnW5PfsI2oqLBJK_taiYZd7o"
                      code="https://drive.google.com/open?id=1As5vrNaVFxHQVgy_ykLwWbNUWPshuM6H1lsm3TvRBdQ"/>

        <Publication  image={Xataka}
                      title="¡Y se ARmó la Marimorena! Seguridad en Realidad Aumentada"
                      con="https://cybercamp.es/"
                      tags="security, workshop, AR, cryptography"
                      date="29/11/2019"
                      description="Augmented Reality (AR) is a technology that allows us to show digital objects inside the physical reality using a special set of glasses or a smartphone. This appealing technology is closer than ever and in this workshop we would like to anticipate the future in an exercise of innovation."
                      code="https://github.com/jorcuad/Cybercamp2019-SecurityAR-Workshop"
                      slides="https://docs.google.com/presentation/d/1sH-SjuVkZ67sR6k7g4E_DoGPN9EJdJE6b6nxHV4Fn8E/edit?usp=sharing"
                      blog="https://www.croke.es/post/cybercamp2019/"
                      video="https://www.youtube.com/watch?v=C0y76fM0GWQ&list=PLr5GsywSn9d_HyyGPN0GKlXZ21l5xh5kp&index=25"/>
      </SectionWrapper>
    </Wrapper>
  </Layout>
)
