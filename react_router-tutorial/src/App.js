
import React from 'react'
import { Link, Route } from 'react-router-dom'
import { About } from './About'
import { Home } from './Home'
import { Profile } from './Profile'

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" exact={true} component={Home}/>
      <Route path="/about" component={About} />
      <Route path="/profiles/:username" component={Profile} />
    </div>
  );
}

export default App;
