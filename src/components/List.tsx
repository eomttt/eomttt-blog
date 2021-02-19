import { Item } from 'components/Item';
import { Color } from 'constants/color';
import React from 'react';
import Styles from 'styles/List.css';

interface ListProps {
  items: any[];
  color?: Color;
}

export const List = ({ items, color = Color.White }: ListProps) => (
  <div className={Styles.content}>
    <div className={Styles.items}>
      {items.map(item => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Item key={item.title} color={color} {...item} />
      ))}
    </div>
  </div>
);
