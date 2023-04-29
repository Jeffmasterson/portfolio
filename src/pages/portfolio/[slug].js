import { gql } from '@apollo/client';
import { getApolloClient } from 'lib/apollo-client';
import {WebpageJsonLd} from "../../lib/json-ld";
import styles from "../../styles/pages/Page.module.scss";
import WebsiteImage from "../../components/WebsiteImage";
import Layout from "../../components/Layout";
import useSite from "../../hooks/use-site";
import usePageMetadata from "../../hooks/use-page-metadata";


export default function Websites({ post }) {

    return (
        <Layout>
            <WebpageJsonLd
                title={post.seo.title}
                description={post.seo.metaDesc}
                siteTitle={post.seo.opengraphSiteName}
                slug={post.slug}
            />
            <h1 className={styles.title}>{post.title}</h1>
            <WebsiteImage
                src={post.featuredImage.node.sourceUrl}
            />
        </Layout>
    );
}

export async function getStaticProps({ params = {} } = {}) {
    const { slug } = params
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: gql `
        query PortfolioSlugs {
            websiteBy(slug: "${slug}") {
            title
            slug
            featuredImage {
              node {
                sourceUrl
              }
            }
            seo {
              title
              metaDesc
              opengraphSiteName
            }
        }
}
        `
    })
    return {
        props: {
            post: data.websiteBy
        }
    }
}

export async function getStaticPaths() {
    const apolloClient = getApolloClient();
    const { data } = await apolloClient.query({
        query: gql `
        query PortfoliosSlugs {
          websites {
            nodes {
              slug
            }
          }
        }
        `
    })
    return {
        paths: data.websites.nodes.map(website => {
            return { params: { slug: website.slug } }
        }),
        fallback: true
    }
}