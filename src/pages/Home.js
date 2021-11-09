import React from 'react';


import {GetSections} from '../services/SectionService';


export default function Sections() {
  let section = GetSections()

    if (section){
      return <div>
          <ul>
          {section.map((sec,index)=>
            <li key={index}>
                {sec.path.alias}
           </li>)}
          </ul>
          </div>; 
    }else   {
        return <div>
                <p>Cargando...</p>
               </div>;
    }
}