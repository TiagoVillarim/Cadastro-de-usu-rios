import React from "react";
import { userContext } from "../context/useContext";
import Modal from "../modal/modal"
import HomeStyle from "../styles/home.scss"
import GlobalStyle from "../../../src/Global.scss"

export default function Home() {

  const { userList, showModal, setShowModal } = React.useContext(userContext);

  console.log(userList)


  return(
    <>
      <header className="header">
        <h1 className="title">Cadastro de usuários</h1>
      </header>

      <body className="body-container">
        <button onClick={() => setShowModal(true)} className="show-modal">Cadastrar novo usuário</button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        <section className="users-section">
          <div className="users-box">
            <a className="user">Name:</a>
            <a>Age:</a>
            <a>Job:</a>
            <a>Email:</a>
          </div>
          <div className="users-container">
            {userList.map((listItem, index) => {
              return(
                <div className="list-users" key={index}>
                  <a className="user">{listItem.users.name}</a>
                  <a className="user">{listItem.users.age}</a>
                  <a className="user">{listItem.users.job}</a>
                  <a className="user">{listItem.users.email}</a>
                </div>
              )
            })}
          </div>
        </section>
      </body>
    </>
  )
};
