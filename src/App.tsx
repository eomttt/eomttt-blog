import { CareerList } from 'components/CareerList';
import { PersonalList } from 'components/PersonalList';
import { Stack } from 'components/Stack';
import { Title } from 'components/Title';
import { Title as Name } from 'constants/title';
import { Color } from 'constants/color';
import throttle from 'lodash.throttle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import Styles from 'styles/Layout.css';

const App = () => {
  const [navTitle, setNavTitle] = useState(Name.Basic);
  const [navColor, setNavColor] = useState(Color.White);
  const careerRef = useRef<HTMLDivElement>();
  const personalRef = useRef<HTMLDivElement>();

  const handleScroll = useCallback(
    throttle(() => {
      const { current: careerCurrent } = careerRef;
      const { current: personalCurrent } = personalRef;

      // NavbarHeight 만큼 (60px)
      const scorllY = window.scrollY + 30;

      if (scorllY > personalCurrent.offsetTop) {
        setNavTitle(Name.Personal);
      } else if (scorllY > careerCurrent.offsetTop) {
        setNavTitle(Name.Career);
      } else if (scorllY <= careerCurrent.offsetTop) {
        setNavTitle(Name.Basic);
      }
    }, 300),
    [],
  );

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Title title={navTitle} color={navColor} />
      <div className={Styles.content}>
        <Stack />
        <CareerList ref={careerRef} />
        <PersonalList ref={personalRef} />
      </div>
    </>
  );
};

export default hot(App);
