import React from 'react';
import './App.css';
import Layout from './components/layout/Layout.jsx';
import Banner from './components/layout/banner.jsx'; 
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
