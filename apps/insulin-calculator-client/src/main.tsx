import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { InsulinCalculator } from './calculator/InsulinCalculator';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <InsulinCalculator />
  </StrictMode>
);
