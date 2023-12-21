import React, { useState, useEffect } from 'react';

const InstallPopup = ({ showPopup, onInstall }) => {
    return (
        <div className={`install-popup ${showPopup ? 'show' : ''}`}>
            {/* Popup content, including a button to trigger installation */}
            <button onClick={onInstall}>Install App</button>
        </div>
    );
};

export default InstallPopup;
