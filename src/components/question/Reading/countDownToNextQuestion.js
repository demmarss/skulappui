import React from 'react';
import Countdown from 'react-countdown-now';

class CountDownToNextQuestion extends React.Component {

    // Renderer callback with condition
renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      this.props.Counter()

      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };


      render () {
        return (
          <div>
            <Countdown
              date={Date.now() + 5000}
              renderer={this.renderer}
            />
          </div>
        )
      }
    }

    export default CountDownToNextQuestion

    const Completionist = () => <span>You are good to go!</span>;