import { createContext} from "react";
import useLocalStorage from "../utilis/useLocalStorage";

export const JumperDataContext = createContext();

// lisätään jumperprovider hallitsemaan tilaa mm. localstoragetallenuksen
// jumpersData = key localstorageen
export const JumperProvider = ({ children }) => {
  const [jumpersData, setJumpersData] = useLocalStorage('jumpersData', []);

  // kehitysidea: funktiot pomppijan lisäämiseen ja poistamiseen?

  return (
    <JumperDataContext.Provider
      value={{ jumpersData, setJumpersData }}
    >
      {children}
    </JumperDataContext.Provider>
  )
};


