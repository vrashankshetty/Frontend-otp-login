import { createContext, useState } from "react";


export const Context = createContext(null);

function CreateContext({ children }) {
    const [userdata, setUserData] = useState({});
  
    return (
      <Context.Provider value={{ userdata, setUserData }}>
        {children}
      </Context.Provider>
    );
  }

  export default CreateContext;


