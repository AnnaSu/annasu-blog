import React from 'react';
import { LifePostTemplate } from '../../templates/life-post.js';

const LifePostPreview = ({ entry, widgetFor }) => (
  <LifePostTemplate
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
    description={entry.getIn(['data', 'description'])}
    html={widgetFor('body')}
    tags={entry.getIn(['data', 'tags'])}
  />
);

export default LifePostPreview;
