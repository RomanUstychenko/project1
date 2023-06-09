import React from 'react';
import ReactDOM from 'react-dom/client';
import  App  from 'components/App/App';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Provider store={store}>
    <PersistGate  persistor={persistor} loading={null}>
  <BrowserRouter basename="project1">
  <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  // </React.StrictMode>
);
