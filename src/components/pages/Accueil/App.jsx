import React from 'react';
import './App.css';
import Layout from '../../layout/Layout.jsx';
import Banner from '../../layout/banner.jsx'; 
import Apartements from './ApartementsGrid.jsx';


function App() {
  return (
    <Layout>
      <Banner /> 
      <Apartements/>    
    </Layout>
  );
}

export default App;
