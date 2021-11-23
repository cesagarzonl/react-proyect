import client from "../../hooks/client"
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import ARTICLES from '../../querys/article'
import Image from 'next/image'
import Link from 'next/link'

export default function articleHome({ articulo }) {
    console.log(articulo);
    return (
      <div>
        Placeholder
        {/* <Link href="/">
            <a>Sections List !</a>
        </Link>
        <Link href="/sections">
            <a>Sections!</a>
        </Link>
        <h1>{articulo.title}</h1>
        <Image 
          src={articulo.fieldImage.entity.thumbnail.url}
          alt={articulo.title}
          width="200" height="200"
        /> */}
      </div>
    )
  }

export async function getStaticProps({params}) {
    const { data } = await client.query({
      query: ARTICLES,
      variables:{nid:params.id}
    });
  
    return {
      props: {
        articulo: data.nodeById,
      },
   };
}
  
export async function getStaticPaths() {
  return {
     paths: [], fallback: true 
  }
}