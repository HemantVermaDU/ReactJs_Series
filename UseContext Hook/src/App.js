import React, {createContext} from 'react'
import CompA from "./components/CompA";

const AppContext = createContext();
const App = () => {
  return (
    <AppContext.Provider value={{ myname:"Dummy", age:24 }}>
     <CompA />
  </AppContext.Provider>
  );
};

export default App;
export {AppContext}
