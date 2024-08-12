import React from "react";
import inkkuImage from '../images/inkku.png';
import marsuImage from '../images/marsu.png';

const GetJumpers = () => {
  const jumpers = [
    {id: 1, name: 'Inkku', imageUrl: inkkuImage },
    {id: 2, name: 'Marsu', imageUrl: marsuImage }
  ];
  // console.log('GetJumpers called, returning:', jumpers); // Logita palautetut jumpers
  return jumpers;
}

export default GetJumpers;