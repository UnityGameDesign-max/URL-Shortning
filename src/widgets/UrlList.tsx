import React, { useState } from 'react';
import styles from '@/styles/UrlList.module.css';
import copy from 'clipboard-copy';
import { InView } from 'react-cool-inview';
import { useSpring, animated } from 'react-spring';

interface UrlListProps {
  originalLink: string;
  shortLink: string;
}

export default function UrlList({ originalLink, shortLink }: UrlListProps) {
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = () => {
    copy(shortLink)
      .then(() => {
        setCopied(true);
        // setTimeout(() => setCopied(false), 2000);
      })
      .catch((error) => {
        console.error('Error');
      });
  }

  const springProps = useSpring({
    opacity: 1,
    transform: 'translateY(0)', 
    from: { opacity: 0, transform: 'translateY(-20px)' }, 
  });

  return (
    <InView
      onChange={(inView: any) => {
        if (inView) {
          springProps.opacity.start(1);
          springProps.transform.start('translateY(0)');
        }
      }}
    >
      <animated.div style={springProps} className={`${styles.urlCard} space-between-items`}>
        <p>{originalLink}</p>
        <div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.urlCardLink}
            href={`https://${shortLink}`}
          >
            {shortLink}
          </a>
          <button
            onClick={copyToClipboard}
            className={copied ? 'btn-tertiary' :'btn btn-secondary'}
          >
            {copied ? 'Copied' : 'Copy to Clipboard'}
          </button>
        </div>
      </animated.div>
    </InView>
  );
}
