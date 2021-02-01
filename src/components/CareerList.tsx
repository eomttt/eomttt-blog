import { Item } from 'components/Item';
import { CareerItems } from 'datum/career';
import React from 'react';

export const CareerList = () => (
  <>
    {
        // eslint-disable-next-line react/jsx-props-no-spreading
        CareerItems.map((item) => <Item key={item.title} {...item} />)
      }
  </>
);
