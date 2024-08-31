import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ForgetPassword from './components/ForgetPassword';
import ClientSide from './components/LoginSide';
import Billing from './components/Billing';
import Cart from './components/Cart';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={
            <div className="LandingWrapper">
              <header className="header">
                <Navbar />
              </header>
              <div className='Main'>
                <Home />
              </div>
            </div>
          } />
          <Route path='/clientside' element={
            <div className="client_side_wrapper">
              <ClientSide></ClientSide>
            </div>
          } />
          <Route path='/ForgetPassword' element={
            <div className="forgetPW_con">
              <ForgetPassword></ForgetPassword>
            </div>
          } />
          <Route path='/Billing' element={
            <div className="Billing_con">
              <Billing></Billing>
            </div>
          } />
          <Route path='/Cart' element={
            <div className='cart_wrapper'>
              <Cart></Cart>
            </div>
          }/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
