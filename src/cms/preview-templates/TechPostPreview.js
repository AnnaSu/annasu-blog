import React from 'react';
import { TechPostTemplate } from '../../templates/tech-post.js';

const TechPostPreview = ({ entry, widgetFor }) => (
  <TechPostTemplate
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
    description={entry.getIn(['data', 'description'])}
    html={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
  />
);

export default TechPostPreview;
