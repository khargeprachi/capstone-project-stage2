import React, { Component } from 'react';
import PieChart from 'react-minimal-pie-chart';
import BarChart from 'react-bar-chart';
import {TablePagination} from "react-pagination-table";
import Modal from 'react-modal';
class Vendor extends Component {
state={
  showModal: false
}
openModal = () => {
  this.setState({showModal:true})
}
closeModal = () => {
  this.setState({showModal:false})

}
addEdit () {
  var table=document.querySelectorAll(".reports .table tr td");
  (table);
  //table.filter(tab=>tab.textContent=="").innerHTML="<button>EDIT</button>"
  ////console.log(table.filter(tab=>tab.textContent==""));
}
  render() {
    var width=window.screen.width;
    var height=window.screen.height;
    var registered_length=this.props.vendors.filter(vendor=>vendor.status=="registered").length;
    var sub_groups=this.props.vendors.map(vendor=>vendor.sub_group);
    var uniqueGroups = Array.from(new Set(sub_groups))
    var bar_data=uniqueGroups.map(subgroup=>this.props.vendors.filter(vendor=>subgroup==vendor.sub_group).length);
    var data=new Array();
    //var report_data=this.props.reports.map(report=> report["action"]="<button></button>");
    /*var report_data=this.props.reports.forEach((report)=> {//console.log(report.report_name);
    report.action="edit"});
  //  //console.log(this.props.reports);*/

  uniqueGroups.map((group,i)=>data.push({text:group,value:bar_data[i], color:'#c7c5c5'}))
  //console.log(data);
  //console.log(uniqueGroups);

const margin = {top: 20, right: 20, bottom: 30, left: 40};


var approvalFinal=new Array();
this.props.approvals.map((app)=>{
  var temp={};

  console.log(app.vendor_id);
  temp.vendor_id=app.vendor_id;
  temp.vendor_name=app.vendor_name;
  temp.approval_date=app.approval_date;
  temp.approval_name=app.approval_name;
  temp.action=<button>Approval/Stop</button>;
  approvalFinal.push(temp)
  });
  var reportFinal=new Array();
  this.props.reports.map((report)=>{
    var temp={};
    temp.report_name=report.report_name;
    temp.report_description=report.report_description;
    temp.report_type=report.report_type;
    temp.updated_on=report.updated_on;
    temp.updated_by=report.updated_by;
    temp.action=<button>Edit</button>;
    reportFinal.push(temp)
    });
  console.log(reportFinal)

    return (
      <div className="content">
      <div className="diagram">
        <div className="pie-chart">
        <h5> Registration status as of </h5>
          <PieChart
            data={[
              { value: registered_length, color: '#E38627' },
              { value: this.props.vendors.length-registered_length, color: '#C13C37' }

            ]}
            radius={25 }
            cx={50}
            cy={30}
            labels={ true }

          />
        </div>
        <div className="bar-chart">
        <h5> Vendor Sub groups  </h5>

          <BarChart
            grid
            data= {data}
            width={0.50*width}
            height={0.30*height}
            margin={margin}

          />
        </div>
      </div>
  <div className="approvals">
    <h5> My pending approvals <span><button onClick={this.openModal}>Show Past Vendor Approvals</button> </span></h5>
    {/*<table>
      <tr>
        <th>Date</th>
        <th>Approval Name</th>
        <th>Vendor Name</th>
        <th>Action</th>
      </tr>
      {this.props.approvals.map((approval)=>(
        <tr>
          <td>{approval.approval_date}</td>
          <td>{approval.approval_name}</td>
          <td>{approval.vendor_name}</td>
          <td>{approval.approval_status}</td>
        </tr>
        )
      )}
      <Pagination
      activePage={this.state.activePage}
      itemsCountPerPage={1}
      totalItemsCount={4}
      pageRangeDisplayed={2}
      onChange={num=>this.handlePageChange(num)}
      />
    </table>
    */}

{(this.props.approvals.length) &&
    <TablePagination

                headers={ ["Date","Approval Name","Vendor name","Action"]}
                data={ approvalFinal }
                columns="approval_date.approval_name.vendor_name.action"
                perPageItemCount={ 4 }
                totalCount={ this.props.approvals.length }
                arrayOption={ [["size", 'all', ' ']] }
                partialPageCount={5}
                nextPageText=">>"
                prePageText="<<"

    />
  }
    <Modal
      isOpen={this.state.showModal}
           contentLabel="onRequestClose Example"
           onRequestClose={this.closeModal}
           shouldCloseOnOverlayClick={false}
           className="Modal"
           overlayClassName="Overlay"
           >

           <h4>Approvals History <span><button onClick={this.closeModal} className="closeButton">x</button> </span></h4>

{(this.props.approvals.length) &&
    <TablePagination

                headers={ ["Date","Approval Name","Vendor name","Action"]}
                data={ this.props.approvals }
                columns="approval_date.approval_name.vendor_name.approval_status"
                perPageItemCount={ 4 }
                totalCount={ this.props.approvals.length }
                arrayOption={ [["size", 'all', ' ']] }
                partialPageCount={5}
                nextPageText=">>"
                prePageText="<<"


    />
  }
    </Modal>
  </div>
  <div className="reports">
  <h5> My reports </h5>
  {/*<table>
    <tr>
      <th>Report Name</th>
      <th>Report Description</th>
      <th>Report Type</th>
      <th>Updtated on</th>
      <th>Updtated By</th>
      <th> </th>

    </tr>
    {this.props.reports.map((report)=>(
      <tr>
        <td>{report.report_name}</td>
        <td>{report.report_description}</td>
        <td>{report.report_type}</td>
        <td>{report.updated_on}</td>
        <td>{report.updated_by}</td>
        <td><button>Edit</button></td>
      </tr>
      )
    )}
  </table>
  */}

{(this.props.reports.length) &&
  <TablePagination

              headers={ ["Report Name","Report Description","Report type","Updated On","Updated by",""]}
              data={ reportFinal }
              columns="report_name.report_description.report_type.updated_on.updated_by.action"
              perPageItemCount={4 }
              totalCount={ this.props.reports.length }
              arrayOption={ [["size", 'all', ' ']] }
              partialPageCount={1}
              nextPageText=">>"
              prePageText="<<"

  />
}
{this.addEdit()}

  </div>
</div>
    )
  }
}
export default Vendor;
