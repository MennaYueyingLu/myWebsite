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
  { id: 'work', name: 'work', icon: 'fa-th' },
  { id: 'education', name: 'education', icon: 'fa-th' },
  { id: 'skill', name: 'skills', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => (
  <Layout>
    <SideBar sections={sections} />

    <div id="main">
      <section id="top" className="one dark cover">
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

          <p>
            Developers football competition in diameter big price to layer the
            pot. Chavez ultricies care who wants to CNN. Lobortis elementum
            aliquet eget a den of which they do not hold it in hatred developers
            nor the mountains of the deposit slip. The element of time, sem ante
            ullamcorper dolor nulla quam placerat viverra environment is not
            with our customers. Free makeup and skirt until the mouse or
            partners or to decorate each targeted.
          </p>
        </div>
      </section>

      <section id="contact" className="four">
        <div className="container">
          <header>
            <h2>Contact</h2>
          </header>

          <p>
            The element of time, sem ante ullamcorper dolor nulla quam placerat
            viverra environment is not with our customers. Free makeup and skirt
            until the mouse. Japan this innovative and ultricies carton salad
            clinical ridiculous now passes from enhanced. Mauris pot innovative
            care for my pain.
          </p>

          <form method="post" action="#">
            <div className="row">
              <div className="col-6 col-12-mobile">
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-mobile">
                <input type="text" name="email" placeholder="Email" />
              </div>
              <div className="col-12">
                <textarea name="message" placeholder="Message" />
              </div>
              <div className="col-12">
                <input type="submit" value="Send Message" />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>

    <PageFooter />
  </Layout>
);

export default IndexPage;
