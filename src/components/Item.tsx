/* eslint-disable react/require-default-props */
import classnames from 'classnames';
import { Color } from 'constants/color';
import React, { useCallback, useEffect, useRef } from 'react';
import Styles from 'styles/Item.css';
import CommonStyles from 'styles/common.css';

interface ItemProps {
  color: Color;
  title: string;
  startDate?: string;
  finDate?: string;
  projectList: string[];
  techStacks: string[];
  image?: string;
  link?: string;
}

export const Item = ({
  color,
  title,
  startDate,
  finDate,
  image,
  projectList,
  techStacks,
  link,
}: ItemProps) => {
  const ref = useRef<HTMLDivElement>();

  const handleClickItem = useCallback(() => {
    if (link) {
      window.open(link);
    }
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
    <div
      ref={ref}
      className={classnames([Styles.container, Styles.container_anim])}
      onClick={handleClickItem}
      role="button"
    >
      {image && (
        <div className={Styles.imageContainer}>
          <img className={Styles.image} src={image} alt="cover" />
        </div>
      )}
      <div className={Styles.content}>
        <div
          className={classnames([
            Styles.title,
            color === Color.Black ? CommonStyles.dark_text : '',
          ])}
        >
          {title}
        </div>
        {startDate && finDate && (
          <div
            className={classnames([
              Styles.date,
              color === Color.Black ? CommonStyles.dark_text : '',
            ])}
          >
            {`${startDate} ~ ${finDate}`}
          </div>
        )}
        <div className={Styles.item}>
          <div className={Styles.subTitle}>Project</div>
          <ul>
            {projectList.map(project => (
              <li
                key={project}
                className={classnames([color === Color.Black ? CommonStyles.dark_text : ''])}
              >
                {project}
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.item}>
          <div className={Styles.subTitle}>Stack</div>
          <ul>
            {techStacks.map((techStack, index) => (
              <li
                // eslint-disable-next-line react/no-array-index-key
                key={`${techStack}-${index}`}
                className={classnames([color === Color.Black ? CommonStyles.dark_text : ''])}
              >
                {techStack}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
