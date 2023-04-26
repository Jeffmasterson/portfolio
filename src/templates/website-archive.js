import { Helmet } from 'react-helmet';

import { WebpageJsonLd } from 'lib/json-ld';
import { helmetSettingsFromMetadata } from 'lib/site';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';
import SectionTitle from 'components/SectionTitle';
import WebsiteCard from 'components/WebsiteCard';
import Pagination from 'components/Pagination/Pagination';

import styles from 'styles/templates/WebsiteArchive.module.scss';

const DEFAULT_POST_OPTIONS = {};

export default function TemplateArchive({
                                            title = 'Archive',
                                            Title,
                                            posts,
                                            postOptions = DEFAULT_POST_OPTIONS,
                                            slug,
                                            metadata,
                                            pagination,
                                        }) {
    const { metadata: siteMetadata = {} } = useSite();

    if (process.env.WORDPRESS_PLUGIN_SEO !== true) {
        metadata.title = `${title} - ${siteMetadata.title}`;
        metadata.og.title = metadata.title;
        metadata.twitter.title = metadata.title;
    }

    const helmetSettings = helmetSettingsFromMetadata(metadata);

    return (
        <Layout>
            <Helmet {...helmetSettings} />

            <WebpageJsonLd title={title} description={metadata.description} siteTitle={siteMetadata.title} slug={slug} />



            <Section className={styles.WebsiteArchive}>
                    {Array.isArray(posts) && (
                        <>
                            <ul className={styles.posts}>
                                {posts.map((post) => {
                                    return (
                                        <li key={post.slug}>
                                            <WebsiteCard post={post} options={postOptions} />

                                        </li>
                                    );
                                })}
                            </ul>

                        </>
                    )}

            </Section>
        </Layout>
    );
}
