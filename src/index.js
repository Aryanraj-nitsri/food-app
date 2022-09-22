import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';



const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<UserContext.Provider value={data}>
            
      <App data={data} />
</UserContext.Provider>
);

