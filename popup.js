document.addEventListener('DOMContentLoaded', () => {
    const voiceSelect = document.getElementById('voiceSelect');
    const speedSelect = document.getElementById('speedSelect');
    const speedValue = document.getElementById('speedValue');
    const playBtn = document.getElementById('playBtn');
    const stopBtn = document.getElementById('stopBtn');

    // Load voices
    chrome.tts.getVoices((voices) => {
        voices.forEach((voice) => {
            const option = document.createElement('option');
            option.value = voice.voiceName;
            option.textContent = `${voice.voiceName} (${voice.lang || 'Unknown'})`;
            voiceSelect.appendChild(option);
        });

        // Load saved preferences
        chrome.storage.local.get(['preferredVoice', 'preferredSpeed'], (result) => {
            if (result.preferredVoice) {
                voiceSelect.value = result.preferredVoice;
            }
            if (result.preferredSpeed) {
                speedSelect.value = result.preferredSpeed;
                speedValue.textContent = parseFloat(result.preferredSpeed).toFixed(1) + 'x';
            }
        });
    });

    // Save voice preference on change
    voiceSelect.addEventListener('change', () => {
        chrome.storage.local.set({ preferredVoice: voiceSelect.value });
    });

    // Handle speed slider changes
    speedSelect.addEventListener('input', () => {
        speedValue.textContent = parseFloat(speedSelect.value).toFixed(1) + 'x';
    });

    // Save speed preference only when user drops the slider (change event)
    speedSelect.addEventListener('change', () => {
        chrome.storage.local.set({ preferredSpeed: speedSelect.value });
    });

    playBtn.addEventListener('click', () => {
        const selectedVoice = voiceSelect.value;
        const selectedSpeed = parseFloat(speedSelect.value);
        chrome.runtime.sendMessage({
            action: "readSelectedText",
            voiceName: selectedVoice,
            speed: selectedSpeed
        });
    });

    stopBtn.addEventListener('click', () => {
        chrome.runtime.sendMessage({ action: "stopReading" });
    });
});
