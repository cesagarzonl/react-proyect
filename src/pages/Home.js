import React from 'react';


import {GetSections} from '../services/SectionService';


export default function Sections() {
  let section = GetSections()

    if (section){
      return <div>
          <ul>
          {section.map((sec,index)=>
            <li key={sec.tid}>
                {sec.path.alias} {sec.tid}
           </li>)}
          </ul>
          </div>; 
    }else   {
        return <div>
                <p>Cargando...</p>
               </div>;
    }
}