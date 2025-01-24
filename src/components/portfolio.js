import React from 'react';


const Portfolio = () => {
  return (
    <section id="portfolio" className="portfolio text-light m-2 p-2">
      <h2 className='text-center '>My Projects</h2>
      <div className="project">
        <h3>Project 1</h3>
        <h4>Personal Portfolio</h4>
        <p>Description</p>
        <p>This is a personal portfolio website I created to showcase my skills, experience, and projects. The website is built using HTML, CSS, and JavaScript (or React, if applicable), designed with a clean and modern user interface. It includes sections like About Me, Skills, Projects, and Contact for visitors to learn more about me and get in touch. The layout is fully responsive, ensuring a seamless experience across all devices.</p>
      </div>
      <div className="project">
        <h3>Project 2</h3>
        <h4>Simple E- Commerce website</h4>
        <p>Description</p>
        <p>This project is a static e-commerce website designed to showcase products in a visually appealing layout. It includes a product catalog, product details page, and a shopping cart. The website features a responsive and clean design that works well across different devices. While it doesn't include a backend for processing orders, the website demonstrates key front-end features commonly found in e-commerce platforms.</p>
      </div>
    </section>
  );
};

export default Portfolio;
