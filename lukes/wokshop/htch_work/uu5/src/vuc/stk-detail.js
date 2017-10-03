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
    UU5.Common.LoadMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName:Cfg.APP + ".TractorDetail",
    classNames:{
      main:Cfg.CSS + "-tractor-detail"
    },
    calls:{
        onLoad:"STK"
    }
  },


  componentWillMount(){
    this.setCalls(Calls)
  },


  _handleLoadedSTK(STK){
    if(!STK || STK.length === 0){
      return <UU5.Bricks.P>Není tu žádný traktor potřebné na STK</UU5.Bricks.P>
    }

    let lines = STK.map((stk) => (
      <UU5.Bricks.Table.Tr key={stk.id}>
        <UU5.Bricks.Table.Td>{stk.vin}</UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>
          <UU5.Bricks.DateTime format="dd.mm.Y" value={new Date(stk.checkDate)  } />
            </UU5.Bricks.Table.Td>


        <UU5.Bricks.Table.Td> {stk.destcription}</UU5.Bricks.Table.Td>
        <UU5.Bricks.Table.Td>{stk.isPass}</UU5.Bricks.Table.Td>
      </UU5.Bricks.Table.Tr>
    ));


      return (
      <UU5.Bricks.Table striped>
        <UU5.Bricks.Table.THead>
          <UU5.Bricks.Table.Tr>
            <UU5.Bricks.Table.Th>Auto</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>Datum kontroly</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>Popis</UU5.Bricks.Table.Th>
            <UU5.Bricks.Table.Th>Prošel</UU5.Bricks.Table.Th>
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
        <UU5.Bricks.Header level={2}>Seznam STK</UU5.Bricks.Header>

        <UU5.Bricks.Panel header="Seznam STK" alwaysExpanded={true} disableHeaderClick={true}>


          {this.getLoadFeedbackChildren(this._handleLoadedSTK)}
        </UU5.Bricks.Panel>
      </UU5.Bricks.Div>
    );
  }
  //@@viewOff:render
});
