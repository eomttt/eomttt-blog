import { CareerList } from 'components/CareerList';
import { Contact } from 'components/Contact';
import { Mark } from 'components/Mark';
import { PersonalList } from 'components/PersonalList';
import { Stack } from 'components/Stack';
import { Summary } from 'components/Summary';
import { Title } from 'components/Title';
import { Color } from 'constants/color';
import { Title as Name } from 'constants/title';
import throttle from 'lodash.throttle';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [navTitle, setNavTitle] = useState(Name.Basic);
  const [navColor, setNavColor] = useState(Color.White);
  const [sectionHeight, setSectionHeight] = useState({});
  const summaryRef = useRef<HTMLDivElement>();
  const careerRef = useRef<HTMLDivElement>();
  const personalRef = useRef<HTMLDivElement>();
  // const markRef = useRef<SVGSVGElement>();

  // useEffect(() => {
  //   const { current: markCurrent } = markRef;
  //   const paths = markCurrent.querySelectorAll('path');
  //   paths.forEach(path => {
  //     // eslint-disable-next-line no-param-reassign
  //     path.style.strokeDasharray = `${path.getTotalLength()}`;
  //     // eslint-disable-next-line no-param-reassign
  //     path.style.strokeDashoffset = `${path.getTotalLength()}`;
  //   });
  // }, [markRef]);

  useEffect(() => {
    if (summaryRef.current) {
      setSectionHeight(prev => ({
        ...prev,
        summary: summaryRef.current.clientHeight,
      }));
    }
    if (careerRef.current) {
      setSectionHeight(prev => ({
        ...prev,
        career: careerRef.current.clientHeight,
      }));
    }
    if (personalRef.current) {
      setSectionHeight(prev => ({
        ...prev,
        personal: personalRef.current.clientHeight,
      }));
    }
  }, []);

  const handleScroll = useCallback(
    throttle(() => {
      const { current: careerCurrent } = careerRef;
      const { current: personalCurrent } = personalRef;
      // const { current: markCurrent } = markRef;

      // NavbarHeight 만큼 (60px)
      const scorllY = document.documentElement.scrollTop + document.body.scrollTop;
      // const paths = markCurrent.querySelectorAll('path');

      if (scorllY > personalCurrent.offsetTop) {
        setNavTitle(Name.Personal);
        setNavColor(Color.White);
      } else if (scorllY > careerCurrent.offsetTop) {
        setNavTitle(Name.Career);
        setNavColor(Color.Black);
      } else if (scorllY <= careerCurrent.offsetTop) {
        setNavTitle(Name.Basic);
        setNavColor(Color.White);
      }

      // const scrollPercentage =
      //   (document.documentElement.scrollTop + document.body.scrollTop) /
      //   (document.documentElement.scrollHeight - document.documentElement.clientHeight);
      // paths.forEach(path => {
      //   const pathLen = path.getTotalLength();
      //   const drawLength = pathLen * scrollPercentage;
      //   // eslint-disable-next-line no-param-reassign
      //   path.style.strokeDashoffset = `${pathLen - drawLength}`;
      // });

      setScrollPosition(scorllY);
    }, 0),
    [],
  );

  useEffect(() => {
    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div>
      <Title title={navTitle} color={navColor} />
      <Summary ref={summaryRef} />
      <CareerList ref={careerRef} sectionHeight={sectionHeight} scrollY={scrollPosition} />
      <PersonalList ref={personalRef} sectionHeight={sectionHeight} scrollY={scrollPosition} />
      {/* <Stack scrollY={scrollPosition} /> */}
      <Contact />
      {/* <Mark ref={markRef} /> */}
    </div>
  );
};

export default hot(App);
