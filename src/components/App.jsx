import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Feedback from './feedback/feedback';
import { Title } from './title/title';
import Statistics from './statistics/statistics';

const BASIC_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  static propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
  };

  state = {
    ...BASIC_STATE,
  };

  onFeedbackStateChange = evt => {
    const { name } = evt.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const percent = (this.state.good / this.countTotalFeedback()) * 100;
    return Number.isNaN(percent) ? 0 : Math.round(percent);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Title title="Please leave your feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onFeedbackStateChange}
          />
        </Title>
        <Title title="Statistics">
          <Statistics
            message="There is no fedback"
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={this.countPositiveFeedbackPercentage()}
          />
        </Title>
      </>
    );
  }
}

export default App;
