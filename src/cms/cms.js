import CMS from 'netlify-cms';

import TechPostPreview from './preview-templates/TechPostPreview';
import LifePostPreview from './preview-templates/LifePostPreview';

CMS.registerPreviewTemplate('tech', TechPostPreview);
CMS.registerPreviewTemplate('life', LifePostPreview);