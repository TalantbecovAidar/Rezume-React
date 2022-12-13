import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavbarCustom from './components/HomePage/Navbar/Navbar';
import MainRoutes from './MainRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <NavbarCustom/>
      <MainRoutes/>
      </BrowserRouter>
    </div>
  );
};

export default App;
