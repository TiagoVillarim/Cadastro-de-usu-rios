import React, { useEffect, useState } from "react";
import { userContext } from "../context/useContext";
import Modal from "../modal/modal"
import HomeStyle from "../styles/home.scss"
import GlobalStyle from "../../../src/Global.scss"

export default function Home() {

  const [userSearch, setUserSearch] = useState()

  const { 
    userList,
    setUserList,
    showModal,
    setShowModal,
    cadastrado,
    setCadastrado,
  } = React.useContext(userContext);

  const handleDeleteUsers = (email) => {
    const removeItens = userList.filter(item => item.users.email !== email)
    setUserList(removeItens)
  }

  useEffect(() => {
    if(userList.length === 0) {
      setCadastrado("Nenhum usuário cadastrado");
    };
  }, [userList]);


  return(
    <>
      <header className="header">
        <h1 className="title">Cadastro de usuários</h1>
        <button onClick={() => setShowModal(true)} className="show-modal">Cadastrar novo usuário</button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
      </header>

      <body className="body-container">
          <div className="search-input-container">
            <input className="search-input" type="text" placeholder="Pesquise por um usuário:" onChange={event => setUserSearch(event.target.value)}/>
          </div>
        <section className="section-container">
          <h1>{cadastrado}</h1>
          <div className="users-container">
            {userList.filter((listItem) => {
              if(userSearch === undefined) {
                return listItem
              } else if(listItem.users.name.toLowerCase().includes(userSearch.toLowerCase())) {
                return listItem
              }
            }).map((listItem, index) => {
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
