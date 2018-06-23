import React from 'react';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

// components
import MainTemplate from './components/MainTemplate';

render(
  <MainTemplate />
  , document.getElementById('root')
);
registerServiceWorker();
