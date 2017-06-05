import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToolBar  from './components/ToolBar';
import MainPanel from './components/MainPanel';
import FontAwesome from 'react-fontawesome';

class App extends Component {
  constructor() {
    super();
    this.state = { forecast: '' };
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/fb5a5c58f15ccc91/forecast/q/MD/Baltimore.json`)
      .then(result => result.json())
      .then(forecast => this.setState({forecast}));
      //.then(forecast => console.log(forecast.forecast.simpleforecast));
  }

  render() {
    if (!this.state.forecast) {
      //return (<div> Loading... </div>)
      return (<FontAwesome
                className='super-crazy-colors'
                name='fa-spinner'
                size='2x'
                spin
              />
              )
    }
    let { simpleforecast } = this.state.forecast.forecast;
    console.log(simpleforecast);

    if (!simpleforecast) {
      return (<div> Loading ... </div>)
    }
    let conditions = simpleforecast.forecastday[0].conditions;
    let icon_url = simpleforecast.forecastday[0].icon_url;
    let weather = [];
    simpleforecast.forecastday.forEach( (x) => {
      weather.push({ conditions: x.conditions,
                       icon: x.icon,
                      icon_url: x.icon_url
                    })
    });
    console.log(weather);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Patrick's Personal Weather Station (PPWS)</h2>
        </div>
        <div className="Tools">
          <ToolBar />
          <br />
          <FontAwesome
                    name='fa-spinner'
                    size='2x'
                    tag='i'
                  />
        </div>
        <p className="App-intro">
          Patrick's Personal Weather Station (PPWS)
        </p>
        <MainPanel conditions={conditions}
                   icon_url={icon_url}
                   weather={weather} />
      </div>
    );
  }
}

export default App;

//forecast={this.state.forecast}
