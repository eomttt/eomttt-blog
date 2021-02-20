import { Item } from 'components/Item';
import { Color } from 'constants/color';
import React, { useEffect, useState } from 'react';
import Styles from 'styles/List.css';

interface ListProps {
  items: any[];
  scrollY: number;
  color?: Color;
  topOffset: number;
  bottomOffset: number;
}

export const List = ({
  items,
  scrollY,
  color = Color.White,
  topOffset,
  bottomOffset,
}: ListProps) => {
  const [xScroll, setXScroll] = useState(50);

  useEffect(() => {
    if (topOffset <= scrollY && bottomOffset >= scrollY) {
      const now = scrollY - topOffset;
      const total = bottomOffset - topOffset;
      const percent = (now / total) * 100;

      setXScroll(50 - percent);
    }
  }, [scrollY, topOffset, bottomOffset]);

  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        <div className={Styles.items} style={{ transform: `translateX(${xScroll}%)` }}>
          {items.map(item => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <Item key={item.title} color={color} {...item} />
          ))}
        </div>
      </div>
      <div className={Styles.background} />
    </div>
  );
};
