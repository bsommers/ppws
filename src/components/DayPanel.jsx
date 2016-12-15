import React, { Component } from 'react';
//import { Panel, Button } from 'react-bootstrap';

class DayPanel extends Component {
  render() {
    return (
      <div className="DayPanel">
        {this.props.conditions}
        <br />
        <img src={this.props.icon_url}
          alt={this.props.conditions} />
      </div>
    );
  }
}

export default DayPanel;
