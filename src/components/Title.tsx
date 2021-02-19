import classnames from 'classnames';
import { Color } from 'constants/color';
import { Title as Name } from 'constants/title';
import React, { useMemo } from 'react';
import Styles from 'styles/Title.css';
import CommonStyles from 'styles/common.css';

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
        <img
          className={Styles.image}
          alt="profile"
          src="https://avatars.githubusercontent.com/u/22593217?s=460&u=691547218874acda9bfbdac46e1a0320cb9a08fd&v=4"
        />
        <img className={Styles.image} alt="github" src={githubIcon} />
        <img
          className={Styles.image}
          alt="linkedin"
          src="https://user-images.githubusercontent.com/22593217/108502876-d2421700-72f6-11eb-89d0-3cef6f771a11.png"
        />
      </div>
    </div>
  );
};
