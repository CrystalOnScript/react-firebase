import React, { Component } from 'react';
import reactpic from './react.png';
import firebasepic from './firebase.png'
import heartpic from './heart.png'
import './App.css';
import FBSurvey from './FBSurvey';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={reactpic} alt="reactlogo" className="logoPic"/>  <img src={heartpic} alt="heart" className="logoPic"/><img src={firebasepic} alt="fblogo" className="fbPic"/>
          <h2>React with Firebase</h2>
          <h4>React app that sends survey results to Firebase database.</h4>
        </div>
        <FBSurvey />
      </div>
    );
  }
}

export default App;
