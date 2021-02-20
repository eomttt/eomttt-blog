import classnames from 'classnames';
import { List } from 'components/List';
import { ListTitle } from 'components/ListTitle';
import { Color } from 'constants/color';
import { Title } from 'constants/title';
import { CareerItems } from 'datum/career';
import React, { forwardRef, LegacyRef, useMemo } from 'react';
import CommonStyles from 'styles/common.css';
import LayoutStyles from 'styles/Layout.css';

interface CareerListProps {
  scrollY: number;
  sectionHeight: any;
}

export const CareerList = forwardRef(
  ({ scrollY, sectionHeight }: CareerListProps, ref: LegacyRef<HTMLDivElement>) => {
    // summary margin top: 70
    // summary margin bottom : 30
    // summary height
    // title navbar: 60
    const careerTopOffset = useMemo(() => 70 + 30 + sectionHeight?.summary + 60, [
      sectionHeight?.summary,
    ]);
    const careerBottomOffset = useMemo(
      () => 70 + 30 + sectionHeight?.summary + sectionHeight?.career - 60,
      [sectionHeight?.career, sectionHeight?.summary],
    );

    return (
      <div ref={ref} className={classnames([CommonStyles.dark_background, LayoutStyles.content])}>
        <ListTitle title={Title.Career} color={Color.Black} />
        <List
          scrollY={scrollY}
          topOffset={careerTopOffset}
          bottomOffset={careerBottomOffset}
          items={CareerItems}
          color={Color.Black}
        />
      </div>
    );
  },
);
