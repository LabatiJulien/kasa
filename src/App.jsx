import React from 'react';
import './App.css';
import Layout from './components/Layout.jsx';
import Banner from './components/banner.jsx'; 
import Apartements from './components/ApartementsGrid.jsx';


function App() {
  return (
    <Layout>
      <Banner /> 
      <Apartements/>    
    </Layout>
  );
}

export default App;
