
import './App.css'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { Routes , Route } from 'react-router-dom';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <Navbar />
      <Routes>
        <Route exact  path='/' element={<Home/>}> </Route>
        <Route path='/add' element={<AddUser />} />
        <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </div>
  );
}

export default App;
