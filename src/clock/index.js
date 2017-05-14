import React from 'react';
import moment from 'moment';

const timeDiff = (t)=>{
  const k = moment.duration(t - Date.now());
  return [Math.floor(k.asDays()), k.hours(), k.minutes(), k.seconds()];
};

class Square extends React.Component {
  render(){
    let k = "" + this.props.number;
    if(k.length < 2){
      k = "0" + k;
    }
    return <div className="square">
      <span className="number">{k}</span>
      <span className="label">{this.props.label}</span>
    </div>;
  }
}

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
    if(props.timeUntil){
      this.state.timeUntil = timeDiff(props.timeUntil);
    }
  }

  componentDidMount(){
    this.timer = setInterval(
      ()=>{
        this.tick();
      },
      1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }

  tick(){
    this.setState({
      timeUntil: timeDiff(this.props.timeUntil),
    });
  }

  render(){
    let k = [];
    if(this.props.timeUntil){
      const [days, hours, minutes, seconds] = this.state.timeUntil;
      k.push(<Square number={days} label="Days"/>);
      k.push(<Square number={hours} label="Hours"/>);
      k.push(<Square number={minutes} label="Minutes"/>);
      k.push(<Square number={seconds} label="Seconds"/>);
    }
    return <div className="clock">
      {k}
    </div>;
  }
}

export default Clock
