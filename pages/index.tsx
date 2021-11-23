import React from "react"
// import SectionsList from "../components/SectionsList"
import { useQuery } from "@apollo/react-hooks"
import { GetStaticProps} from 'next'
import uniqid from 'uniqid';
import Link from 'next/link'
import client from "../hooks/client"
import withApollo from "../hooks/withApollo"
import SECTIONLIST from '../querys/sectionList'


export const getStaticProps: GetStaticProps = async (context) => {
  
  const sections = await client.query({
    query: SECTIONLIST
  });;

  return {
    props: {
      sections: sections?.data?.taxonomyTermQuery.entities
    },
  }
}


const Home = ({sections}) => {

  console.log(sections);
  return(
    <div>
      {sections.map((sec,index)=>
        <section key={uniqid.process(index)}>
          <Link key={uniqid.process(index)} href={"/sections/"+sec.tid}>
            <a>{sec.path.alias}</a>
          </Link>
        </section>
      )}
    </div>
  )
}

export default Home
