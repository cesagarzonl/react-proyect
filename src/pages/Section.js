import React from 'react';

import {GetSectionByID} from '../services/SectionByIdService';

 
export default function Section() {
 
   let {section,Articlesections} = GetSectionByID(1)
   console.log('Articlesections',Articlesections)

   if (section && Articlesections){

     return <div>
       <h1>{section.entityLabel}</h1>
        <div>
        {section.description.processed}
        </div>

        {Articlesections.map((articulo)=>
                <>
                <h1>{articulo.title}</h1>
                <img src={articulo.fieldImage.entity.thumbnail.url}/>
                </>
            )}

     </div>;
   }else {
     return <div/>
   }
 
 }
