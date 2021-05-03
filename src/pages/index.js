import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/SideBar';
import Scroll from '../components/Scroll';

import aboutme from '../assets/images/aboutme.jpg';

import config from '../../config';
import Typical from 'react-typical';
import ExperienceComponent from '../components/ExperienceComponent';
import { Experiences } from '../shared/experiences';
import { Education } from '../shared/education';

import Progress from '../components/Progress';
import { Skills } from '../shared/skills';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'work', name: 'Work Experience', icon: 'fa-th' },
  { id: 'education', name: 'Education', icon: 'fa-th' },
  { id: 'skill', name: 'Skills', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
        <div className="bg-image"></div>
        <div className="container">
          
          <header>
            <h2 className="alt">
              Hi! I'm <strong>{config.authorName}</strong>
              <br />
              <Typical steps={["I'm a ", 1000, "I'm a " + config.heading, 1000]}
                  loop={Infinity}
                  wrapper="strong"/>
            </h2>
          </header>

          <footer>
            <Scroll type="id" element={'work'}>
              <a href="#work" className="button">
                Show me
              </a>
            </Scroll>
          </footer>
        </div>
      </section>

      <section id="work" className="two">
        <div className="container">
          <header>
            <h2>My Work Experience</h2>
          </header>
          <ExperienceComponent experiences={Experiences}></ExperienceComponent>
        </div>
      </section>

      <section id="education" className="two">
        <div className="container">
          <header>
            <h2>My Education</h2>
          </header>
          <ExperienceComponent experiences={Education}></ExperienceComponent>
        </div>
      </section>

      <section id="skill" className="two">
        <div className="container">
          <header>
            <h2>My Skills</h2>
          </header>
          <Progress progresses={Skills}></Progress>
        </div>
      </section>

      <section id="about" className="three">
        <div className="container">
          <header>
            <h2>About Me</h2>
          </header>

          <a href="/#" className="image featured">
            <img src={aboutme} alt="" />
          </a>

          <p className="aboutText">
            Hey. I am Yueying Lu from China, and now living in Bonn, Germany. I am now working as a Frontend developer. In my free time, I like baking and playing guitar. Traveling is also one my favorite things, 
            and I think companionship is the most important thing to make a trip enjoyable. I wish the world will return soon to health and we won't miss the sunshine this summer!
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Get in Touch</h2>
          </header>
          <p>Email: <a href="mailto:menna.yueying.lu@gmail.com">menna.yueying.lu@gmail.com</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/yueying-lu-b09b5b113/">https://www.linkedin.com/in/yueying-lu-b09b5b113/</a> </p>
          <p>Xing: <a href="https://www.xing.com/profile/Yueying_Lu/cv">https://www.xing.com/profile/Yueying_Lu/cv</a> </p>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
