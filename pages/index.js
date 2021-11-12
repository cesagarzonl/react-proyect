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

/**
 * <li key={index}>
            {sec.path.alias} {sec.tid}
        </li>)}
    </ul>
 */

export default function Home({section}) {
return(
  <div>
    {section.map((sec,index)=><section class="card">
      <Link key={index} href={"/sections/"+sec.tid}>
      <a>{sec.path.alias}</a>
      </Link>
    </section>
    )}
  </div>
  )
}
