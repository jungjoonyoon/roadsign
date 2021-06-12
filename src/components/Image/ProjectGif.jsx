import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';

const ProjectGif = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              publicURL
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      return <img className="inserted_gif" alt={alt} src={image.node.publicURL} />;
    }}
  />
);

ProjectGif.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default ProjectGif;
