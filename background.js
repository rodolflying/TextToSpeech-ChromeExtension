let isSpeaking = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "readSelectedText") {
        chrome.tts.stop();
        isSpeaking = true;
        
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            var currentTab = tabs[0];
            if (chrome.scripting && chrome.scripting.executeScript) {
                chrome.scripting.executeScript({
                    target: {tabId: currentTab.id},
                    func: getSelectedText
                }, (results) => {
                    if (results && results[0] && results[0].result) {
                        const textToRead = results[0].result.trim();
                        if (!textToRead) return;

                        if (message.voiceName === "auto") {
                            // Detect language
                            chrome.i18n.detectLanguage(textToRead, (result) => {
                                const isReliable = result.isReliable;
                                const languages = result.languages;
                                let detectedLang = 'en'; // default fallback
                                if (languages && languages.length > 0) {
                                    detectedLang = languages[0].language;
                                }
                                processAndSpeak(textToRead, message.voiceName, detectedLang, message.speed);
                            });
                        } else {
                            processAndSpeak(textToRead, message.voiceName, null, message.speed);
                        }
                    }
                });
            } else {
                console.error("chrome.scripting API is not available.");
            }
        });
    } else if (message.action === "stopReading") {
        isSpeaking = false;
        chrome.tts.stop();
    }
});

function getSelectedText() {
    return window.getSelection().toString();
}

function cleanTextForReading(text) {
    // Modern readability techniques:
    // 1. Remove excessive whitespace
    text = text.replace(/\s+/g, ' ');
    // 2. Add natural pauses at bullet points or lists (by adding commas or periods)
    text = text.replace(/^[•\-\*]\s+/gm, ', ');
    // 3. Remove URLs which sound terrible when read aloud (optional, but good practice)
    text = text.replace(/https?:\/\/[^\s]+/g, 'enlace oculto');
    
    return text;
}

function processAndSpeak(rawText, voiceName, detectedLang, speed) {
    // Convert speed strictly to float and constrain to logical bounds
    const rateValue = Math.max(0.5, Math.min(3.0, parseFloat(speed) || 1.0));

    // To maintain NATURAL prosody (intonation) in modern TTS, 
    // it's best practice to send large blocks of text rather than
    // splitting aggressively by periods or commas.
    // We split by explicit newlines (paragraphs).
    let paragraphs = rawText.split(/\n+/).map(p => p.trim()).filter(p => p.length > 0);

    let chunks = [];
    paragraphs.forEach(p => {
        let cleaned = cleanTextForReading(p);
        // Only split a paragraph if it's insanely long (e.g. > 1500 chars)
        // to prevent API timeouts, otherwise keep the paragraph unified.
        if (cleaned.length > 1500) {
            let subChunks = cleaned.match(/[^.!?]+[.!?]*/g) || [cleaned];
            chunks = chunks.concat(subChunks.map(c => c.trim()).filter(c => c.length > 0));
        } else {
            chunks.push(cleaned);
        }
    });

    var speakChunk = function() {
        if (chunks.length === 0 || !isSpeaking) return;
        var chunk = chunks.shift();
        
        let ttsOptions = {
            rate: rateValue,
            pitch: 1.0, // Keeping natural pitch
            'onEvent': function(event) {
                if (event.type === 'end' || event.type === 'interrupted' || event.type === 'cancelled' || event.type === 'error') {
                    if (event.type === 'end') {
                        speakChunk();
                    } else {
                        isSpeaking = false;
                    }
                }
            }
        };

        if (voiceName !== "auto") {
            ttsOptions.voiceName = voiceName;
        } else if (detectedLang) {
            ttsOptions.lang = detectedLang;
        }

        chrome.tts.speak(chunk, ttsOptions);
    };
    
    speakChunk();
}
