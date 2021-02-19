import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Title } from 'constants/title';
import { CareerItems } from 'datum/career';
import React, { forwardRef, LegacyRef } from 'react';

export const CareerList = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
  <div ref={ref}>
    <ListTitle title={Title.Career} />
    <List items={CareerItems} />
  </div>
));
