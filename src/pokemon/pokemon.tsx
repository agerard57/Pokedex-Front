import React from 'react';



export const PokeList = () => {

    const maListe= {
    list : [
        {id : 1, nom :"bulbasaure"},
        {id : 2, nom: "pikachu"},
        {id : 3, nom: "zarbi"},
        {id : 4, nom: "vieux monsieur de 40ans"}
    ]
    };

    return (
      <div>{maListe.list.map(list => (<button>{list.nom}</button>))}</div>
  
      
    );
  };