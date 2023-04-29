import { WebsiteJsonLd } from 'lib/json-ld';
import Layout from 'components/Layout';
import Header from 'components/Header';
import styles from 'styles/pages/Resume.module.scss';
import {getPaginatedPosts} from "../lib/portfolio";

export default function () {
    const title = 'Resume';
    const metaDescription = 'Jeff Masterson Resume';

    return (
        <Layout>
            <WebsiteJsonLd siteTitle={title}/>
            <Header>
                <div className={styles.resumeContainer}>
                    <div className="col col-md-8">
                        <h1>{title}</h1>
                        <a href="https://wordpress.jeffmastersonjr.com/wp-content/uploads/2023/04/JeffMastersonResume.pdf"
                           target="_blank" rel="noopener noreferrer">
                            <img className=""
                                 src="https://wordpress.jeffmastersonjr.com/wp-content/uploads/2023/04/JeffMastersonResume.jpg"></img>
                        </a>
                    </div>
                </div>
            </Header>
        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            pagination: {
                basePath: '/resume',
            },
        },
    };
}