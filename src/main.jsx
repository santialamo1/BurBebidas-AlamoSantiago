import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBAqEhcXEHFrKQ0QCccVfkmvgdLGmmQndE",
  authDomain: "burbebidas.firebaseapp.com",
  projectId: "burbebidas",
  storageBucket: "burbebidas.appspot.com",
  messagingSenderId: "483650040396",
  appId: "1:483650040396:web:1465d2f72bb45c46cf7ae9",
  measurementId: "G-NGYKKVNL8G"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
