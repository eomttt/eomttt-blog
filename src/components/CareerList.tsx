import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { CareerItems } from 'datum/career';
import React from 'react';

export const CareerList = () => (
  <>
    <ListTitle title="Career" />
    <List items={CareerItems} />
  </>
);
