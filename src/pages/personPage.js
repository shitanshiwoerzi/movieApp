import React, { useContext} from "react";
import { PeopleContext } from "../contexts/peopleContext";
import PageTemplate from "../components/tempatePersonListPage";

const PersonPage = () => {
  const context = useContext(PeopleContext);
  const people = context.people;

    return (
    <PageTemplate 
    title='Popular People' 
    people={people}/>
    );
  };
export default PersonPage;