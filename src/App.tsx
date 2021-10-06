import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Card from './components/card';
import Web from './pages/web216';

export default function App() {
  return (
    <Router>
      <div className='container'>
        <Card>
          <Link to='/web216'>web216</Link>
        </Card>
      </div>

      <Switch>
        <Route path='/web216'>
          <Web />
        </Route>
      </Switch>
    </Router>
  );
}
