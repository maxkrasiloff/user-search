import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Footer from './Components/Footer/Footer';

import { store } from './redux/store';
import UsersContainter from './Components/Users/UsersContainer';

const App:React.FC = () => (
  <div className="App">
    <Provider store={store}>
      <div className="content">
        <UsersContainter />
      </div>
      <Footer />
    </Provider>
  </div>
);

export default App;
