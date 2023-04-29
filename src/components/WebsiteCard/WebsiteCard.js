import Link from 'next/link';

import { postPathBySlug, mapPostData } from 'lib/portfolio';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './WebsiteCard.module.scss';
import FeaturedImage from "../FeaturedImage";

const WebsiteCard = ({ post, options = {} }) => {
  const { title, excerpt,websiteInfo, featuredImage, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;
  console.log(websiteInfo.linkToThisWebsite)
  const metadata = {};

  if (!excludeMetadata.includes('author')) {
    metadata.author = author;
  }

  if (!excludeMetadata.includes('date')) {
    metadata.date = date;
  }

  if (!excludeMetadata.includes('categories')) {
    metadata.categories = categories;
  }

  let postCardStyle = styles.postCard;

  if (isSticky) {
    postCardStyle = `${postCardStyle} ${styles.postCardSticky}`;
  }

  return (
    <div className={postCardStyle}>
      {isSticky && <FaMapPin aria-label="Sticky Post" />}
      <div className={styles.containerImage}>
        <Link href={postPathBySlug(slug)}>
          <a>
            <img src={websiteInfo.websitesPhoto.sourceUrl} alt=""></img>
          </a>
        </Link>
        <div className={styles.overlay}>
          <div className="text">
            <Link href={postPathBySlug(slug)}>
              <a>
                <h3
                    className={styles.WebsiteCardTitle}
                    dangerouslySetInnerHTML={{
                      __html: title,
                    }}
                />
              </a>
            </Link>

            {websiteInfo.linkToThisWebsite && (
                <Link href={websiteInfo.linkToThisWebsite}>
                  <a target="_blank" className={styles.WebsiteCardLink}>
                    Visit Site
                  </a>
                </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
