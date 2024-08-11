import React from "react";
import inkkuImage from '../images/inkku.png';
import marsuImage from '../images/marsu.png';

const GetJumpers = () => {
  return [
    {id: 1, name: 'Inkku', imageUrl: inkkuImage },
    {id: 2, name: 'Marsu', imageUrl: marsuImage }
  ];
}

export default GetJumpers;