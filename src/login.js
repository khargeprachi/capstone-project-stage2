import React, { Component } from 'react';
import { Grid, Segment } from 'semantic-ui-react'

class Login extends Component {
  state={
    match:false
  }
handleSubmit=() => {
var userid=document.querySelector("#loginForm #userid").value;
var pwd=document.querySelector("#loginForm #pwd").value;

var user=this.props.users.filter(user=>userid==user.id);
if(user.length>0) {

if(user[0].password==pwd)
{
  document.querySelector("#loginForm").innerHTML="LOGIN SUCCESSFULL!"
  this.props.handleLogin(user[0]);
}
}

}
/*
checkPwd= () =>{
  var pwd=document.querySelector("#pwd").value;
  var rePwd=document.querySelector("#rePwd").value;

if(pwd===rePwd){
  //console.log(this.state.match)
this.setState((state)=> {
  return {
    match:!state.match
  }
})
}
}
*/
render () {

  return (
  <div className="content">
<Grid>
<Grid.Row>
<div className="login_page">
  <div className="loginHeading">
  <h4>Existing Users</h4>
  <h6>Forgot Password?</h6>
  </div>

  <form id="loginForm">

  <input id="userid" type="text" placeholder="sample@sample.com"/>

  <input id="pwd" type="text" placeholder="******"/>
<input id="check" type="checkbox" />
<h6>Remember Me</h6>
  </form>
  <button id="submit" type="button" onClick={this.handleSubmit}>Login</button>

</div>
</Grid.Row>
<Grid.Row>
<div className="footer">
<table>
<tr>
<th>Providers</th>
<th>Suppliers</th>
<th>FAQ</th>
<th>Solutions</th>
</tr>
<tr>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
</tr>
<tr>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
</tr>
<tr>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
</tr>
<tr>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
<td>Loren Ipsum</td>
</tr>

</table>
</div>
</Grid.Row>
</Grid>







  </div>
  )
}
}
export default Login;
