import React, { useState } from 'react';
import Modal from '../modal';

const Header = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClick = () => {
    setIsShowModal((prevIsShowModal) => !prevIsShowModal);
  };

  return (
    <nav>
      <button type="button" onClick={handleClick}>
        Create Todo
      </button>
      {isShowModal && <Modal onClick={handleClick} />}
      <div>Todolist</div>
      <div>My Profile</div>
    </nav>
  );
};

export default Header;
