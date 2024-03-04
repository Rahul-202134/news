import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './screen/Login';
import Signup from './screen/Signup';

const App = () => {
  const pageSize = 5;
  const apiKey = '73b64103eaa24e84b390add5993d267a';
  const [progres, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/Signup' element={<Signup/>}/>
          <Route exact path="/" element={<News key="general" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="general" />}/>
          <Route exact path="/general" element={<News key="general" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="general" />} />
          <Route exact path="/business" element={<News key="business" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="business" />} />
          <Route exact path="/entertainment" element={<News key="entertainment" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="entertainment" />} />
          <Route exact path="/health" element={<News key="health" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="health" />} />
          <Route exact path="/science" element={<News key="science" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="science" />} />
          <Route exact path="/sports" element={<News key="sports" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="sports" />} />
          <Route exact path="/technology" element={<News key="technology" apiKey={apiKey} setProgress={setProgress} country="in" pageSize={pageSize} category="technology" />} />
        </Routes>
      </Router>
    </div>
  );
};
export default App;
