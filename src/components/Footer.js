import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-green-500 p-4 text-center text-white">
      <div className="container mx-auto">
        &copy; {new Date().getFullYear()} ChefCannabis. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
