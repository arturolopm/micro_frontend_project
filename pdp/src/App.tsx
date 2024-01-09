import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import SafeComponent from './components/SafeComponent';
const Header = lazy(() => import('home/Header'));
const Footer = lazy(() => import('home/Footer'));

const App = () => {
  return (
    <div className='text-3xl mx-auto max-w-6xl'>
      <SafeComponent>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      </SafeComponent>

      <div className=' my-10'>PDP page</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById('app'));
