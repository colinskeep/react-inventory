import React from "react";
import ReactDOM from "react-dom";
import logo from './logo.png';
import {
  BrowserRouter as Router,
  NavLink,
  Route
} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Dashboard from './views/dashboard';
import Inventory from './views/inventory';
import io from 'socket.io-client';
const ENDPOINT = 'http://localhost:3000';
const socket = io(ENDPOINT);

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar>
          <Navbar.Brand as={NavLink} to="/">
            <img src={logo} height="50px"/>
          </Navbar.Brand>
          <Nav>
            {/* "NavLink" here since "active" class styling is needed */}
            <Nav.Link as={NavLink} to="/" exact>
              Dashboard
            </Nav.Link>
            <Nav.Link as={NavLink} to="/inventory">
              Inventory
            </Nav.Link>
            <Nav.Link as={NavLink} to="/orders">
              Orders
            </Nav.Link>
            <Nav.Link as={NavLink} to="/purchasing">
              Purchasing
            </Nav.Link>
            <Nav.Link as={NavLink} to="/reports">
              Reports
            </Nav.Link>
          </Nav>
        </Navbar>
        <Route path="/" exact component={Dashboard} />
        <Route path="/inventory" exact component={Inv} />
        <Route path="/orders" exact component={Ord} />
        <Route path="/purchasing" exact component={Pur} />
        <Route path="/reports" exact component={Rep} />
      </div>
    </Router>
  );
}

function Inv() {
  return <Inventory socket={socket}/>
}

function Ord() {
  return <div>Orders</div>;
}
function Pur() {
  return <div>Purchasing</div>;
}
function Rep() {
  return <div>Reporting</div>;
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;
