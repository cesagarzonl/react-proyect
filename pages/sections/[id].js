import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from "../../client"
import SECTION from '../../querys/sections'



export async function getStaticProps({params}) {

  const { data } = await client.query({
    query: SECTION,variables:{nid:params.id}
  });
  return {
    props: {
      section: data.taxonomyTermById,
      Articlesections:data.nodeQuery.entities,
      params
    },
 };
}



export default function sections({section,Articlesections,params}) {
  console.log(params)
    if (section){
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
    }else{
       return <p>erro</p> 
    }
}

export async function getStaticPaths() {
    // Return a list of possible value for id

  return {
     paths: [], fallback: true 
  }
}
  