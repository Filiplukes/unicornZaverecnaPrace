import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";

import Calls from "calls"

export default React.createClass({

    //@@viewOn:mixins
    mixins:[
        UU5.Common.BaseMixin,
        UU5.Common.ElementaryMixin,
        UU5.Common.RouteMixin,
        UU5.Common.CallsMixin
    ],
    //@@viewOff:mixins

    //@@viewOn:statics
    statics:{
        tagName:Cfg.APP + ".ClientAdd",
        classNames:{
            main:Cfg.CSS + "-client-add"
        },
        calls:{
            create:"findCars"
        }
    },




    componentWillMount(){
        this.setCalls(Calls)
    },
    //@@viewOff:standardComponentLifeCycle

    //@@viewOn:componentSpecificHelpers
    _getNewForm(){

        return (
            <UU5.Bricks.Panel header="Přidání nového klienta" alwaysExpanded={true} disableHeaderClick={true}>
              <UU5.Forms.BasicForm ref_={this._handleNewFormReference}>
                <UU5.Forms.Text required name="name" value="" label="Name" />
                <UU5.Forms.Text  required name="surname" value="" label="Surname"/>


                <UU5.Forms.Text  required name="ico" value="" label="ičo" />



                <UU5.Forms.Text required name="email" value="" label="Email" />
                <UU5.Forms.Text required name="ceilPhone"  value="" label="Telefoní číslo"  />
              </UU5.Forms.BasicForm>

              <UU5.Bricks.Button colorSchema="primary" onClick={this._handleCreateNewClient}>Uložit</UU5.Bricks.Button>
            </UU5.Bricks.Panel>
        )
    },



    _handleNewFormReference(form){
        this._addForm = form;
    },



    _handleCreateNewClient(){
      if(this._addForm.isValid()){
        let formData = this._addForm.getValues();

        // hide form and show loading
        this.setState({
            loadFeedback:"loading",
            showForm:false
        }, () =>{
            this.getCall("create")({
                data:formData,
                done:() =>{
                    this._addForm.reset();
                   
                },

                fail:(response) => console.error(response)
            })
        })

        }
    },










    //@@viewOn:render
    render(){
        return (
            <UU5.Bricks.Div>
              <UU5.Bricks.Header level={2}>Přidat klienta </UU5.Bricks.Header>

                {this._getNewForm()}


            </UU5.Bricks.Div>
        );
    }

});
