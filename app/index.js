import React from 'react';
import { render } from 'react-dom';
import { Provider } from "mobx-react";

import stores from "stores";
import App from './containers/App';

render(
  <Provider {...stores}>
    <App />
  </Provider>
, document.getElementById('app'));
