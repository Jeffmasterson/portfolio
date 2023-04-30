import { getPageById } from 'lib/pages';
import { WebpageJsonLd } from 'lib/json-ld';
import useSite from 'hooks/use-site';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Content from 'components/Content';
import Section from 'components/Section';
import Container from 'components/Container';
import FeaturedImage from 'components/FeaturedImage';
import styles from 'styles/pages/Contact.module.scss';

export default function Page({ page, text }) {

    return (
        <Layout>

            <Content>
                <Section className={styles.pageSection}>
                    <Container className={styles.pageContainer} size="narrow">
                        <div
                            className={styles.pageContent}
                            dangerouslySetInnerHTML={{
                                __html: text,
                            }}
                        />
                        <form className={styles.formWrap} name="contact" netlify>
                            <div className={styles.inputWrap}>
                                <input placeholder="Name" type="text" name="name"/>
                            </div>
                            <div className={styles.inputWrap}>
                                <input placeholder="Email" type="email" name="email"/>
                            </div>
                            <div className={styles.buttonWrap}>
                                <button type="submit">Send</button>
                            </div>
                        </form>
                    </Container>
                </Section>
            </Content>

        </Layout>
    );
}

export async function getStaticProps() {
    return {
        props: {
            text: "<h1 style=\"text-align: center;\">Contact Me</h1>\n" +
                "<p>I am currently located in Pittsburgh Pennsylvania. Feel free to send me an email at <a href=\"mailto:j.mastersonjr@gmail.com\" subject=Contact From Jeff Masterson Website\">j.mastersonjr@gmail.com</a>",
            pagination: {
                basePath: '/contact-me',
            },
        },
    };
}