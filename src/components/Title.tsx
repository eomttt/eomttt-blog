/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import classnames from 'classnames';
import { Velog } from 'components/Velog';
import { Color } from 'constants/color';
import { Title as Name } from 'constants/title';
import React, { useCallback, useMemo } from 'react';
import CommonStyles from 'styles/common.css';
import Styles from 'styles/Title.css';

interface TitleProps {
  title: Name;
  color: Color;
}

export const Title = ({ title, color }: TitleProps) => {
  const isShowBottomLine = useMemo(() => title === Name.Career || title === Name.Personal, [title]);

  const githubIcon = useMemo(() => {
    if (color === Color.Black) {
      return 'https://user-images.githubusercontent.com/22593217/108502566-547e0b80-72f6-11eb-9ec0-49a1a6a48e3f.png';
    }
    return 'https://user-images.githubusercontent.com/22593217/108502558-521bb180-72f6-11eb-9931-d05d03b4cf95.png';
  }, [color]);

  const handleClickVelog = useCallback(() => {
    window.open('https://velog.io/@eomttt');
  }, []);

  const handleClickGithub = useCallback(() => {
    window.open('https://github.com/eomttt');
  }, []);

  const handleClickLinkedIn = useCallback(() => {
    window.open('https://www.linkedin.com/in/%ED%98%84%ED%83%9C-%EC%97%84-2bb394199/');
  }, []);

  return (
    <div
      className={classnames([
        Styles.container,
        isShowBottomLine && Styles.bottomline,
        color === Color.Black ? CommonStyles.dark_background : '',
        color === Color.Black ? CommonStyles.dark_text : '',
      ])}
    >
      {title}
      <div className={Styles.images}>
        <div className={Styles.image} onClick={handleClickVelog} role="button">
          <Velog color={color === Color.Black ? Color.White : Color.Black} />
        </div>
        <img className={Styles.image} alt="github" src={githubIcon} onClick={handleClickGithub} />
        <img
          className={Styles.image}
          alt="linkedin"
          src="https://user-images.githubusercontent.com/22593217/108502876-d2421700-72f6-11eb-89d0-3cef6f771a11.png"
          onClick={handleClickLinkedIn}
        />
      </div>
    </div>
  );
};
