import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { PersonalItems } from 'datum/personal';
import React from 'react';

export const PersonalList = () => (
  <>
    <ListTitle title="Personal Projects" />
    <List items={PersonalItems} />
  </>
);
