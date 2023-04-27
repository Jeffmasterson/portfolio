import useSite from 'hooks/use-site';
import { WebsiteJsonLd } from 'lib/json-ld';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Head from "../components/Head";

import styles from 'styles/pages/Resume.module.scss';
import FeaturedImage from "../components/FeaturedImage";

export default function ({ page, pagination }) {
    const title = 'Resume';
    const metaDescription = 'Jeff Masterson Resume';

    return (
        <Layout>
            <Head
                title={title}
                description={metaDescription}
                ogImage={{
                    title,
                    layout: 'page',
                }}
            />
            <WebsiteJsonLd siteTitle={title} />
            <Header>
                <div className={styles.resumeContainer}>
                    <div className="col col-md-8">
                        <h1>{title}</h1>
                        <a href="https://www.jeffmastersonjr.com/wp-content/uploads/2023/04/JeffMastersonResume.pdf"
                        target="_blank" rel="noopener noreferrer">
                            <img className="" src="https://www.jeffmastersonjr.com/wp-content/uploads/2023/04/JeffMastersonResume.jpg"></img>
                        </a>
                    </div>
                </div>
            </Header>
        </Layout>
    );
}