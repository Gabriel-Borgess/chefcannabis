"use client"
import React from 'react';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const shareSite = () => {
    const currentURL = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "ChefCannabis",
          text: "Confira o ChefCannabis - Receitas Canábicas",
          url: currentURL,
        })
        .then(() => console.log("Link compartilhado com sucesso"))
        .catch((error) => console.error("Erro ao compartilhar:", error));
    } else {
      alert("A funcionalidade de compartilhamento não é suportada no seu navegador.");
    }
  };

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-green-700 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-2xl font-extrabold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="/"
            >
              <span role="img" aria-label="chef">👨‍🍳</span> ChefCannabis
            </a>
            <button
              className="text-white cursor-pointer text-2xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-base uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="#"
                  onClick={shareSite}
                >
                  <i className="fas fa-share-alt text-xl leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Compartilhe</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
