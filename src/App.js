import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Dropdown from 'react-dropdown'
import logo from './logo.jpg'
import {Route} from 'react-router-dom'
import Vendor from './vendor.js'
import Contracting from './contracts.js'
import Add_contract from './add_contract.js'
import Login from './login.js'
import Compliance from './compliance.js'
class App extends Component {
  state={
    users:[],
    approvals:[],
    contracts:[],
    vendors:[],
    reports:[],
    status:false,
    user:''
  }
  componentDidMount() {

    fetch('http://localhost:3000/approvals')
    .then(response=> response.json())
    //.then(data=>approvals=data)
    .then(data=>this.setState({approvals:data}));
    fetch('http://localhost:3000/vendors')
    .then(response=> response.json())
    //.then(data=>approvals=data)
    .then(data=>this.setState({vendors:data}))
    fetch('http://localhost:3000/reports')
    .then(response=> response.json())
    //.then(data=>approvals=data)
    .then(data=>this.setState({reports:data}))
    fetch('http://localhost:3000/contracts')
    .then(response=> response.json())
    //.then(data=>approvals=data)
    .then(data=>this.setState({contracts:data}))
    fetch('http://localhost:3000/users')
    .then(response=> response.json())
    //.then(data=>approvals=data)
    .then(data=>this.setState({users:data}))
  }
  handleLogin = (user) => {
    this.setState((state)=> {
      return {
        status:!state.status,
        user:user
      }
    }
    )
  }
  handleLogout = () => {
    this.setState((state)=> {
      return {
        status:!state.status,
        user:''
      }
    })
  }
  render() {
    var width=window.screen.width;
    var height=window.screen.height;
    console.log(this.state.user)
    const options = [
      <Link to= '/contracting'>Contracting</Link>,
      <Link to= '/compliance'>Compliance</Link>,
      <Link to= '/rep-credential'>Rep Credentialing</Link>
]
    return (
  /*    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      */
      <div>
      <div className="header">
      <img src={logo} alt="logo" width={0.10*width} height={0.06*height}/>
      <div className="login">
      {!this.state.status &&

        <Link to="/login">Login</Link>
      }
      {this.state.status &&
        <div>
        <h4>Hi {this.state.user.name} ! <button onClick={this.handleLogout}>LOGOUT </button>  </h4>

        </div>
      }
      </div>
      </div>
    <div className="navbar">
    {window.screen.width<=400 &&
<ul>
<li><Link to= '/sourcing'>Sourcing</Link></li>
<li className="dropdown"><Dropdown options={[
  <Link to= '/'>Vendor Management</Link>,
  <Link to= '/contracting'>Contracting</Link>,
  <Link to= '/compliance'>Compliance</Link>,
  <Link to= '/rep-credential'>Rep Credentialing</Link>]}
  placeholder="more" /></li>
<li className="settings"><Link to='/settings'>Settings</Link></li>


</ul>
    }
    {
      window.screen.width>400 && window.screen.width<=600 &&
  <ul>
  <li><Link to= '/sourcing'>Sourcing</Link></li>
  <li><Link to= '/'>Vendor Management</Link></li>

  <li className="dropdown"><Dropdown className="dropdown" options={[
    <Link to= '/contracting'>Contracting</Link>,
  <Link to= '/compliance'>Compliance</Link>,
  <Link to= '/rep-credential'>Rep Credentialing</Link>]}
  placeholder="More"/></li>
  <li  className="settings"><Link to='/settings'>Settings</Link></li>

  </ul>
    }
    {
      window.screen.width>600 && window.screen.width<=800 &&
  <ul>
  <li><Link to= '/sourcing'>Sourcing</Link></li>
  <li><Link to= '/'>Vendor Management</Link></li>
  <li><Link to= '/contracting'>Contracting</Link></li>,

  <li className="dropdown"><Dropdown className="dropdown" options={[
  <Link to= '/compliance'>Compliance</Link>,
  <Link to= '/rep-credential'>Rep Credentialing</Link>]}
  placeholder="More"/></li>
  <li  className="settings"><Link to='/settings'>Settings</Link></li>

  </ul>
    }
    {
      window.screen.width>800 &&
  <ul>
  <li><Link to= '/sourcing'>Sourcing</Link></li>
  <li><Link to= '/'>Vendor Management</Link></li>
  <li className="dropdown"><Dropdown options={[
    <Link to= '/contracting/search_contracts'>Search Contracts</Link>,
    <Link to= '/contracting/my_calendar'>My calendar</Link>,
    <Link to= '/contracting/add_contract'>Add Contract</Link>
  ]} placeholder="Contracting"/></li>

  <li className="dropdown"><Dropdown  options={[
  <Link to= '/compliance'>Compliance</Link>,
  <Link to= '/rep-credential'>Rep Credentialing</Link>]}
  placeholder="More"/></li>
  <li  className="settings"><Link to='/settings'>Settings</Link></li>

  </ul>
    }


    </div>
    <Route exact path='/' render={ () => (

      <Vendor vendors={this.state.vendors} approvals={this.state.approvals} reports={this.state.reports}/>
    )}
    />
    <Route path='/contracting/search_contracts' render={ () => (
      <Contracting  contracts={this.state.contracts}/>
    )
  }
  />
    <Route path='/contracting/add_contract' render={ () => (
      <Add_contract  contracts={this.state.contracts}/>
    )
  }
  />
  <Route path='/compliance' render={ () => (
    <Compliance />
  )
}
/>
<Route path='/login' render= { () => (
  <Login users={this.state.users} handleLogin={this.handleLogin}/>
)

}
/>

    </div>
    );
  }
}

export default App;
