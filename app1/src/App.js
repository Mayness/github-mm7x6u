import React, { Suspense } from 'react';
import DynamicComponent from './loadComponents.jsx'
const lerna = React.lazy(() => import('lerna')) 

const App = () => {
  console.log(lerna)
  return (
    <div>
      <div style={{
        margin: "10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"red"
      }}>
        <h1 >App 1</h1>
      </div>
      <DynamicComponent/>
    </div>
  );
};



export default App;
