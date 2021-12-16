import React, { useEffect, useState } from "react";
import { userContext } from "../context/useContext";
import Modal from "../modal/modal"
import HomeStyle from "../styles/home.scss"
import GlobalStyle from "../../../src/Global.scss"

export default function Home() {

  const { 
    userList,
    setUserList,
    showModal,
    setShowModal,
    cadastrado,
    setCadastrado,
  } = React.useContext(userContext);

  const handleDeleteUsers = (email) => {
    const removeItens = userList.filter(users => users.users.email !== email)
    setUserList(removeItens)
  }

  useEffect(() => {
    if(userList.length == 0) {
      setCadastrado("Nenhum usuário cadastrado");
    };
  }, [userList]);

  return(
    <>
      <header className="header">
        <h1 className="title">Cadastro de usuários</h1>
      </header>

      <body className="body-container">
        <button onClick={() => setShowModal(true)} className="show-modal">Cadastrar novo usuário</button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        <section className="section-container">
          <h1>{cadastrado}</h1>
          <div className="users-container">
            {userList.map((listItem, index) => {
              return(
                <div className="list-users" key={index} id={index}>
                  <a className="user"><strong>Name:</strong>{listItem.users.name}</a>
                  <a className="user"><strong>Age:</strong>{listItem.users.age}</a>
                  <a className="user"><strong>Job:</strong>{listItem.users.job}</a>
                  <a className="user"><strong>Email:</strong>{listItem.users.email}</a>
                  <button onClick={() => setShowModal(true)}>Editar</button>
                  <button onClick={() => handleDeleteUsers(listItem.users.email)}>X</button>
                </div>
              )
            })}
          </div>
        </section>
      </body>
    </>
  )
};
