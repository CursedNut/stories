import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

const element = document.getElementById('app');
if (element !== null) {
  const root = createRoot(element);
  root.render(<App />);
}
