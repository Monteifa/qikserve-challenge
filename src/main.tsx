import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { DataContextProvider } from './contexts/DataContext.tsx';
import { ModalContextProider } from './contexts/ModalContext.tsx';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ModalContextProider>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </ModalContextProider>
  </StrictMode>
);
