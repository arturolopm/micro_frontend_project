import React, { useEffect, useRef, useState } from 'react';
import { login, jwt } from '../utils/cart';
import Login from './Login';
const CartContent = () => {
  const [token, setToken] = useState('');
  console.log(token);

  useEffect(() => {
    const subscription = jwt.subscribe((val) => setToken(val ?? ''));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div>
      <div></div>JWT: {token}
      <Login />
    </div>
  );
};
export default CartContent;
