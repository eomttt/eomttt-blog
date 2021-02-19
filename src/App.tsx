import { CareerList } from 'components/CareerList';
import { PersonalList } from 'components/PersonalList';
import { Stack } from 'components/Stack';
import { Title } from 'components/Title';
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Styles from 'styles/Layout.css';

const App = () => (
  <>
    <Title />
    <div className={Styles.content}>
      <Stack />
      <CareerList />
      <PersonalList />
    </div>
  </>
);

export default hot(App);
