import React, { createContext, useContext, useState, useEffect } from "react";
import C from "js-cookie";
const MainContext = createContext();
import "./css/index.scss";

export const useMainContext = () => useContext(MainContext);

const cookieTypes = {
  id: "bmo_referral_id",
  id_first: "bmo_referral_id_first",
  page: "bmo_page_url",
};

function MainContextProvider({ children, workspace, apikey }) {
  const [state, setState] = useState({
    apikey: apikey,
    workspace: workspace,
    valid: false,
    loading: true,
    error: false,
    error_msg: "",
  });

  useEffect(() => {
    if (!workspace) {
      setState({
        ...state,
        loading: false,
        error: true,
        error_msg: "No workspace defined",
      });
    } else if (!apikey) {
      setState({
        ...state,
        loading: false,
        error: true,
        error_msg: "No api key defined",
      });
    } else {
      setState({
        ...state,
        loading: false,
      });
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
      const params = searchToObject();
      if (params.aff) {
        C.set(cookieTypes.id, params.aff);

        const fid = C.get(cookieTypes.id_first);
        if (!fid) {
          C.set(cookieTypes.id_first, params.aff);
        }

        C.set(cookieTypes.page, window.location.href);
      }
    }
  }

  return (
    <MainContext.Provider
      value={{
        ctx: state,
        func: {},
      }}
    >
      <div className="bmo_react">
        <div className="container">
          {state.error ? <>{state.error_msg}</> : children}

          <div
            style={{
              marginTop: 50,
              background: "black",
              color: "white",
              padding: 20,
            }}
          >
            <pre>{JSON.stringify(state)}</pre>
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default MainContextProvider;
