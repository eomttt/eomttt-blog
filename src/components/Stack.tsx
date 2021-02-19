import React from 'react';
import Styles from 'styles/Stack.css';

export const Stack = () => (
  <div className={Styles.container}>
    <div className={Styles.title}>
      JavaScript 를 주로 사용하고 프론트엔드 기술에 관심이 많습니다.
    </div>
    <div className={Styles.content}>
      <ul>
        <li>
          ReactJS
        </li>
        <li>
          NextJS
        </li>
        <li>
          NodeJS
        </li>
        <li>
          React-Native
        </li>
        <li>
          Electron
        </li>
      </ul>
    </div>
  </div>
);