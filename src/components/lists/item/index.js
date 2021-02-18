import React from 'react';
import './styles.scss';
import { IoChevronForward } from 'react-icons/io5';

export default function Item({ title, large, onHandleClick }) {
  let className = 'item-container';
  if (large) {
    className += ' large';
  }

  return (
    <div className={className} onClick={onHandleClick}>
      <div className='title' >{title || 'Item'}</div>
      <IoChevronForward fontSize='45' color='#FF6F00' />
    </div>
  );
}
