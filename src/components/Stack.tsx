import { StackItems } from 'datum/stack';
import React, { useEffect, useState } from 'react';
import Styles from 'styles/Stack.css';

interface StackProps {
  scrollY: number;
}

export const Stack = ({ scrollY }: StackProps) => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {}, [scrollY]);
  console.log(scrollY);
  return (
    <div className={Styles.container}>
      <div className={Styles.content}>
        {StackItems.map(stack => (
          <div key={stack.id} className={Styles.item}>
            <div>{stack.withTitle ? stack.title : ''}</div>
            <img src={stack.icon} alt="stack icon" />
          </div>
        ))}
      </div>
      <div className={Styles.background} />
    </div>
  );
};
