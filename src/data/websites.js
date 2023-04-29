import { gql } from '@apollo/client';

export const PAGE_QUERY = gql`
  query getWebsiteBySlug($slug: String!) {
    websiteBy(slug: $slug) {
      id
      title
      content
    }
  }
`;

export const WEBSITE_FIELDS = gql`
  fragment WebsiteFields on Website {
    id
    categories {
      edges {
        node {
          databaseId
          id
          name
          slug
        }
      }
    }
    websiteInfo {
      fieldGroupName
      linkToThisWebsite
      testThis
      websitesPhoto {
        sourceUrl
      }
    }
    featuredImage {
      node {
        altText
        caption
        sourceUrl
        srcSet
        sizes
        id
      }
    }
    databaseId
    date
    databaseId
    slug
    title
  }
`;

export const QUERY_ALL_WEBSITES_INDEX = gql`
  ${WEBSITE_FIELDS}
  query AllPostsIndex {
    websites(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
        }
      }
    }
  }
`;

export const QUERY_ALL_WEBSITES_ARCHIVE = gql`
  ${WEBSITE_FIELDS}
  query AllPostsArchive {
    websites(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_ALL_WEBSITES = gql`
  ${WEBSITE_FIELDS}
  query AllPosts {
    websites(first: 10000, where: { hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              sourceUrl
              srcSet
              sizes
              id
            }
          }
          modified
        }
      }
    }
  }
`;

export const QUERY_WEBSITES_BY_AUTHOR_SLUG_INDEX = gql`
  ${WEBSITE_FIELDS}
  query PostByAuthorSlugIndex($slug: String!) {
    websites(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
        }
      }
    }
  }
`;

export const QUERY_WEBSITES_BY_AUTHOR_SLUG_ARCHIVE = gql`
  ${WEBSITE_FIELDS}
  query PostByAuthorSlugArchive($slug: String!) {
    websites(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...PostFields
          excerpt
        }
      }
    }
  }
`;

export const QUERY_WEBSITES_BY_AUTHOR_SLUG = gql`
  ${WEBSITE_FIELDS}
  query PostByAuthorSlug($slug: String!) {
    websites(where: { authorName: $slug, hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
export const QUERY_WEBSITES_BY_CATEGORY_ID_INDEX = gql`
  ${WEBSITE_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    websites(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
        }
      }
    }
  }
`;

export const QUERY_WEBSITES_BY_CATEGORY_ID_ARCHIVE = gql`
  ${WEBSITE_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    websites(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          excerpt
        }
      }
    }
  }
`;

export const QUERY_WEBSITES_BY_CATEGORY_ID = gql`
  ${WEBSITE_FIELDS}
  query PostsByCategoryId($categoryId: Int!) {
    websites(where: { categoryId: $categoryId, hasPassword: false }) {
      edges {
        node {
          ...WebsiteFields
          author {
            node {
              avatar {
                height
                url
                width
              }
              id
              name
              slug
            }
          }
          content
          excerpt
          featuredImage {
            node {
              altText
              caption
              id
              sizes
              sourceUrl
              srcSet
            }
          }
          modified
        }
      }
    }
  }
`;
export const QUERY_POST_PER_PAGE = gql`
  query PostPerPage {
    allSettings {
      readingSettingsPostsPerPage
    }
  }
`;

export const QUERY_WEBSITES_BY_SLUG = gql`
    query PortfolioSlugs {
      websites {
        slug
      }
    }
`;

export const QUERY_WEBSITE_BY_SLUG = gql`
  query PostBySlug($slug: ID!) {
    website(id: $slug, idType: SLUG) {
      author {
        node {
          avatar {
            height
            url
            width
          }
          id
          name
          slug
        }
      }
      id
      categories {
        edges {
          node {
            databaseId
            id
            name
            slug
          }
        }
      }
      content
      date
      excerpt
      featuredImage {
        node {
          altText
          caption
          sourceUrl
          srcSet
          sizes
          id
        }
      }
      modified
      databaseId
      title
      slug
      isSticky
    }
  }
`;