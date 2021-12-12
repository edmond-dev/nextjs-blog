import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/post'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello there, they call me Edmond Mumwensi. Nothing too special here. Just me and am all about creating, designing, programming, developing, and building softwares and systems.
          I like getting engaged in the process, developing, discovering and exploring new tech. 
        </p>
        <p>
          <a href="https://github.com/edmond-dev">My github.com</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
       <h2 className={utilStyles.headingLg}>What about and about to</h2>
       <ul className={utilStyles.list}>
         {allPostsData.map(({ id, date, title }) => (
         <li className={utilStyles.listItem} key={id}>
          <Link href={`/posts/${id}`}>
            <a>{title}</a>
          </Link>
          <br />
          <small className={utilStyles.lightText}>
            <Date dateString={date} />
          </small>
        </li>
         ))}
       </ul>
     </section>
    </Layout>
  )
}
