import Context from "./context";

import User from "./components/User";
const returnLibrary = () => {
  return {
    Context: Context,

    //Components
    User: User,
  };
};
export default returnLibrary();
