import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Header from './components/Header';

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }
  
  render() {
    return (
		<div>
			{this.props.location.pathname !== '/index' && <Header/>}
			{this.props.children}
		</div>
		)
  }
}

export default withRouter(ScrollToTop);
