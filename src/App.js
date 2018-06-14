import React, { Component } from 'react';
import { Route,Link } from 'react-router-dom';
import './App.css';
import Library from './components/Library';
import Landing from './components/Landing';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav>
            <ul className="navigation">
              <li className="leftNav">bloc jams</li>
              <li className="rightNav"><Link className="link" to='/library'>Library</Link></li>
              <li className="rightNav"><Link className="link" to="/">Home</Link></li>
            </ul>
          </nav>
        </header>
        <section className="title">
          <h1 className="main-title">bloc jams</h1>
        </section>
        <main>
          <Route exact path="/" component={ Landing } />
          <Route path="/library" component={ Library } />
          <Route path="/album/:slug" component={ Album } />
        </main>
        <footer className="footer">
        </footer>
      </div>

    );
  }
}

export default App;
