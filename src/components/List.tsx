import { Item } from 'components/Item';
import React from 'react';
import Styles from 'styles/List.css';

interface ListProps {
  items: any[];
}

export const List = ({ items }: ListProps) => (
  <div className={Styles.content}>
    <div className={Styles.items}>
      {
        // eslint-disable-next-line react/jsx-props-no-spreading
        items.map((item, index) => <Item key={item.title} index={index} {...item} />)
      }
    </div>
  </div>
);
