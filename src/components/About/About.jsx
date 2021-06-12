import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Expertized in Full stack application development and Cloud computing with detailed knowledge of A.I. methodology, and pursuing a position of Data Engineer that utilizes my experience of leading software development on software projects from conception through implementation and maintenance.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '• Over 10 years of work experience with every different aspect of web based full stack application development including Java, Spring, Node.js, React.js, Vue.js, etc.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '• Has a sound understanding on the industrial application of various A.I. perspectives and processes.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '• Successfully adapted to the A.I. area and made a lot of achievements especially financial areas.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '• Developed Machine learning pipeline using cloud computing skills including but not limited to Kubernetes, Nginx, Docker, and AWS.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    '• Experienced in up to 15 various systems and ready to handle them professionally. (OS: Windows Servers, Linux, Solaris, HP-UX, and AIX / Middleware: Apache, Nginx, Weblogic, Tibco EAI, IPlanet, Websphere, ActiveMQ, RabbitMQ, and ServiceMix / Persistence: Oracle Database, MySql Server, PostgreSQL, and MS SQL Server)'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || '• Established configuration management system using Git and even CVS and SVN.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Specialties: Java, Machine Learning, Kubernetes, Docker, Python'}
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
