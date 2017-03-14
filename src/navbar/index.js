import React from 'react';

import Config from 'config';

const scrollTime = 384;

const easing = (t)=>{
  if(t<.5){
    return 4*t*t*t;
  } else {
    return (t-1) * (2*t-2) * (2*t-2) + 1;
  }
};

const scrollTo = (element, duration)=>{
  const startingY = window.pageYOffset;
  let elementY = 0;
  if(element){
    elementY = window.scrollY + document.getElementById(element).getBoundingClientRect().top;
  }
  const targetY = document.body.scrollHeight - elementY < window.innerHeight ? document.body.scrollHeight - window.innerHeight : elementY;
  const diff = targetY - startingY;
  let start;
  if(!diff){
    return;
  }
  window.requestAnimationFrame(function step(timestamp) {
    if (!start){
      start = timestamp;
    }
    const time = timestamp - start;
    window.scrollTo(0, startingY + diff * easing(Math.min(time / duration, 1)));
    if(time < duration) {
      window.requestAnimationFrame(step)
    }
  });
};

class Navbar extends React.Component {
  render(){
    return <div>
      <nav>
        <div className="container">
          <div className="navbar">
            <div className="left">
              <div className="logo">
                <a className="no-style" onClick={()=>{scrollTo(false, scrollTime);}}>
                  <div className="logotext">ACM Dev<span className="devx-x">X</span></div>
                </a>
              </div>
            </div>
            <div className="right">
              <div className="item"><a className="no-style" onClick={()=>{scrollTo('about-us', scrollTime);}}>About</a></div>
              <div className="item"><a className="no-style" onClick={()=>{scrollTo('initiatives', scrollTime);}}>Initiatives</a></div>
              <div className="item"><a className="no-style" onClick={()=>{scrollTo('join-team', scrollTime);}}>Join Us</a></div>
              <div className="item"><a target="_blank" rel="noopener noreferrer" className="no-style apply-text" href={Config.url.apply}>Apply ></a></div>
            </div>
          </div>
        </div>
      </nav>
    </div>;
  }
}

export default Navbar
