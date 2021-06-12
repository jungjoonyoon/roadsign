import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { StaticQuery, graphql, Link } from "gatsby"
import Img from 'gatsby-image';

const MEDIUM_CDN = "https://cdn-images-1.medium.com/max/400"
const MEDIUM_URL = "https://medium.com"

const Articles = () => {
  const { articles } = useContext(PortfolioContext);

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
    <section id="articles">
      <StaticQuery
        query={graphql`
          query Medium {
            allMediumPost(limit: 7, sort: { fields: createdAt, order: DESC }) {
              totalCount
              edges {
                node {
                  id
                  uniqueSlug
                  title
                  createdAt(formatString: "MMM YYYY")
                  virtuals {
                    subtitle
                    readingTime
                    previewImage {
                      imageId
                    }
                  }
                  author {
                    username
                  }
                }
              }
            }
          }
        `}
        render={({ allMediumPost }) => (
          <Container>
            <div className="article-wrapper">        
              <Title title="Articles" />
              {allMediumPost.edges.map(post => (
                <Row key={post.node.uniqueSlug}>
                  <Col lg={4} sm={12}>
                    <Fade
                      left={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={500}
                      distance="30px"
                    >
                      <div className="article-wrapper__text">
                        <h3 className="article-wrapper__text-title">{post.node.title || 'Project Title'}</h3>
                        <div>
                          <p>
                            {post.node.virtuals.subtitle || ''}
                          </p>
                          <p className="mb-4">
                            {" "}
                            {`${post.node.createdAt} - ${Math.ceil(
                              post.node.virtuals.readingTime
                            )} min`}
                          </p>
                        </div>
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={`${MEDIUM_URL}/@${post.node.author.username}/${post.node.uniqueSlug}` || '#!'}
                        >
                          Read
                        </a>
                      </div>
                    </Fade>
                  </Col>
                  <Col lg={8} sm={12}>
                    <Fade
                      right={isDesktop}
                      bottom={isMobile}
                      duration={1000}
                      delay={1000}
                      distance="30px"
                    >
                      <div className="experience-wrapper__image">
                        <a
                          href={`${MEDIUM_URL}/@${post.node.author.username}/${post.node.uniqueSlug}` || '#!'}
                          target="_blank"
                          aria-label="Project Link"
                          rel="noopener noreferrer"
                        >
                          <Tilt
                            options={{
                              reverse: false,
                              max: 8,
                              perspective: 1000,
                              scale: 1,
                              speed: 300,
                              transition: true,
                              axis: null,
                              reset: true,
                              easing: 'cubic-bezier(.03,.98,.52,.99)',
                            }}
                          >
                            <div data-tilt className="thumbnail rounded">
                              <img className="fetched_img"
                                src={`${MEDIUM_CDN}/${post.node.virtuals.previewImage.imageId}`}
                                // width="80%"
                                alt={allMediumPost.edges[0].node.image} />
                            </div>
                          </Tilt>
                        </a>
                      </div>
                    </Fade>
                  </Col>
                </Row>
              ))}
            </div>
          </Container>
        )}
      />
    </section>
  );
};

export default Articles;
