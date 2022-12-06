import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { registerLicense } from '@syncfusion/ej2-base';

import { BrowserRouter } from "react-router-dom";

registerLicense('ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RhXX5adHFWQmNfUkM= ');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter >
    <App />
  </BrowserRouter>
);


