(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('@babel/runtime/helpers/defineProperty'), require('@babel/runtime/helpers/slicedToArray'), require('react'), require('js-cookie')) :
  typeof define === 'function' && define.amd ? define(['@babel/runtime/helpers/defineProperty', '@babel/runtime/helpers/slicedToArray', 'react', 'js-cookie'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["react-awesome-buttons"] = factory(global._defineProperty, global._slicedToArray, global.React, global.C));
})(this, (function (_defineProperty, _slicedToArray, React, C) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var _defineProperty__default = /*#__PURE__*/_interopDefaultLegacy(_defineProperty);
  var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);
  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
  var C__default = /*#__PURE__*/_interopDefaultLegacy(C);

  var e=[],t=[];function n(n,r){if(n&&"undefined"!=typeof document){var a,s=!0===r.prepend?"prepend":"append",d=!0===r.singleTag,i="string"==typeof r.container?document.querySelector(r.container):document.getElementsByTagName("head")[0];if(d){var u=e.indexOf(i);-1===u&&(u=e.push(i)-1,t[u]={}),a=t[u]&&t[u][s]?t[u][s]:t[u][s]=c();}else a=c();65279===n.charCodeAt(0)&&(n=n.substring(1)),a.styleSheet?a.styleSheet.cssText+=n:a.appendChild(document.createTextNode(n));}function c(){var e=document.createElement("style");if(e.setAttribute("type","text/css"),r.attributes)for(var t=Object.keys(r.attributes),n=0;n<t.length;n++)e.setAttribute(t[n],r.attributes[t[n]]);var a="prepend"===s?"afterbegin":"beforeend";return i.insertAdjacentElement(a,e),e}}

  var css = "@import url(\"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap\");\n.bmo_react {\n  font-family: Roboto;\n  font-size: 12px;\n}\n.bmo_react button {\n  background-color: #2e2e2e;\n  border: 1px solid black;\n  padding: 10px;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\n.bmo_react button:hover {\n  background-color: #464646;\n}\n.bmo_react input {\n  background-color: white;\n  border: 1px solid #aeaeae;\n  padding: 10px;\n  border-radius: 5px;\n}\n.bmo_react .container {\n  background-color: white;\n  padding: 10px;\n}";
  n(css,{});

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty__default["default"](target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
  var MainContext = /*#__PURE__*/React.createContext();
  var useMainContext = function useMainContext() {
    return React.useContext(MainContext);
  };
  var cookieTypes = {
    id: "bmo_referral_id",
    id_first: "bmo_referral_id_first",
    page: "bmo_page_url"
  };

  function MainContextProvider(_ref) {
    var children = _ref.children,
        workspace = _ref.workspace,
        apikey = _ref.apikey,
        debug = _ref.debug;

    var _useState = React.useState({
      apikey: apikey,
      workspace: workspace,
      valid: false,
      loading: true,
      error: false,
      error_msg: ""
    }),
        _useState2 = _slicedToArray__default["default"](_useState, 2),
        state = _useState2[0],
        setState = _useState2[1];

    React.useEffect(function () {
      if (!workspace) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: true,
          error_msg: "No workspace defined"
        }));
      } else if (!apikey) {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          loading: false,
          error: true,
          error_msg: "No api key defined"
        }));
      } else {
        setState(_objectSpread(_objectSpread({}, state), {}, {
          loading: false
        }));
      }

      cookieSync();
    }, []);

    function cookieSync() {
      function searchToObject() {
        var pairs = window.location.search.substring(1).split("&"),
            obj = {},
            pair,
            i;

        for (i in pairs) {
          if (pairs[i] === "") continue;
          pair = pairs[i].split("=");
          obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }

        return obj;
      }

      if (window && window.location.search) {
        var params = searchToObject();

        if (params.aff) {
          C__default["default"].set(cookieTypes.id, params.aff);
          var fid = C__default["default"].get(cookieTypes.id_first);

          if (!fid) {
            C__default["default"].set(cookieTypes.id_first, params.aff);
          }

          C__default["default"].set(cookieTypes.page, window.location.href);
        }
      }
    }

    return /*#__PURE__*/React__default["default"].createElement(MainContext.Provider, {
      value: {
        ctx: state,
        func: {}
      }
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "bmo_react"
    }, /*#__PURE__*/React__default["default"].createElement("div", {
      className: "container"
    }, state.error ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, state.error_msg) : children, debug && /*#__PURE__*/React__default["default"].createElement("div", {
      style: {
        marginTop: 50,
        background: "black",
        color: "white",
        padding: 20,
        borderRadius: 5
      }
    }, /*#__PURE__*/React__default["default"].createElement("pre", null, JSON.stringify(state))))));
  }

  function User() {
    var _ref = useMainContext() ? useMainContext() : {
      ctx: null
    },
        ctx = _ref.ctx;

    return /*#__PURE__*/React__default["default"].createElement("div", null, ctx ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, ctx.loading ? /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "Loading...") : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("h2", null, "Billing Info"), /*#__PURE__*/React__default["default"].createElement("input", {
      placeholder: "First Name"
    }), /*#__PURE__*/React__default["default"].createElement("input", {
      placeholder: "Last Name"
    }), /*#__PURE__*/React__default["default"].createElement("input", {
      placeholder: "Billing Email"
    }), /*#__PURE__*/React__default["default"].createElement("button", null, "somethin"))) : /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, "This component is not wrapped under the context component. Please nest it under the Context component from the library."));
  }

  var returnLibrary = function returnLibrary() {
    return {
      Context: MainContextProvider,
      //Components
      User: User
    };
  };

  var index = returnLibrary();

  return index;

}));
