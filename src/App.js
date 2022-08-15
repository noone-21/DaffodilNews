import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import React, { useState } from 'react'
// import React, { Component } from 'react'

import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'
import Footer from './components/Footer';

const App = () => {
  // export class App extends Component {
  const pageSize = 15
  const apiKey = process.env.REACT_APP_NEWS_API


  const [progress, setProgress] = useState(0)
  // state={
  //   progress: 0
  // }
  // setProgress=(progress)=>{
  //   this.setState({progress: progress})
  // }

  // render() {

  return (
    <Router>
      <Navbar />
      <LoadingBar
        color='#f11946'
        progress={progress}
        height={3}
      />
      <Switch>
        <Route exact path="/">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' category='general' />
        </Route>
        <Route exact path="/business">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='business' category='business' />
        </Route>
        <Route exact path="/entertainment">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='entertainment' category='entertainment' />
        </Route>
        <Route exact path="/health">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='health' category='health' />
        </Route>
        <Route exact path="/science">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='science' category='science' />
        </Route>
        <Route exact path="/sports">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='sports' category='sports' />
        </Route>
        <Route exact path="/technology">
          <News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='technology' category='technology' />
        </Route>
      </Switch>
      <Footer/>
    </Router>

  )

  // }

}

export default App



