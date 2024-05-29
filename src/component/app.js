import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import store from '../store/index';
import Counter from './counter';
import NewTab from './NewTab';
//import NewTabContent from './NewTabContent'; // Component to render in new tab

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={Counter} />
          <Route path="/new-tab" component={NewTab} />
        </Switch>
        <NewTab />
      </Router>
    </Provider>
  );
};

export default App;
