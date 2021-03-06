import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'
import Rajat from '../views/Rajat'
import avatar from '../images/avatar.jpg'

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={4}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Rohit <Rajat /> 
        </BigTitle>
        <Subtitle>A Computer Science Senior exploring the tech world.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Internship Portal"
            link="https://portal.juecell.in"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            An internship aggregator providing summer internships to University Students
          </ProjectCard>
          <ProjectCard
            title="Google Summer of Code 2019"
            link="https://summerofcode.withgoogle.com/projects/#6387494919077888"
            bg="linear-gradient(to right, #636363 0%, #a2ab58 100%)"
          >
            Web Interface for Representation of NLP based extracted Text under National Resource for Network Biology<br/>
            <a href="https://rohitchattopadhyay.github.io/ihop-reach/" target="_blank">Progress Reports</a>
          </ProjectCard>
          <ProjectCard
            title="Image Segmentation"
            // link="https://www.behance.net/gallery/52915793/Harry-Potter"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Used Active Contour model to segment image
          </ProjectCard>
          <ProjectCard
            title="JU Connect"
            link="https://github.com/RohitChattopadhyay/JU-Connect"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            University Students Notification system
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      {/* <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="John Doe" />
          <AboutSub>
            The English language can not fully capture the depth and complexity of my thoughts. So I'm incorporating
            Emoji into my speech to better express myself. Winky face.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          You know the way you feel when you see a picture of two otters holding hands? That's how you're gonna feel
          every day. My mother cried the day I was born because she knew she’d never be prettier than me. You should
          make me your campaign manager. I was born for politics. I have great hair and I love lying. Captain? The kids
          want to know where Paulie the Pigeon is. I told them he got sucked up into an airplane engine, is that all
          right?
        </AboutDesc>
      </About> */}
      <Contact offset={3}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            Say <a href="mailto:rohit.chattopadhyay1@gmail.com">Hi</a> or find me on other platforms:{' '}
            <a href="http://m.me/chattopadhyayrohit" target="_blank">Messenger</a> &{' '}
            <a href="https://www.linkedin.com/in/rohitchattopadhyay/" target="_blank">Linkedin</a><br/>
            I have started to maintain a <a href="https://rohitchattopadhyay.github.io" target="_blank">Blog</a>, (great) content is brewing.
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 Built using Gatsby
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
