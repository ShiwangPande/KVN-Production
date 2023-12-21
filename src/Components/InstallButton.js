import React, { useState, useEffect } from 'react';
import logo from './logo.png';

function InstallPopup() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false); // Track installation status

  useEffect(() => {
    // Check for installation status on component mount
    const checkInstallation = async () => {
      // Replace with your actual logic to check if the app is installed
      try {
        const isInstalledResponse = await navigator.serviceWorker.ready; // Example using service worker
        setIsInstalled(isInstalledResponse);
      } catch (error) {
        console.error('Error checking installation:', error);
      }
    };
    checkInstallation();
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setDeferredPrompt(event);
      setIsPopupVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const [deferredPrompt, setDeferredPrompt] = useState(null);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the install prompt');
          setIsInstalled(true); // Update installation status
        } else {
          console.log('User dismissed the install prompt');
        }
        setDeferredPrompt(null);
      });
    }
  };

  useEffect(() => {
    if (!isPopupVisible || isInstalled) {
      // Force a re-render to update the DOM and hide the popup if installed
      setIsPopupVisible(false);
    }
  }, [isPopupVisible, isInstalled]);

  return (
    <>
      {isPopupVisible && (
        <div className="flex fixed top-0 w-[100vw] z-10 backdrop-blur-lg items-center justify-center h-screen bg-cover bg-center">
          <div className="bg-[#18181b] p-8 rounded-lg shadow-lg blur-container">
            {/* Your logo goes here */}
            <img src={logo} alt="Logo" className="mx-auto h-28 mb-4" />

            <p className="text-center text-white mb-6">Welcome to KVN App</p>

            <div className="flex gap-5 justify-between">
              <button onClick={handleInstallClick} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Install
              </button>
              <button
                onClick={(event) => {
                  event.stopPropagation();
                  setIsPopupVisible(false);
                }}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              >
                Dismiss
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default InstallPopup;
