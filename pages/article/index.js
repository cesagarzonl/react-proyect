import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

import client from "../../hooks/client"
import ARTICLES from '../../querys/article'

export async function getStaticProps() {
  const { data } = await client.query({
    query: ARTICLES
    ,variables:{nid:156584}
  });

  return {
    props: {
      articulo: data.nodeById,
    },
 };
}


export default function sections({articulo}) {
return(
  <div>
     <Link href="/">
        <a>Sections List !</a>
     </Link>
     <p/>
     <Link href="/sections">
        <a>Sections!</a>
     </Link>
  <h1>{articulo.title}</h1>
  <Image 
  src={articulo.fieldImage.entity.thumbnail.url}
  alt={articulo.title}
  width="200" height="200"
  />
  </div>
  )
}
