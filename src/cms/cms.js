import CMS from 'netlify-cms';
import * as React from 'react';
import TechPostPreview from './preview-templates/TechPostPreview';
import LifePostPreview from './preview-templates/LifePostPreview';
import CSSInjector from './CSSInjector.js';

CMS.registerPreviewTemplate('tech', props => (
  <CSSInjector>
    <TechPostPreview {...props} />
  </CSSInjector>
));
CMS.registerPreviewTemplate('life', props => (
  <CSSInjector>
    <LifePostPreview {...props} />
  </CSSInjector>
));
