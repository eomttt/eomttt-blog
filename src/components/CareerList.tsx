import classnames from 'classnames';
import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Color } from 'constants/color';
import { Title } from 'constants/title';
import { CareerItems } from 'datum/career';
import React, { forwardRef, LegacyRef } from 'react';
import CommonStyles from 'styles/common.css';
import LayoutStyles from 'styles/Layout.css';

export const CareerList = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
  <div ref={ref} className={classnames([CommonStyles.dark_background, LayoutStyles.content])}>
    <ListTitle title={Title.Career} color={Color.Black} />
    <List items={CareerItems} color={Color.Black} />
  </div>
));
