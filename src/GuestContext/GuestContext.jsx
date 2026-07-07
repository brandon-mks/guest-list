import { createContext, useState, useContext, useEffect } from "react";
//import GUESTS from "../data";
import axios from "axios";

const GuestContext = createContext();

export function GuestProvider({ children }) {
  const [guestList, setGuestList] = useState([]);
  const [selectedGuest, setSelectedGuest] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        /*
        const response = await fetch(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/guests",
        );
        const { data } = await response.json();
        setGuestList(data);
        */
        const { data } = await axios.get(
          "https://fsa-crud-2aa9294fe819.herokuapp.com/api/COHORT_CODE/guests",
        );
        setGuestList(data.data);
        /*Question:
        Why wouldn't this work without using data key selector?
        aka. why isn't the initial data declaration destructuring
          the axios.get response?
        in your demo you didn't need to do data.data.
        */
        //console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const value = { guestList, setGuestList, selectedGuest, setSelectedGuest };
  return <GuestContext.Provider value={value}>{children}</GuestContext.Provider>;
}

export function useGuest() {
  const context = useContext(GuestContext);
  if (!context) {
    throw Error("component is not within context tree");
  }
  return context;
}
