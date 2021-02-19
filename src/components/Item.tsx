/* eslint-disable react/require-default-props */
import classnames from 'classnames';
import React, {
  useCallback, useEffect, useMemo, useRef,
} from 'react';
import Styles from 'styles/Item.css';

interface ItemProps {
  index: number;
  title: string;
  startDate?: string;
  finDate?: string;
  projectList: string[];
  techStacks: string[];
  image?: string;
}

export const Item = ({
  index, title, startDate, finDate, image, projectList, techStacks,
}: ItemProps) => {
  const isEven = useMemo(() => index % 2 === 0, []);
  const ref = useRef<HTMLDivElement>();

  const handleClickItem = useCallback(() => {
    // TODO: Linke move
  }, []);

  const handleScroll = useCallback(([entry]) => {
    const { current } = ref;
    if (entry.isIntersecting) {
      if (current) {
        current.style.opacity = '1';
        current.style.transform = 'translateY(0)';
      }
    } else if (current) {
      current.style.opacity = '0';
      current.style.transform = 'translateY(20%)';
    }
  }, [isEven]);

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
    <div
      ref={ref}
      className={
        classnames([Styles.container, Styles.container_anim])
      }
    >
      {
        image && (
          <div className={Styles.imageContainer}>
            <img className={Styles.image} src={image} alt="cover" />
          </div>
        )
      }
      <div className={Styles.content}>
        <div className={Styles.title} onClick={handleClickItem} role="button">{title}</div>
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
