import usePageMetadata from 'hooks/use-page-metadata';

import { getPaginatedPosts } from 'lib/portfolio';

import TemplateArchive from 'templates/website-archive';

export default function Posts({ posts, pagination }) {
  const title = 'Portfolio';
  const slug = 'portfolio';

  const { metadata } = usePageMetadata({
    metadata: {
      title,
      description: false,
    },
  });

  return <TemplateArchive title={title} posts={posts} slug={slug} pagination={pagination} metadata={metadata} />;
}

export async function getStaticProps() {
  const { posts, pagination } = await getPaginatedPosts({
    queryIncludes: 'archive',
  });
  return {
    props: {
      posts,
      pagination: {
        ...pagination,
        basePath: '/portfolio',
      },
    },
  };
}
