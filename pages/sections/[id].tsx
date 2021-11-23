import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import uniqid from 'uniqid';
import { useRouter } from 'next/router'
import client from "../../hooks/client"
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
  console.log(section);
  console.log(Articlesections);
  if (section){
    return(
      <div>
        <h1>{section.entityLabel}</h1>
        <div dangerouslySetInnerHTML={{__html: section.description.processed}}></div>
        <Link href="/">
          <a>Sections List !</a>
        </Link>
        {Articlesections.map((articulo, index)=>
          <div key={uniqid.process(index)}>
            <Link href={"/article/" + articulo.nid} >
              <a>
                <h3>{articulo.title}</h3>
                <Image 
                  src={articulo.fieldImage.entity.thumbnail.url}
                  alt={articulo.title}
                  width="200" height="200"
                /> 
              </a>
            </Link>
          </div>
        )}
      </div>
      )
  }else{
      return <div>Loading...</div> 
  }
}

export async function getStaticPaths() {
    // Return a list of possible value for id

  return {
     paths: [], fallback: true 
  }
}
  
