import React, { Suspense } from 'react';
import DynamicComponent from './loadComponents.jsx'
// const Chunk1 = React.lazy(() => import('subsyStem1/App'))
// const Chunk2 = React.lazy(() => import('subsyStem2/App'))

const App = () => {
  
  return (
    <div>
      <div style={{
        margin: "10px",
        padding:"10px",
        textAlign:"center",
        backgroundColor:"red"
      }}>
        <h1 >core page</h1>
      </div>
      <DynamicComponent scope="subsyStem1" module="./App"/>
      <DynamicComponent scope="subsyStem2" module="./App"/>
    </div>
  );
};



export default App;
