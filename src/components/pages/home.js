import React, { useState } from "react";
import HomeStyle from "../styles/home.scss"
import Modal from "../modal/modal"
import { userContext } from "../context/useContext";

export default function Home() {

  const { userList, showModal, setShowModal } = React.useContext(userContext);


  return(
    <>
      <header className="header">
        <a className="title">Cadastro de usuários</a>
      </header>

      <body className="body-container">
        <button onClick={() => setShowModal(true)}>show modal</button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        <section className="users-section">
          <div className="users-container">
            {userList.map(listItem => (
              <a className="users">{listItem}</a>
              ))}
          </div>
        </section>
      </body>
    </>
  )
};

