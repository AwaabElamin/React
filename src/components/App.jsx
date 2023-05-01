import '../css/App.css';
import {CreateForm, CreateFormJSX} from './createFeature';
import { Employees } from './employees/Employees';
import Product from './Product';
import logo from '../images/logo.svg';
import{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  let [isJSX, setIsJSX] = useState(false);
  // let isJSX = false;
  let Go = ()=> {setIsJSX(!isJSX)}
  return (
    <div className="App">
      <header>
        <img alt='Logo' src={logo} width="120" height="120"/>
        <Product/>
       {/* <div><CreateForm/></div> 
        <div><CreateFormJSX/></div> */}
        <div>
          <button className='btn btn-primary' value= 'CreateForm' onClick={Go}>Create From</button>
        </div>
        {isJSX?(<CreateForm/>):(<CreateFormJSX/>)}
        <Employees/>
      </header>
    </div>
  );
}

export default App;
