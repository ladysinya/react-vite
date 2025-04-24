import { createRoot } from 'react-dom/client'
import React from 'react'
import { IntegrationContextProvider } from './Contexts/SIContext.tsx'
import SampleIntegration from './Integration.tsx'
import './index.css'

const root = createRoot(
  document.getElementById('jess-root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <IntegrationContextProvider>
      <SampleIntegration />
    </IntegrationContextProvider>
  </React.StrictMode>
);
