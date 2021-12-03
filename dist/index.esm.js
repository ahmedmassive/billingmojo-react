import _slicedToArray from '@babel/runtime/helpers/slicedToArray';
import React, { useContext, createContext, useState } from 'react';

var MainContext = /*#__PURE__*/createContext();
var useMainContext = function useMainContext() {
  return useContext(MainContext);
};
var MainContextProvider = function MainContextProvider(_ref) {
  var children = _ref.children,
      workspace = _ref.workspace,
      apikey = _ref.apikey;

  var _useState = useState({
    apikey: apikey,
    workspace: workspace,
    valid: false,
    loading: true
  }),
      _useState2 = _slicedToArray(_useState, 2),
      state = _useState2[0];
      _useState2[1];

  return /*#__PURE__*/React.createElement(MainContext.Provider, {
    value: {
      ctx: state,
      func: {}
    }
  }, children);
};

function User() {
  var _ref = useMainContext() ? useMainContext() : {
    ctx: null
  },
      ctx = _ref.ctx;

  return /*#__PURE__*/React.createElement("div", null, ctx ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", null, "User Profile"), /*#__PURE__*/React.createElement("pre", null, JSON.stringify(ctx))) : /*#__PURE__*/React.createElement(React.Fragment, null, "Context not found/initialized"));
}

var returnLibrary = function returnLibrary() {
  return {
    Context: MainContextProvider,
    //Components
    User: User
  };
};

var index = returnLibrary();

export { index as default };
