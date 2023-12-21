import React, { useEffect, useState } from 'react';

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);

    useEffect(() => {
        const handleBeforeInstallPrompt = (event) => {
            // Prevent the default behavior
            event.preventDefault();

            // Stash the event so it can be triggered later
            setDeferredPrompt(event);
        };


        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
        };
    }, [deferredPrompt]);

    const handleInstall = () => {
        if (deferredPrompt) {
            // Show the installation prompt
            deferredPrompt.prompt();

            // Wait for the user to respond
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted the installation');
                } else {
                    console.log('User dismissed the installation');
                }

                // Clear the deferred prompt variable
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <div>
            <button onClick={handleInstall}>Install PWA</button>
        </div>
    );
};

export default InstallPWA;
