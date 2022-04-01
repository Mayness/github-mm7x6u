import React, { Suspense } from 'react';
const Chunk1 = React.lazy(() => import('subsyStem1/App'))
const Chunk2 = React.lazy(() => import('subsyStem2/App'))

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
      <Suspense
        fallback={<h2>Loading</h2>}>
        <Chunk1/>
        <Chunk2/>
      </Suspense>
    </div>
  );
};



export default App;
