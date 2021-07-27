import React from 'react';
import ReactDOM from 'react-dom';

import Header from './Header.jsx'

import CallFeed from './components/CallFeed.jsx';

const App = () => {
  return (
    <div className='container'>
      <div className="container-view">
        <Header></Header>
        <CallFeed></CallFeed>
      </div>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
