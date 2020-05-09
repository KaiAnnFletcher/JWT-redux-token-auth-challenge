import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wrapper from "./components/Wrapper";
//import Logout from "./pages/Logout";
//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
    <div>
    <Wrapper>
     <Navbar />
     <Footer />
    {/* <Route exact path="/" component={Home} /> */}
    <Route exact path="/login" component={Login} />
    {/* <Route exact path="/logout" component={Logout} /> */}
    <Route exact path="/signup" component={Signup} />
    </Wrapper>
    
    </div>
    </Router>
  )
  
  }
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
