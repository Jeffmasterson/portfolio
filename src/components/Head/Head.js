import NextHead from 'next/head';
import { useRouter } from 'next/router';

import { removeLastTrailingSlash } from 'lib/util';

import useSite from 'hooks/use-site';

const Head = ({ title, description, ogImage, ...props }) => {
  const { asPath } = useRouter();

  const { metadata = {}, homepage } = useSite();
  const { title: siteTitle } = metadata;

  if (!ogImage) {
    ogImage = {
      layout: 'page',
      alt: title,
    };
  }

  return (
    <>
      <NextHead {...props}>
        <title>{`${title} - ${siteTitle}`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={`${title} on ${siteTitle}`} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={`${removeLastTrailingSlash(homepage)}${asPath}`} />
        <link rel="canonical" href={`${removeLastTrailingSlash(homepage)}${asPath}`} />
      </NextHead>
    </>
  );
};

export default Head;
