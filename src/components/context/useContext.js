import React, { useState } from "react";

export const userContext = React.createContext({});


export const UserProvider = (props) => {

  const [userList, setUserList] = useState(["tiago", 20, "email@email.com"]);

  const [showModal, setShowModal] = useState(false);



  return (
    <userContext.Provider value={{userList, setUserList, showModal, setShowModal}}>
      {props.children}
    </userContext.Provider>
  )
}