import React, { createContext, useContext, useState, useEffect } from "react";
import { useMainContext } from "../context";
export default function User() {
  const { ctx } = useMainContext() ? useMainContext() : { ctx: null };
  return (
    <div>
      {ctx ? (
        <>
          <div>User Profile</div>
          <pre>{JSON.stringify(ctx)}</pre>
        </>
      ) : (
        <>Context not found/initialized</>
      )}
    </div>
  );
}
