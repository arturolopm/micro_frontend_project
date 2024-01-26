import React, { useState } from 'react';

import { login, useLoggedIn } from '../utils/cart';

const Login = () => {
  const loggedIn = useLoggedIn();
  console.log(loggedIn);

  const [showLogin, setShowLogin] = useState(false);

  const [userName, setUserName] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) return null;
  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i
          className='ri-fingerprint-line text-2xl'
          id='showlogin'
        />
      </span>
      {showLogin && (
        <div
          className='absolute p-5 border-4 border-black'
          style={{ width: 300, top: '2rem' }}
        >
          <input
            type='text'
            placeholder='User name'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border text-sm border-gray-400 p-2 rounded-md w-full'
          />
          <button
            className='bg-green-900 text-white py-2 px-5 rounded-md'
            onClick={() => login(userName, password)}
            id='loginbtn'
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
