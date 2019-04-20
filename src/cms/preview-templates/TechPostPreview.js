import React from 'react';
import * as R from 'ramda';
import { TechPostTemplate } from '../../templates/tech-post.js';

const TechPostPreview = ({ entry, widgetFor }) => (
  <TechPostTemplate
    title={entry.getIn(['data', 'title'])}
    date={entry.getIn(['data', 'date'])}
    description={entry.getIn(['data', 'description'])}
    html={widgetFor('body')}
    tags={R.pathOr([], ['data', 'tags'], entry.toJS())}
  />
);

export default TechPostPreview;
