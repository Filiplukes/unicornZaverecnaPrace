import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import Order from "./order.js";
import Calls from "calls"

export default React.createClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.RouteMixin,
    UU5.Common.CallsMixin,
    UU5.Common.CcrReaderMixin,
    UU5.Forms.FormMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{

    tagName:Cfg.APP + ".ForRentList",
    classNames:{
      main:Cfg.CSS + "-for-rent-list"
    },
    calls:{
      find:"rentFindCars"
    }
  },

  componentWillMount(){
    this.setCalls(Calls)
  },

  _handleLinkClick(link){
      this.getCcrComponentByKey(UU5.Environment.CCRKEY_ROUTER).setRoute(<Order car = {link} from ={this._filterForm.getValues().dateFrom} to = {this._filterForm.getValues().dateTo}/>)
  },



    _getFilterForm(){
    return (<UU5.Bricks.Row>
      <UU5.Forms.BasicForm ref_={this._handleFilterFormReference}>

          <UU5.Bricks.Column colWidth="lg-3">
            <UU5.Forms.Text required name="dateFrom" label="Od" controlled={false} value="2007-08-21" />
          </UU5.Bricks.Column>
          <UU5.Bricks.Column  colWidth="lg-3">
            <UU5.Forms.Text required name="dateTo" label="Do" controlled={false} value="2007-08-23"/>
          </UU5.Bricks.Column>

        <UU5.Bricks.Column>
          <UU5.Forms.Select  name="type" label="Typ">
            <UU5.Forms.Select.Option content="Bez Typu" value=""/>
            <UU5.Forms.Select.Option value="BULLDOZER"/>
            <UU5.Forms.Select.Option value="TRACTOR"/>
            <UU5.Forms.Select.Option value="DREDGING"/>
            <UU5.Forms.Select.Option value="EXCAVATOR"/>
            <UU5.Forms.Select.Option value="RECLAIMER"/>
            <UU5.Forms.Select.Option value="SKIDDER"/>
            <UU5.Forms.Select.Option value="LOADER"/>
            <UU5.Forms.Select.Option value="FORKLIFT"/>
            <UU5.Forms.Select.Option value="DUMP_TRUCK"/>
            <UU5.Forms.Select.Option value="ROAD_ROLLER"/>
            <UU5.Forms.Select.Option value="TRACKED_LOADER"/>
          </UU5.Forms.Select>
        </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="lg-6">
            <UU5.Bricks.Button content="Filtruj" onClick={this._handleFilterClick}/>
            <UU5.Bricks.Button
              colorSchema="warning"
              disabled={!this.state.filtered}
              content="Zruš filtr"
              onClick={this._handleCancelFilter}
            />
          </UU5.Bricks.Column>

      </UU5.Forms.BasicForm></UU5.Bricks.Row>
    );
  },


  _handleFilterFormReference(form){
    this._filterForm = form
  },


  _handleCancelFilter(){
    this.setState({
      loadFeedback:"loading",
      filtered:false
    }, () => this.reload())
  },



  _handleFilterClick(){

    this.setState({
      loadFeedback:"loading"
    }, () =>{
      this.getCall("find")({

        data:this._filterForm.getValues(),
        done:(data) =>{
          this.setState({
            dtoOut:data,
            loadFeedback:"ready",
            filtered:true
          })
        },
        fail:(response) => console.error(response)
      })
    })
  },

  _handleLoadedTractors(){
      if(!this.state.filtered){
         return null;
      }
    if(!this.state.dtoOut || this.state.dtoOut.length === 0){
      return <UU5.Bricks.P>Není tu žádný traktor</UU5.Bricks.P>
    }

    let lines = this.state.dtoOut.map((tractor) => (
      <UU5.Bricks.Table.Tr key={tractor.id}>
        <UU5.Bricks.Table.Td>{tractor.type}</UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>{tractor.vin}</UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>
          <UU5.Bricks.DateTime format="dd.mm.Y" value={new Date(tractor.dateOfAcquisition)  } /></UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>{tractor.carState}</UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>
          <UU5.Bricks.Link href="/order" onClick={()=>this._handleLinkClick(tractor)}>objednat</UU5.Bricks.Link>

      </UU5.Bricks.Table.Td>
      </UU5.Bricks.Table.Tr>
    ));

    return (
      <UU5.Bricks.Table striped>
        <UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Th>type</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>vin</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>datum pořízení</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>state</UU5.Bricks.Table.Th>
          </UU5.Bricks.Table.Tr>
        </UU5.Bricks.Table.THead>
        <UU5.Bricks.Table.TBody>
          {lines}
        </UU5.Bricks.Table.TBody>
      </UU5.Bricks.Table>
    )
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Header level={2}>Seznam traktorů (vozidel) k pronájmu</UU5.Bricks.Header>


          {this._getFilterForm()}

          {this._handleLoadedTractors()}


      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});
