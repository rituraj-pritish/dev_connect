import React, { useState } from 'react';
import Avatar from 'react-avatar-edit';

const AvatarUpload = () => {
  const [preview, setPreview] = useState(null);

  const onClose = () => {
    setPreview(null);
  };

  const onCrop = newPreview => {
    setPreview(newPreview);
  };

  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  }

  return (
    <div style={style} >
        <Avatar
          width={390}
          height={295}
          onCrop={onCrop}
          onClose={onClose}
        />
        <img src={preview} />
    </div>
  );
};

export default AvatarUpload;
