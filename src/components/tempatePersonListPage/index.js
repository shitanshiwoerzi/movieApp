import Header from "../headerMovieList";
import PersonList from "../personList";
import React from "react";
import {Pagination} from "antd";
import "./styles.css";


const PersonListPageTemplate = ({people, title}) => {


    return(
        <>
            <Header title={title}></Header>
            <PersonList  people={people}/>
            <Pagination simple defaultCurrent={1} total={20} pageSize={10} />
        </>
    );
};

export default PersonListPageTemplate ;