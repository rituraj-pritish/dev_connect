import React from 'react';

const AccountDeleteModal = ({handleDelete}) => {

  return (
    <div style={{height: '150px',width:'430px'}} id='acc-delete-modal' className='modal'>
      <div className='modal-content'>
        <div className='red-text'>
          Are you sure to delete your account, this can't be undone
        </div>
        <div className='secondary-content'>
          <button className='btn grey modal-close'>Cancel</button>
          <button onClick={handleDelete} className='btn red modal-close'>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AccountDeleteModal;
