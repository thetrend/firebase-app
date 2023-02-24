import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { firebase, FirebaseContext } from './components/Firebase';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
    <App />
    </FirebaseContext.Provider>
  </React.StrictMode>,
);