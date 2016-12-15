import React, { Component } from 'react';
import DayPanel from '../components/DayPanel';

//import { Panel, Button } from 'react-bootstrap';

class MainPanel extends Component {
  render() {
    return (
      <div className="MainPanel">
        {
          this.props.weather.map((x) => {
            return <DayPanel conditions={x.conditions} icon_url={x.icon_url} />
            }
          )
        }
      </div>
    );
  }
}

export default MainPanel;

// {this.props.conditions}
// <br />
// <img src={this.props.icon_url}
//   alt={this.props.conditions} />
