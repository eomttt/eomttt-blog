import React, { forwardRef, LegacyRef } from 'react';
import Styles from 'styles/Summary.css';
import classnames from 'classnames';
import LayoutStyles from 'styles/Layout.css';

export const Summary = forwardRef((props, ref: LegacyRef<HTMLDivElement>) => (
  <div ref={ref} className={classnames([Styles.container, LayoutStyles.content])}>
    <div className={Styles.title}>
      JavaScript 를 주로 사용하고 프론트엔드 기술에 관심이 많습니다.
    </div>
  </div>
));
