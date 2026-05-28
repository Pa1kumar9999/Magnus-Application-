// App.jsx
// This is the TRAFFIC POLICE of our app!
// It decides WHICH PAGE to show
// based on the URL in browser


import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // BrowserRouter = enables navigation, Routes = list of all pages, route = one specific page
// Importing all our pages
import Login from './pages/Login'; // login page
import Home from './pages/Home';  // home page
import CreateEmployee from './pages/CreateEmployee'; // create employee page
import SearchEmployee from './pages/SearchEmployee';  // search employee page
import EditEmployee from './pages/EditEmployee';

// NEW IMPORTS FOR MORE MENU PAGES
import Tabs from './more/Tabs';
import Popups from './more/Popups';
import Autocomplete from './more/Autocomplete';
import Collapse from './more/Collapse';
import Images from './more/Images';
import Slider from './more/Slider';
import Tooltips from './more/Tooltips';
import Links from './more/Links';
import CssProperty from './more/CssProperty';
import Iframes from './more/Iframes';
import Menu from './more/Menu';
function App() {
  return (
    // browser router enables navigation
    <BrowserRouter>
      <Routes> 
        {/* when url = localhost:3000/ show login page */}
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />   {/* when url = localhost:3000/home show home page */}
        <Route path="/employee/create" element={<CreateEmployee />} />
        <Route path="/employee/search" element={<SearchEmployee />} />
        <Route path="/employee/edit/:id" element={<EditEmployee />} />
        
        {/* MORE MENU ROUTES */}
        <Route path="/more/tabs" element={<Tabs />} />
        <Route path="/more/popups" element={<Popups />} />
        <Route path="/more/autocomplete" element={<Autocomplete />} />
        <Route path="/more/collapse" element={<Collapse />} />
        <Route path="/more/images" element={<Images />} />
        <Route path="/more/slider" element={<Slider />} />
        <Route path="/more/tooltips" element={<Tooltips />} />
        <Route path="/more/links" element={<Links />} />
        <Route path="/more/css-properties" element={<CssProperty />} />
        <Route path="/more/iframes" element={<Iframes />} />
        <Route path="/more/menu" element={<Menu />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;