import React from 'react'

import styles from './hover-name.css'

class HoverName extends React.Component {

  render() {
    const scrolledFirst = "first-" + this.props.scrolled;
    const scrolledLast = "last-" + this.props.scrolled;
    const scrolledK = "k-" + this.props.scrolled;

      return (

        <div className="hover-name">
          <div className="concept first-name" id={scrolledFirst} aria-label="Krishna">
            <div className="first-letter">
              <h1>K</h1>
            </div>
            <div className="hover">
              <h1>r</h1>
            </div>
            <div className="hover">
              <h1>i</h1>
            </div>
            <div className="hover">
              <h1>s</h1>
            </div>
            <div className="hover">
              <h1>h</h1>
            </div>
            <div className="hover">
              <h1>n</h1>
            </div>
            <div className="hover">
              <h1>a</h1>
            </div>
          </div>
          <div className="concept last-name" id={scrolledLast} aria-label="Jeyakumar">
            <div className="hover">
              <h1>J</h1>
            </div>
            <div className="hover">
              <h1>e</h1>
            </div>
            <div className="hover">
              <h1>y</h1>
            </div>
            <div className="hover">
              <h1>a</h1>
            </div>
            <div className="hover" id={scrolledK}>
              <h1>k</h1>
            </div>
            <div className="hover">
              <h1>u</h1>
            </div>
            <div className="hover">
              <h1>m</h1>
            </div>
            <div className="hover">
              <h1>a</h1>
            </div>
            <div className="hover">
              <h1>r</h1>
            </div>
          </div>
        </div>

      );

  }
}


export default HoverName;
