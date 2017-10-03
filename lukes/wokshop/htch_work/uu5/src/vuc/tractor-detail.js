import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "../core/_config.js";
import ListSTK from "./list-stk.js";
import Calls from "calls"

export default React.createClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin,
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:Cfg.APP + ".TractorDetail",
    classNames:{
      main:Cfg.CSS + "-tractor-detail"
    },

  },

    componentWillMount(){
        this.setCalls(Calls)
    },


    _getLoadDetail(){

        return (
            <UU5.Bricks.Table striped>
              <UU5.Bricks.Table.THead>
                <UU5.Bricks.Table.Tr>
                    <UU5.Bricks.Table.Th>typ</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>vin</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>datum pořízení</UU5.Bricks.Table.Th>
                    <UU5.Bricks.Table.Th>state</UU5.Bricks.Table.Th>
                </UU5.Bricks.Table.Tr>
              </UU5.Bricks.Table.THead>
              <UU5.Bricks.Table.TBody>
                  <UU5.Bricks.Table.Tr>
                  <UU5.Bricks.Table.Td>{this.props.car.type}</UU5.Bricks.Table.Td>
                  <UU5.Bricks.Table.Td>{this.props.car.vin}</UU5.Bricks.Table.Td>
                  <UU5.Bricks.Table.Td>
                  <UU5.Bricks.DateTime format="dd.mm.Y" value={new Date(this.props.car.dateOfAcquisition)  } /></UU5.Bricks.Table.Td>
                  <UU5.Bricks.Table.Td>{this.props.car.carState}</UU5.Bricks.Table.Td>
                  </UU5.Bricks.Table.Tr>
              </UU5.Bricks.Table.TBody>
            </UU5.Bricks.Table>
        )
    },


    //@@viewOn:render
    render(){
        return (
            <UU5.Bricks.Div>
              <UU5.Bricks.Header level={2}>Detail vozidla</UU5.Bricks.Header>
              <UU5.Bricks.Panel header="Detail" alwaysExpanded={true} disableHeaderClick={true}>
                  {this._getLoadDetail()}
                  <ListSTK carId = {this.props.car.id} carVin = {this.props.car.vin}s/>
              </UU5.Bricks.Panel>
            </UU5.Bricks.Div>
        );
    }
    //@@viewOff:render
});
