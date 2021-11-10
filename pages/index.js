import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import client from "../client"
import SECTIONLIST from '../querys/sectionList'

export async function getStaticProps() {
  const { data } = await client.query({
    query: SECTIONLIST,
  });

  return {
    props: {
      section: data.taxonomyTermQuery.entities,
    },
 };
}



export default function Home({section}) {
return(
  <div>
    <Link href="/sections">
    <a>Sections!</a>
    </Link>
    <ul>
      {section.map((sec,index)=>
        <li key={index}>
            {sec.path.alias} {sec.tid}
        </li>)}
    </ul>
  </div>
  )
}
