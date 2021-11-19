import { getSortedPostsData } from '../../lib/posts'

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'

export default function ArticleHome({ allPostsData }) {
    return (
      <Layout home>
        {/* Keep the existing code here */}
  
        {/* Add this <section> tag below the existing <section> tag */}
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
          </ul>
        </section>
      </Layout>
    )
  }
  export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  