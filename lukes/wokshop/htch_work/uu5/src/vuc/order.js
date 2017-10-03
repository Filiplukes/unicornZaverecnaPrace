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
  //@@viewOn:statics
  statics:{
    tagName:Cfg.APP + ".Order",
    classNames:{
      main:Cfg.CSS + "Order"
    },
    calls:{
        newLending:"newLending"
    }
  },

  componentWillMount(){
    this.setCalls(Calls)
  },

  _getLendingForm(){
      if (this.state.filtered) {
          return null;
      }
    return (<UU5.Bricks.Row>
      <UU5.Forms.BasicForm ref_={this._handleLendingFormReference}>


        <UU5.Bricks.Column colWidth="lg-3">
          <UU5.Forms.Text disabled name="dateFrom" label="Od" controlled={false} value={this.props.from} />
        </UU5.Bricks.Column>
        <UU5.Bricks.Column  colWidth="lg-3">
          <UU5.Forms.Text disabled name="dateTo" label="Do" controlled={false} value={this.props.to}/>
        </UU5.Bricks.Column>
        <UU5.Bricks.Column  colWidth="lg-3">
          <UU5.Forms.Text disabled name="car" label="ID vozidla" controlled={false} value={this.props.car.id}/>
        </UU5.Bricks.Column>

          <UU5.Bricks.Column colWidth="lg-4">
            <UU5.Forms.Text required name="lattitude" label="zeměpisná šířka" controlled={false}  />
          </UU5.Bricks.Column>
          <UU5.Bricks.Column  colWidth="lg-3">
            <UU5.Forms.Text required name="longitude" label="zeměpisná délka" controlled={false}/>
          </UU5.Bricks.Column>
        <UU5.Bricks.Column  colWidth="lg-3">
        <UU5.Forms.Text required name="price" label="cena" controlled={false}/>
        </UU5.Bricks.Column>
        <UU5.Bricks.Column  colWidth="lg-3">
        <UU5.Forms.Text required name="carClient" label="ID clienta" controlled={false}/>
        </UU5.Bricks.Column>
          <UU5.Bricks.Column colWidth="lg-6">
            <UU5.Bricks.Button content="Objednej" onClick={this._handleLendingClick}/>
          </UU5.Bricks.Column>

      </UU5.Forms.BasicForm></UU5.Bricks.Row>
    );
  },


    handleOrder() {
        if (!this.state.filtered) {
            return null;
        }
        if (!this.state.dtoOut || this.state.dtoOut.length === 0) {
            return <UU5.Bricks.P  className='font-size-md'>Objednáno</UU5.Bricks.P>
        }
    },

  _handleLendingFormReference(form){
    this._lendingForm = form
  },




  _handleLendingClick(){
    this.setState({
      loadFeedback:"loading"
    }, () =>{
      this.getCall("newLending")({
        data:this._lendingForm.getValues(),
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
      return <UU5.Bricks.P>Objednáno</UU5.Bricks.P>

  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    return (
      <UU5.Bricks.Div>
        <UU5.Bricks.Header level={2}>Objednávka traktorů (vozidel)</UU5.Bricks.Header>

          {this._getLendingForm()}
          {this.handleOrder()}


      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});
