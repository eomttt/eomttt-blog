import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Title } from 'components/NavBar';
import { CareerList } from 'components/CareerList';

const App = () => (
  <>
    <Title />
    <CareerList />
  </>
);

export default hot(App);
