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
        <button onClick={() => setShowModal(true)}>show modal</button>
        <Modal showModal={showModal} onClose={() => setShowModal(false)}/>
        <section className="users-section">
          <div className="users-box">
            <a>Name</a>
            <a>Age</a>
            <a>Job</a>
            <a>Email</a>
          </div>
          <div className="users-container">
            {userList.map((listItem, index) => {
              return(
                <div className="list-users" key={index}>
                  <a>{listItem.users.name}</a>
                  <a>{listItem.users.age}</a>
                  <a>{listItem.users.job}</a>
                  <a>{listItem.users.email}</a>
                </div>
              )
            })}
          </div>
        </section>
      </body>
    </>
  )
};
