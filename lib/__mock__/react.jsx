import React from 'react';

export default class Mock extends React.Component {
  render() {
    return <div>{this.props.test}</div>;
  }
}