import React, { useState } from "react";

export const userContext = React.createContext({});


export const UserProvider = (props) => {

  const [userList, setUserList] = useState([]);

  const [showModal, setShowModal] = useState(false);



  return (
    <userContext.Provider value={{userList, setUserList, showModal, setShowModal}}>
      {props.children}
    </userContext.Provider>
  )
}