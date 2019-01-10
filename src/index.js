import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BallResizer } from './BallResizer'

function App() {
  return (
    <div className="App">
      <BallResizer
        initialSize={200}
        minSize={150}
        maxSize={250}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
