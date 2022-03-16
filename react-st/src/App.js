import './App.css';
import React, { useState } from 'react';
import Counter from './components/Counter';
import './styles/Favorits.css';
import './styles/Box.css'
import './styles/Privacy Report.css'
import './styles/Siri Suggestions.css'
import Box from './components/Box';
import Favorits from './components/Favorits';
import Privacy_Report from './components/Privacy Report';
import Siri_Sugg from './components/Siri Suggestions';
import data from './data.json'


function App() {

  return (

    <div className = "App">
      <Box content = {data.favourites} boxTitle ="Favorites" />
      <Box content = {data.reportCount} boxTitle ="Privacy Report" />
      <Box content = {data.suggestions} boxTitle ="Siri Suggestions" />
      {/* <Box icons = {icons3} boxTitle ="Siri Suggestions" /> */}
    </div>
  );
}

export default App;
