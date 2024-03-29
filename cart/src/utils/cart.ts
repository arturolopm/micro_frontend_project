import React, { useEffect, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

const API_SERVER = 'http://localhost:8080';

export const jwt = new BehaviorSubject(null);

export const login = (username: string, password: string) => {
  fetch(`${API_SERVER}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      jwt.next(data.access_token);

      return data.access_token;
    });
};

export function useLoggedIn() {
  const [loggedIn, setLoggedIn] = useState(!!jwt.value);
  useEffect(() => {
    const updateLoggedInStatus = () => {
      setLoggedIn(!!jwt.value);
    };
    updateLoggedInStatus();
    const subscription = jwt.subscribe(updateLoggedInStatus);

    return subscription.unsubscribe();
  }, [jwt.value]);
  return loggedIn;
}
