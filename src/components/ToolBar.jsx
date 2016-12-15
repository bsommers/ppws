import React, { Component } from 'react';
import { Panel, Button } from 'react-bootstrap';
import './ToolBar.css';

class ToolBar extends Component {
  render() {
    const panelStyles = {maxWidth: 400, margin: '0 auto 10px'};
    return (
      <div className="ToolBar">
        <Panel bsStyle="primary" style={panelStyles}>
          <Button bsStyle="primary" bsSize="large">Get Weather</Button>
          <Button bsStyle="primary" bsSize="large">Tweet Weather</Button>
          <Button bsStyle="primary" bsSize="large">Full Site</Button>
        </Panel>
      </div>
    );
  }
}

export default ToolBar;
