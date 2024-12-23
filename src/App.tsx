import { useState } from 'react';
import { app } from 'firebaseApp';
import {getAuth} from "firebase/auth";

import Router from './components/Router';

export default function App() {
  const auth = getAuth(app);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);
  return <Router isAuthenticated={isAuthenticated}/>;
}
