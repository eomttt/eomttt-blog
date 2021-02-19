import React, { useCallback, useEffect, useRef } from 'react';
import classnames from 'classnames';
import Styles from 'styles/List.css';

interface ListTitleProps {
  title: string;
}

export const ListTitle = ({ title }: ListTitleProps) => {
  const ref = useRef<HTMLDivElement>();
  const titleRef = useRef<HTMLDivElement>();
  const lineRef = useRef<HTMLDivElement>();

  const handleScroll = useCallback(([entry]) => {
    const { current: titleCurrent } = titleRef;
    const { current: lineCurrent } = lineRef;

    if (entry.isIntersecting) {
      if (lineCurrent) {
        lineCurrent.style.opacity = '1';
        lineCurrent.style.transform = 'translateX(0)';
      }
      if (titleCurrent) {
        titleCurrent.style.opacity = '1';
      }
    } else {
      if (lineCurrent) {
        lineCurrent.style.opacity = '0';
        lineCurrent.style.transform = 'translateX(-50%)';
      }
      if (titleCurrent) {
        titleCurrent.style.opacity = '0';
      }
    }
  }, []);

  useEffect(() => {
    const { current } = ref;

    if (current) {
      const observer = new IntersectionObserver(handleScroll);
      observer.observe(current);

      return () => observer && observer.disconnect();
    }

    return null;
  }, [handleScroll]);

  return (
    <div ref={ref}>
      <div ref={titleRef} className={classnames([Styles.title, Styles.title_anim])}>
        {title}
      </div>
      <div ref={lineRef} className={classnames([Styles.line, Styles.line_anim])} />
    </div>
  );
};
