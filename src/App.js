import logo from './logo.svg';
import './App.css';
import AdmissionForm from './components/AdmissionForm';
import {Route , Routes} from 'react-router-dom'
import AdmissionForm2 from './components/AdmissionForm2';
import AdmissionForm3 from './components/AdmissionForm3';
import AdmissionForm4 from './components/AdmissionForm4';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<AdmissionForm/>}/>
        <Route path='/form' element={<AdmissionForm2/>}/>
        <Route path='/from' element={<AdmissionForm3/>}/>
        <Route path='/from1' element={<AdmissionForm4/>}/>
      </Routes>
     
     

    </div>
  );
}

export default App;
