import Link from 'next/link';

import { postPathBySlug, sanitizeExcerpt } from 'lib/websites';

import Metadata from 'components/Metadata';

import { FaMapPin } from 'react-icons/fa';
import styles from './WebsiteCard.module.scss';

const WebsiteCard = ({ post, options = {} }) => {
  const { title, excerpt, slug, date, author, categories, isSticky = false } = post;
  const { excludeMetadata = [] } = options;

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
      <div className="">
        <a className="" href="/previous_work/rogers-roofing"></a>
        <div className={styles.containerImage}>
          <Link href={postPathBySlug(slug)}>
            <a>
              <img src="https://www.jeffmastersonjr.com/wp-content/uploads/2020/10/rogers.jpg"
                   alt="Avatar" className={styles.WebsiteCardImage}></img>
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
              <Link href="https://www.rogersroofing.com/">
                <a className={styles.WebsiteCardLink}>
                  Visit Site
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteCard;
