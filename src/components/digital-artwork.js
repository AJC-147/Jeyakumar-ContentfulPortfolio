import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import styles from './digital-artwork.module.css'

export default ({ digitalartwork }) => (
  <div className="digitalArtwork">
  <Img alt="" sizes={digitalartwork.primaryImage.sizes} />
    <h3 className={styles.previewTitle}>
      {digitalartwork.title}
      </h3>
      <a target="_blank" href={`https://${digitalartwork.link}`}>Link</a>


</div>

)
