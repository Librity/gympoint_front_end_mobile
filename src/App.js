import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signedIn = useSelector(state => state.student.signedIn);

  const Routes = createRouter(signedIn);

  return <Routes />;
}
