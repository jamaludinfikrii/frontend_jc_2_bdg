import React from 'react';
import Button from './components/Button'
import Error from './components/Error'
import {nama,gender} from './latihan/export_import'
import Photo from './components/Photo'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App () {
  const alertHello = () => {
    alert('Hello')
  }

  const alertHai = () => {
    alert('Hai')
  }

  return (
    <div  style={{border:'1px solid red'}}>
      <button className='btn btn-primary'> Ini bootstrap </button>
      hello world all
      <Button functionKlik={alertHello} a='klik'/>
      <Error warna='danger' bebas='error password'/>
      {nama + ' ' + gender}
      <Button functionKlik={alertHai} a='submit' />
      <Error warna='primary'  bebas='error Username not valid'/>
      <Photo width='50px' link='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
      <Photo width='200px' link='https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg' />
    </div>

  );
  
}

export default App;




// class extends
// jsx
// component 
    // biasanya dimuali dengan uppercase
    // render on a Component must be only one tag parent!
    // class component dan function component
// file management
    // components | pages | supports
// import & export
    // export 
        // export default
        // export named
    // import 
        // import default
        // import named
// props
// routing
// state && lifecycle method
