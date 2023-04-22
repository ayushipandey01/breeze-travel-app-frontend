import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { CategoryProvider , DateProvider , FilterProvider , AuthProvider} from './context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CategoryProvider>
        <DateProvider>
          <FilterProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </FilterProvider>          
        </DateProvider>
      </CategoryProvider>
    </BrowserRouter>    
  </React.StrictMode>
);

