import React, { Component } from 'react';
import Button from './components/Button'
import nama from './components/coba'

class App extends Component {

  render() {
    return (
      <div  style={{border:'1px solid red'}}>
        hello world all
        {nama}
        <Button>
        </Button>
      </div>
    );
  }
}

export default App;




// class extends
// jsx
// component
    // biasanya dimuali dengan uppercase
    // render on a Component must be only one tag parent!
// file management
    // components | pages | supports
// import & export