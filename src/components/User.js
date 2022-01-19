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
              <div>User Profile</div>
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
