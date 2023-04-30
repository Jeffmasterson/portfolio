import useSite from 'hooks/use-site';
import {getPaginatedPosts, postPathBySlug} from 'lib/posts';
import { WebsiteJsonLd } from 'lib/json-ld';
import Layout from 'components/Layout';
import Header from 'components/HomeHeader';
import Head from 'components/Head';
import styles from 'styles/pages/Home.module.scss';
import Link from "next/link";


export default function Home({ posts, pagination, contentInfo, sites }) {
  const { metadata = {} } = useSite();
  const { title: siteTitle, description: siteDescription } = metadata;
  const title = `${siteTitle} - Custom Web Development`;
  const metaDescription = `${title}`;

  return (
    <Layout>
      <Head
          title={title}
          description={metaDescription}
          ogImage={{
            layout: 'home',
          }}
      />
      <WebsiteJsonLd siteTitle={title} />
      <Header>
          <div className={styles.homeHeroContent}>
              <h1>Hi, I'm Jeff. I design & build user interfaces.</h1>
              <h5
                  className={styles.content}
                  dangerouslySetInnerHTML={{
                      __html: contentInfo,
                  }}
              />
              <div className={styles.sitesWrapper}>
                  <Link href={sites.siteWordpress.url}>
                      <a target="_blank">{sites.siteWordpress.name}</a>
                  </Link>
                  <Link href={sites.siteNext.url}>
                      <a target="_blank">{sites.siteNext.name}</a>
                  </Link>
                  <Link href={sites.siteReact.url}>
                      <a target="_blank">{sites.siteReact.name}</a>
                  </Link>
                  <Link href={sites.siteNetlify.url}>
                      <a target="_blank">{sites.siteNetlify.name}</a>
                  </Link>
              </div>
          </div>
      </Header>
    </Layout>
  );
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      contentInfo: 'This website is a headless wordpress site and was built using the following:',
      sites: {
          siteWordpress: {
              url:'https://wordpress.org/',
              name:'Wordpress',
          },
          siteNext: {
              url:'https://nextjs.org/',
              name:'Next.js',
          },
          siteReact: {
              url:'https://react.dev/',
              name:'React',
          },
          siteNetlify: {
              url:'https://www.netlify.com/',
              name:'Netlify',
          }
      },
      pagination: {
        ...pagination,
        basePath: '/posts',
      },
    },
  };
}
