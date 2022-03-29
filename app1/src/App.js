import React, { Suspense } from 'react';
// const RemoteApp = React.lazy(() => import('app2/App'));
import DynamicComponent from './loadComponents.jsx'

const App = () => {
  
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1...</h1>
      </div>
      <DynamicComponent/>
    </div>
  );
};



export default App;
