import { getValue } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';

export default function SearchBar(props) {
   const [id, setId] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div>
         <input type='search' onChange={handleChange}/>
         <button onClick={() => props.onSearch(id)}>Agregar</button> 
      </div>
   );
}
