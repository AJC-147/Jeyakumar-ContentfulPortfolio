import React from 'react'

import styles from './fixedScrolling.css'

export default ({ one, two }) => (

  <div className="holster">
  <div className="container y mandatory-scroll-snapping">
    <div>1{one}</div>
    <div>2{two}</div>
  </div>
  </div>
)
