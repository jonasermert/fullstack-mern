import React from "react";

import UsersList from "../components/UsersList";

const User = () => {
    const USERS = [{
        id: 'ul', 
        name: 'Jonas Ermert', 
        image='', 
        places: 3}];
    return <UsersList  items={USERS}/>
    // return <h2> Users work</h2>;
};

export default Users;