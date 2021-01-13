import React from 'react';

const Aside = (props) => {
  return (
    <div className="aside">
      <div className="illustration" style={{ backgroundImage: "url('https://i.gaw.to/content/photos/35/99/359976_Quel_tapis_de_sol_choisir_pour_son_garage.jpg')" }} />
      <img className="logo" src="https://i.pinimg.com/originals/38/b6/67/38b6671e2093e23b275977fa5b87397a.jpg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
};

export default Aside;
