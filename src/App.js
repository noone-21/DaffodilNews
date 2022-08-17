import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
  // const apiKey = "afb8b2ef817e4373ad95d6c3e21b049b"


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
      <Routes>
        <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='general' category='general' />} ></Route>
        <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='business' category='business' />} ></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='entertainment' category='entertainment' />} ></Route>
        <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='health' category='health' />} ></Route>
        <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='science' category='science' />} ></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='sports' category='sports' />} ></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key='technology' category='technology' />} ></Route>
      </Routes>
      <Footer />
    </Router>

  )

  // }

}

export default App



