import React, { useState } from "react";
import HomeStyle from "../styles/home.scss"
import Modal from "../modal/modal"

export default function Home() {

  const [showModal, setShowModal] = useState(false)

  return(
    <>
      <header className="header">
        <a className="title">Cadastro de usuários</a>
      </header>

      <body className="body-container">
        <button onClick={() => setShowModal(true)}>show modal</button>
        <Modal showModal={showModal}/>
        <section className="users-section">
          {/* <div className="users-container">
            {usersList.map(listItem => (
              <a className="users">{listItem}</a>
              ))}
          </div> */}
        </section>
      </body>
    </>
  )
};

