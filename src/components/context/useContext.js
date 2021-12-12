import React, { useState } from "react";

export const userContext = React.createContext({});


export const UserProvider = (props) => {

  const [userList, setUserList] = useState([]);

  const [showModal, setShowModal] = useState(false);
  
  const [cadastrado, setCadastrado] = useState('Nenhum usuário cadastrado');



  return (
    <userContext.Provider value={{userList, setUserList, showModal, setShowModal, cadastrado, setCadastrado}}>
      {props.children}
    </userContext.Provider>
  )
}