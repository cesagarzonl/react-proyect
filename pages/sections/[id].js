import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from "../../client"
import SECTION from '../../querys/sections'



export async function getStaticProps({ params }) {
  const router = useRouter()
  const { pid } = router.query

  const { data } = await client.query({
    query: SECTION,variables:{nid:1}
  });
  console.log('params',params)
  return {
    props: {
      section: data.taxonomyTermById,
      Articlesections:data.nodeQuery.entities
    },
 };
}



export default function sections({section,Articlesections}) {
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
  