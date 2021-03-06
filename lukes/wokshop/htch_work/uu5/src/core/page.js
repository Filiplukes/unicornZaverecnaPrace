import React from "react";
import * as UU5 from "uu5g04";
import Cfg from "./_config.js";

import TractorList from "../vuc/tractor-list.js"
import About from "../vuc/about.js"
import STK from "../vuc/stk-detail.js"
import ForRentList from "../vuc/for-rent-list.js"
import Client from "../vuc/client.js"
import Order  from "../vuc/order.js"
import Header from "../core/header.js"
import TractorDetail from "../vuc/tractor-detail.js"

import "./page.less"

export default React.createClass({

  //@@viewOn:mixins
  mixins:[
    UU5.Common.BaseMixin,
    UU5.Common.ElementaryMixin
  ],
  //@@viewOff:mixins

  //@@viewOn:statics
  statics:{
    tagName: Cfg.APP + ".Page",
    classNames:{
      main: Cfg.CSS + "-page"
    }
  },
  //@@viewOff:statics

  //@@viewOn:standardComponentLifeCycle
  componentWillMount() {
    this._changeTitle();
    UU5.Environment.EventListener.registerLsi(this.getId(), this._changeTitle);
  },

  componentWillUnmount() {
    UU5.Environment.EventListener.unregisterLsi(this.getId());
  },
  //@@viewOff:standardComponentLifeCycle

  //@@viewOn:componentSpecificHelpers
  _changeTitle() {
    document.title = this.getLSIItem(Cfg.titleLsi);
  },
  //@@viewOff:componentSpecificHelpers

  //@@viewOn:render
  render(){
    let routerBasePath = location.pathname.replace(/(\/.*?\/.*?)\/.*/, "$1");

    return (
      <UU5.Bricks.Page
        top={<Header/>}
        {...this.getMainPropsToPass()}
      >
        <UU5.Common.Router
          route="/"
          routes={{
            "/": {component: <TractorList />},
              "/about": {component: <About/>},
              "/stk": {component: <STK/>},
              "/forrentlist": {component: <ForRentList/>},
              "/client": {component: <Client/>},
              "/tractorDetail": {component: <TractorDetail/>},
              "/order": {component: <Order/>}
          }}
          basePath={routerBasePath}
        />
      </UU5.Bricks.Page>
    );
  }
  //@@viewOff:render
});
