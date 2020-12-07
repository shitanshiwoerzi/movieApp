import Header from "../headerMovieList";
import PersonList from "../personList";
import React from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";


const PersonListPageTemplate = ({people, title}) => {


    return(
        <>
            <Header title={title}></Header>
            <PersonList  people={people}/>
            
            <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
        </>
    );
};

export default PersonListPageTemplate ;