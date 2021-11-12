import Head from 'next/head'
import Image from 'next/image'

import Link from 'next/link'

import client from "../../client"
import SECTION from '../../querys/sections'
import { TaxonomyTermByID } from '../../models/taxonomyTermById'

export async function getStaticProps() {
  let nid = 1
  const { data } = await client.query({
    query: SECTION,variables:{nid}
  });

  return {
    props: {
      section: data.taxonomyTermById,
      Articlesections:data.nodeQuery.entities
    },
 };
}



export default function sections({section,Articlesections}) {
return(
    <div>
    <h1>{section.entityLabel}</h1>
     <div>
     {section.description.processed}
     </div>
     <Link href="/">
        <a>Sections List !</a>
     </Link>


        {Articlesections.map((articulo)=>
                <>
        <Link href="/article">
        <a>
        <h3>{articulo.title}</h3>
                <Image 
                    src={articulo.fieldImage.entity.thumbnail.url}
                    alt={articulo.title}
                    width="200" height="200"
                    /> 
        </a>
        </Link>


             </>
         )}

  </div>
  )
}
