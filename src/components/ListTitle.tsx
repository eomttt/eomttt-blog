import classnames from 'classnames';
import { Color } from 'constants/color';
import React, { useCallback, useEffect, useRef } from 'react';
import Styles from 'styles/List.css';
import CommonStyles from 'styles/common.css';

interface ListTitleProps {
  title: string;
  color?: Color;
}

export const ListTitle = ({ title, color = Color.White }: ListTitleProps) => {
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
      <div
        ref={titleRef}
        className={classnames([
          Styles.title,
          Styles.title_anim,
          color === Color.Black ? CommonStyles.dark_text : '',
        ])}
      >
        {title}
      </div>
      <div
        ref={lineRef}
        className={classnames([
          Styles.line,
          Styles.line_anim,
          color === Color.Black ? CommonStyles.light_background : '',
        ])}
      />
    </div>
  );
};
