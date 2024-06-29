// Package
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Flex from './Flex.jsx';

// Styles
import './index.css'

// Components 
import App from './App.jsx';
import Placeholder from './Placeholder.jsx';
import { Home, About, UserProfile } from './Components.jsx'

// DATA
import userData from '../data/users.js';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index element={<Home />} />
      <Route path='/about' element={ <About /> } />
      <Route path='/flex' element={ <Flex /> } />
      <Route 
        path='/user/:userId'
        element={<UserProfile something="A thought" age={27} />}
        loader={ (request) => {
          const userId = request.params.userId
          console.log(userData[userId]);

          return userData[userId];
        } }
      />
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } /> 
)