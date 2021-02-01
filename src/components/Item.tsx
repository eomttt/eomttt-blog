import React, { useCallback, useEffect, useRef } from 'react';
import './Item.css';

interface ItemProps {
  title: string;
  startDate: string;
  finDate: string;
  image: string;
  projectList: string[];
  techStacks: string[];
}

export const Item = ({
  title, startDate, finDate, image, projectList, techStacks,
}: ItemProps) => {
  const dom = useRef<HTMLDivElement>();

  const handleScroll = useCallback(([entry]) => {
    const { current } = dom;

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
    const { current } = dom;

    if (current) {
      const observer = new IntersectionObserver(handleScroll, { threshold: 0.7 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }

    return null;
  }, [handleScroll]);

  return (
    <div ref={dom} className="container">
      <div>
        <img src={image} alt="cover" />
      </div>
      <div>{title}</div>
      <div>{`${startDate} ~ ${finDate}`}</div>
      <div>
        {projectList.map((project) => (
          <div key={project}>
            {project}
          </div>
        ))}
      </div>
      <div>
        {
          techStacks.map((techStack, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`${techStack}-${index}`}>
              {techStack}
            </div>
          ))
        }
      </div>
    </div>
  );
};
