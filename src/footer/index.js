import React from 'react';
import {render} from 'react-dom';

class Footer extends React.Component {
  render(){
    return <footer className="footer">
      <div className="container footer-container">
        {this.props.children}
      </div>
    </footer>;
  }
}

export default Footer
