import React, { createContext, useContext, useState, useEffect } from "react";
import { useMainContext } from "../context";
export default function User() {
  const { ctx } = useMainContext() ? useMainContext() : { ctx: null };
  return (
    <div>
      {ctx ? (
        <>
          {ctx.loading ? (
            <>Loading...</>
          ) : (
            <>
              <h2>Billing Info</h2>
              <input placeholder="First Name" />
              <input placeholder="Last Name" />
              <input placeholder="Billing Email" />
              <button>somethin</button>
            </>
          )}
        </>
      ) : (
        <>
          This component is not wrapped under the context component. Please nest
          it under the Context component from the library.
        </>
      )}
    </div>
  );
}
