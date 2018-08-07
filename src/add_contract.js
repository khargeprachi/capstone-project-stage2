import React, { Component } from 'react';
import {Post} from 'react-axios';
import axios from 'axios';
import * as DataAPI from './data.json';
 class Add_contract extends Component {
   handleSubmit() {
var data={
  "vendor_id": '124',
  "contract_id" : 'a23',
  "contract_name": 'My first Contract',
  "description": 'this is description',
  "sub_group": 'lab',
  "group" : 'PVM Care 31'
}
var myheader = new Headers();

myheader.append('Content-Type', 'application/json');
console.log(myheader);
//DataAPI.contracts.push(data);
        fetch('http://localhost:3000/contracts', {
          mode:'cors',
      method: 'POST',
      body:data,
      headers: myheader,
      cache:'default'

    }).then(response=>console.log(JSON.parse(response)))

    .catch(error=>console.log(error))


/*axios.post('http://localhost:3000/contracts', {
  "vendor_id": "123",
  "contract_id" : "a23",
  "contract_name": "My first Contract",
  "description": "this is description",
  "group" : "PVM Care 31",
  "sub_group": "lab"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })

/*axios.get(`http://localhost:3000/contracts`)
      .then(res => {
      console.log(res)
      })
      */
/*
<Post url="/contracts" data={{vendor_id: "12345"}}>
        {(error, response, isLoading, onReload) => {
          if(error) {
            console.log('Something bad happened: {error.message} ')
          }
          else if(isLoading) {
          console.log(<div>Loading...</div>)
          }
          else if(response !== null) {
            console.log(<div>{response.data.message} <button onClick={() => onReload({ params: { refresh: true } })}>Refresh</button></div>)
          }
          console.log(<div>Default message before request is made.</div>)
        }}
</Post>
*/
}

   render () {

     return (
       <div className="content">
       <form className="add_contract_form" >
       <h5>Contract ID:</h5> <input type="text"/>
       <h5>Contract Name:</h5> <input type="text"/>
       <h5>Contract Description:</h5> <input type="text"/>
       <h5>Group :</h5> <input type="text"/>
       <h5>Sub Group :</h5> <input type="text"/>
       <h5>Vendor ID:</h5> <input type="text"/>
       <button type="button" onClick={this.handleSubmit}>Submit</button>
       </form>

       </div>
     )
   }
 }
 export default Add_contract;
