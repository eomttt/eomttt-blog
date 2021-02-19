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
        <img
          className={Styles.image}
          alt="github"
          src="https://user-images.githubusercontent.com/22593217/106764289-ff49c500-667a-11eb-9940-47527503f728.png"
        />
        <img
          className={Styles.image}
          alt="linkedin"
          src="https://freepngimg.com/download/linkedin/62740-network-icons-media-linkedin-blog-computer-social.png"
        />
      </div>
    </div>
  );
};
