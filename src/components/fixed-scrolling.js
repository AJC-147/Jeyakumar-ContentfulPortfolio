import React from 'react'
import HoverName from '../components/hover-name';

import styles from './fixed-scrolling.css'


class FixedScrolling extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef()
    this.state = {scrollTop: 0, scrolled: "unscrolled"}
  }

  onScroll = () => {
    const scrollTop = this.myRef.current.scrollTop
    console.log(`onScroll myRef.scrollTop: ${scrollTop}`)
    this.setState({
      scrollTop: scrollTop
    })

    if (scrollTop === 0) {
      console.log("unscrolled")
      this.setState({
        scrolled: "unscrolled"
      })
    }

    else {
      console.log("scrolled")
      this.setState({
        scrolled: "scrolled"
      })
    }
  }

    render () {
      const {
        scrollTop,
        scrolled
      } = this.state
        return (
            <div id="fullPage">
            <div className="slide"
              ref={this.myRef}
              onScroll={this.onScroll}>
              <div><HoverName scrollTop={this.state.scrollTop} scrolled={this.state.scrolled} /></div>
              <div>2</div>
            </div>
            </div>
        );
    }
};

export default FixedScrolling;
