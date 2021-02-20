import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Title } from 'constants/title';
import { PersonalItems } from 'datum/personal';
import React, { forwardRef, LegacyRef, useMemo } from 'react';
import classnames from 'classnames';
import LayoutStyles from 'styles/Layout.css';

interface PersonalListProps {
  scrollY: number;
  sectionHeight: any;
}

export const PersonalList = forwardRef(
  ({ scrollY, sectionHeight }: PersonalListProps, ref: LegacyRef<HTMLDivElement>) => {
    // summary margin top: 70
    // summary margin bottom : 30
    // title navbar: 60
    const personalTopOffset = useMemo(
      () => 70 + 30 + sectionHeight?.summary + sectionHeight?.career + 60,
      [sectionHeight?.career, sectionHeight?.summary],
    );
    const personalBottomOffset = useMemo(
      () => 70 + 30 + sectionHeight?.summary + sectionHeight?.career + sectionHeight?.personal - 60,
      [sectionHeight?.career, sectionHeight?.personal, sectionHeight?.summary],
    );

    return (
      <div ref={ref} className={classnames([LayoutStyles.content])}>
        <ListTitle title={Title.Personal} />
        <List
          scrollY={scrollY}
          topOffset={personalTopOffset}
          bottomOffset={personalBottomOffset}
          items={PersonalItems}
        />
      </div>
    );
  },
);
