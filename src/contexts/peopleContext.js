import React, { useEffect, createContext, useReducer } from "react";
import {  getPeople ,getPeople2} from "../api/tmdb-api";

export const PeopleContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "load":
      return { people: action.payload.people, people2:[...state.people2]};
    case "load-2":
      return{people2:action.payload.people2, people:[...state.people]}

    default:
      return state;
  }
};

const PeopleContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, {people:[] ,people2:[]});


  useEffect(() => {
    getPeople().then((people) => {
      dispatch({ type: "load", payload: { people } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getPeople2().then((people) => {
      dispatch({ type: "load-2", payload: { people } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <PeopleContext.Provider
      value={{
          people:state.people,
          people2:state.people2
      }}
    >
      {props.children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;