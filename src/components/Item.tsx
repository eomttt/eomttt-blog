/* eslint-disable react/require-default-props */
import React, { useCallback, useEffect, useRef } from 'react';
import Styles from './Item.css';

interface ItemProps {
  title: string;
  startDate?: string;
  finDate?: string;
  projectList: string[];
  techStacks: string[];
  image?: string;
}

export const Item = ({
  title, startDate, finDate, image, projectList, techStacks,
}: ItemProps) => {
  const ref = useRef<HTMLDivElement>();

  const handleScroll = useCallback(([entry]) => {
    const { current } = ref;

    if (entry.isIntersecting) {
      if (current) {
        current.style.transitionProperty = 'opacity transform';
        current.style.transitionDuration = '1s';
        current.style.transitionDelay = '0s';
        current.style.opacity = '1';
        current.style.transform = 'translate3d(0, 0, 0)';
      }
    }
  }, []);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }

    return null;
  }, [handleScroll]);

  return (
    <div ref={ref} className={Styles.container}>
      {
        image && (
          <div className={Styles.imageContainer}>
            <img className={Styles.image} src={image} alt="cover" />
          </div>
        )
      }
      <div className={Styles.content}>
        <div className={Styles.title} onClick={() => {}}>{title}</div>
        {startDate && finDate && <div className={Styles.date}>{`${startDate} ~ ${finDate}`}</div>}
        <div className={Styles.item}>
          <div className={Styles.subTitle}>Project</div>
          <ul>
            {projectList.map((project) => (
              <li key={project}>
                {project}
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.item}>
          <div className={Styles.subTitle}>
            Stack
          </div>
          <ul>
            {techStacks.map((techStack, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={`${techStack}-${index}`}>
                {techStack}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
