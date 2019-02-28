import React from 'react'

import styles from './hoverName.css'


class hoverName extends React.Component {

    handleScroll = () => {

        if (window.scrollY === 0) {
            this.refs.firstName.classList.remove('scrolled-first');
            this.refs.lastName.classList.remove('scrolled-last');
        }

        else {
            this.refs.firstName.classList.add('scrolled-first');
            this.refs.lastName.classList.add('scrolled-last');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render () {
        return (
          <div onScroll={this.handleScroll}>
          <div className="hover-name">
            <div className="concept first-name" ref="firstName">
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
            <div className="concept last-name" ref="lastName">
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
              <div className="hover hidden">
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
          </div>
        );
    }
};

export default hoverName;

// switch class toggle to state change
