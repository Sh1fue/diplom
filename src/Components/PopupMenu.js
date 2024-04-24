import React from 'react';


const PopupMenu = ({ children }) => {
  return (
    <div className="popup-menu">
      <div className="popup-content">
        {children}
      </div>
    </div>
  );
};

export default PopupMenu;
