import React from 'react'
import LifePost from '../../templates/life-post.js'

const LifePostPreview = ({ entry, widgetFor }) => (
  <LifePost
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

export default LifePostPreview
