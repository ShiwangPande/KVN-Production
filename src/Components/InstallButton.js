import React, { useState, useEffect } from 'react';
import logo from "./logo.png"
function InstallPopup() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            event.preventDefault();
            setDeferredPrompt(event);
            setShowPopup(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, []);

    const handleInstallClick = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the install prompt');
                } else {
                    console.log('User dismissed the install prompt');
                }
                setDeferredPrompt(null);
                setShowPopup(false);
            });
        }
    };
    return (
        <div className={`install-popup  ${showPopup ? 'show' : ''}`}>
            {/* <div className="install-popup">
                <p>Install KVN Production App</p>
                <button onClick={handleInstallClick}>Install</button>
                <button onClick={() => setShowPopup(false)}>Dismiss</button>
            </div> */}

            <div className="flex items-center  justify-center h-screen bg-cover bg-center" >
                <div className="bg-[#18181b] p-8 rounded-lg shadow-lg blur-container">
                    {/* Your logo goes here */}
                    <img src={logo} alt="Logo" className="mx-auto h-28 mb-4" />

                    <p className="text-center text-white mb-6">Welcome to KVN App</p>

                    <div className="flex gap-5 justify-between">
                        <button onClick={handleInstallClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Install</button>
                        <button onClick={() => setShowPopup(false)} className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400">Dismiss</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InstallPopup;


