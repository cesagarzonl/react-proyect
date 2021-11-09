import React from 'react';

import {GetSectionByID} from '../services/SectionByIdService';

 
export default function Section() {
 
   var section = GetSectionByID(1)
   if (section){
     return <div>
       <h1>{section.entityLabel}</h1>
       {section.description.processed}
       
     </div>;
   }else {
     return <div/>
   }
 
 }