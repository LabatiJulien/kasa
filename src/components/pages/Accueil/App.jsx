import React from 'react';
import './App.css';
import Layout from '../../layout/Layout.jsx';
import Banner from '../../layout/banner.jsx'; 
import ApartementsGrid from './ApartementsGrid.jsx';


function App() {
  return (
    <Layout>
      <Banner /> 
      <ApartementsGrid/>    
    </Layout>
  );
}

export default App;
