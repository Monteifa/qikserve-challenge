import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CartContextProvider } from './contexts/CartContext.tsx';
import { DataContextProvider } from './contexts/DataContext.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartContextProvider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </CartContextProvider>
  </StrictMode>
);
