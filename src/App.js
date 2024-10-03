import React, { Component } from 'react';
import './App.css';
import picture from './assets/images/picture.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: 'John Doe',
        bio: 'A software engineer with a passion for open-source development.',
        imgSrc: picture, // Use the imported image
        profession: 'Software Engineer',
      },
      shows: false,
      lastMountedTime: 0,
      timer: 0,
    };
  }

  componentDidMount() {
    this.setState({
      lastMountedTime: Date.now(),
    });

    this.intervalId = setInterval(() => {
      this.setState({
        timer: Math.floor((Date.now() - this.state.lastMountedTime) / 1000),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {this.state.shows ? 'Hide Profile' : 'Show Profile'}
        </button>

        {this.state.shows && (
          <div>
            <img src={this.state.Person.imgSrc} alt="Profile" width="200" height="200" />
            <h2>{this.state.Person.fullName}</h2>
            <p>{this.state.Person.bio}</p>
            <h3>{this.state.Person.profession}</h3>
          </div>
        )}

        <div>
          <h4>Time since last mount: {this.state.timer} seconds</h4>
        </div>
      </div>
    );
  }
}

export default App;
