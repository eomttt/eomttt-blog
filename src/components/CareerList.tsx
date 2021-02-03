import { Item } from 'components/Item';
import { CareerItems } from 'datum/career';
import React, { useCallback, useEffect, useRef } from 'react';
import Styles from './List.css';

export const CareerList = () => {
  const titleRef = useRef<HTMLDivElement>();
  const ref = useRef<HTMLDivElement>();

  const handleScroll = useCallback(([entry]) => {
    const { current: titleCurrent } = titleRef;
    const { current } = ref;

    if (entry.isIntersecting) {
      if (current) {
        current.style.transitionProperty = 'opacity transform';
        current.style.transitionDuration = '0.5s';
        current.style.transitionDelay = '0.5s';
        current.style.opacity = '1';
        current.style.transform = 'translateX(0)';
      }
      if (titleCurrent) {
        titleCurrent.style.transitionProperty = 'opacity';
        titleCurrent.style.transitionDuration = '0.5s';
        titleCurrent.style.transitionDelay = '0.5s';
        titleCurrent.style.opacity = '1';
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
    <>
      <div ref={titleRef} className={Styles.title}>
        Career
      </div>
      <div ref={ref} className={Styles.line} />
      <div className={Styles.content}>
        <div className={Styles.items}>
          {
            // eslint-disable-next-line react/jsx-props-no-spreading
            CareerItems.map((item) => <Item key={item.title} {...item} />)
          }
        </div>
      </div>
    </>
  );
};
