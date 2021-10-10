// Generated by ReScript, PLEASE EDIT WITH CARE

import * as App from "./App.bs.js";
import * as React from "react";
import * as ReactDom from "react-dom";
import * as Caml_exceptions from "rescript/lib/es6/caml_exceptions.js";

var NoRoot = /* @__PURE__ */Caml_exceptions.create("Index.NoRoot");

var root = document.querySelector("#root");

if (root == null) {
  throw {
        RE_EXN_ID: NoRoot,
        Error: new Error()
      };
}

ReactDom.render(React.createElement(App.make, {}), root);

export {
  NoRoot ,
  
}
/* root Not a pure module */