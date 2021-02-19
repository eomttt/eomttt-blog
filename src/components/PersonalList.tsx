import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Title } from 'constants/title';
import { PersonalItems } from 'datum/personal';
import React, {
  forwardRef,
  LegacyRef,
} from 'react';

export const PersonalList = forwardRef(
  (
    props,
    ref: LegacyRef<HTMLDivElement>,
  ) => (
    <div ref={ref}>
      <ListTitle
        title={Title.Personal}
      />
      <List items={PersonalItems} />
    </div>
  ),
);
