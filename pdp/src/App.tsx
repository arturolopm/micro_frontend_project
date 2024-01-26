import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './index.scss';
import 'remixicon/fonts/remixicon.css';

import Header from 'home/Header';
import Footer from 'home/Footer';
import PDPContent from './components/PDPContent';

const App = () => {
  return (
    <Router>
      <div className='text-3xl mx-auto max-w-6xl'>
        <Header />

        <div className=' my-10'>
          <Routes>
            <Route
              path='/product/:id'
              element={<PDPContent />}
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
