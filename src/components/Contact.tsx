import React, { useCallback } from 'react';
import { ContactItems } from 'datum/contact';
import Styles from 'styles/Contact.css';

export const Contact = () => {
  const handelClickItem = useCallback((title: string) => {
    if (title === 'Tel') {
      alert('010-9240-3020')
      return;
    }
    if (title === 'Mail') {
      window.open('mailto:hyunt0413@gmail.com');
    }
  }, []);

  return (
    <div className={Styles.container}>
      {ContactItems.map(contact => (
        <div
          key={contact.id}
          className={Styles.item}
          role="button"
          onClick={() => handelClickItem(contact.title)}
        >
          <img src={contact.icon} alt="contact icon" />
        </div>
      ))}
    </div>
  );
};
