import React from "react";
import PersonDetails from "../components/personDetails";
import usePerson from "../hooks/usePerson";
import PageTemplate from "../components/templatePersonPage"
import useCreadits from "../hooks/useCreadits";



const PersonDetailsPage = props => {
    const { id } = props.match.params;
    const [person] = usePerson(id)  // NEW
    const [creadits] = useCreadits(id);
    return (
        <>
        {person ? (
      <>
        <PageTemplate person={person}>
          <PersonDetails person={person} creadits={creadits} />
        </PageTemplate>
      </>
    ) : (
      <p>Waiting for movie details</p>
    )}
        </>
    );
};
export default PersonDetailsPage;