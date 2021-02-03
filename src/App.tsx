import { CareerList } from 'components/CareerList';
import { PersonalList } from 'components/PersonalList';
import { Stack } from 'components/Stack';
import { Title } from 'components/Title';
import React from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => (
  <>
    <Title />
    <Stack />
    <CareerList />
    <PersonalList />
  </>
);

export default hot(App);
