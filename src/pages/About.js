import React from 'react';
import { useAuth } from '../AuthContext';

export const About = () => {
  const { fetchDraftitems,items } = useAuth();


  function PrintItemName () {
    console.log(items);

    var str = "";
    
    items.map((items) => {
      str += items.name;
      str += " ";
    })

    return (
      <div>
        {str}
      </div>
    )
  };

  return (
    <div>
      <button onClick={fetchDraftitems}>On Click</button>
      <PrintItemName />
    </div>
  );
};