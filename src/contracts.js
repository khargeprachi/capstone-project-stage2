import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import {TablePagination} from "react-pagination-table";
import search from './search.png'

import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Modal from 'react-modal'

class Contracting extends Component {
  state={
    query:{text:'',column:''},
    contracts:this.props.contracts

  }
componentDidMount() {
  this.setState({contracts:this.props.contracts})
}
  updateQuery(event,column) {
    var quer=event.target.value;
    const match=new RegExp(escapeRegExp(quer),'i');
    var showingContracts=this.props.contracts.filter((contract)=>match.test(contract[column]));
this.setState({
  //query: this.state.query.concat({text:quer,column:column})
  query:{text:quer,column:column},
  contracts:showingContracts


})


  }
  render() {
    {/*if(this.state.query.length) {
      console.log(this.state.query)
      this.state.query.map(query=>
        {
      })
    }*/}
    var width=window.screen.width;
    var height=window.screen.height;
    var data = [{
      contract_id:<input type="text" placeholder=" "
              onChange={(event) => this.updateQuery(event,"contract_id")}
      />,
      contract_name:<input type="text" placeholder=" "
              onChange={(event) => this.updateQuery(event,"contract_name")}
      />,
      description:<input type="text" placeholder=" "
              onChange={(event) => this.updateQuery(event,"description")}
      />,
      group:<input type="text" placeholder=" "
              onChange={(event) => this.updateQuery(event,"group")}
      />,
      sub_group:<input type="text" placeholder=" "
              onChange={(event) => this.updateQuery(event,"sub_group")}
      />
    }]


var tab=data.concat(this.state.contracts);
    return (
    <div className="content">
    <h3><span><img src={search} width={0.035*width} height={0.04*height}/> </span>Search by title or author</h3>

    <TablePagination

                headers={ ["Contract id","Contract name","Description","Group","Sub Group"]}
                data={data.concat(this.state.contracts) }
                columns="contract_id.contract_name.description.group.sub_group"
                perPageItemCount={ 5 }
                totalCount={ this.state.contracts.length }
                arrayOption={ [["size", 'all', ' ']] }
                partialPageCount={5}
                nextPageText="Next"
                prePageText="Prev"
    />
    </div>
    )
  }
}
export default Contracting;
