import React from 'react';
import TechPost from '../../templates/tech-post.js';

const TechPostPreview = ({ entry, widgetFor }) => (
  <TechPost
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
);

export default TechPostPreview;
