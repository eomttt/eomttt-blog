import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Title } from 'constants/title';
import { PersonalItems } from 'datum/personal';
import React, { forwardRef, LegacyRef } from 'react';
import classnames from 'classnames';
import LayoutStyles from 'styles/Layout.css';

export const PersonalList = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
  <div ref={ref} className={classnames([LayoutStyles.content])}>
    <ListTitle title={Title.Personal} />
    <List items={PersonalItems} />
  </div>
));
