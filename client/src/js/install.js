const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {

    //store the triggered events.
    window.deferredPrompt = event;

    //remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});


butInstall.addEventListener('click', async () => {

    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    //show prompt.
    promptEvent.prompt();

    //reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    

    butInstall.classList.toggle('hidden', true);
});


window.addEventListener('appinstalled', (event) => {
    
    //consoles that the installation has completed.
    console.log('install done!')
    
    //clear prompt
    window.deferredPrompt = null;
});
