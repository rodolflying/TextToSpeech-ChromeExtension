# AutoRead Pro 🎧✨

AutoRead Pro is a modern and advanced browser extension for Text-to-Speech (TTS), designed to read any selected text on the web with superior fluency and naturalness. Unlike traditional robotic readers, AutoRead Pro uses modern text processing techniques to maintain prosody, natural breathing pauses, and proper intonation.

## Main Features 🚀
- **Natural Prosody:** Processes text by paragraphs (instead of splitting at every period or comma), allowing the system's AI voices to preserve human-like intonation and fluency.
- **Auto Language Detection:** Analyzes selected text in real-time and automatically assigns the correct native voice for the detected language.
- **Smart Text Sanitization:** Skips literal reading of emails or long URLs (`https://...`) and transforms list bullets (`-`, `•`) into natural pauses for an enjoyable listening experience.
- **Extended Speed Control:** Smooth slider to adjust reading speed from **0.5x up to 3.0x**.
- **Preference Memory:** Automatically saves your preferred voice and chosen speed locally in the browser storage for your next session.
- **Premium Dark Mode Interface:** Modern, attractive, and clean panel.

---

## 🛠️ Installation Instructions (Developer Mode)

Since this extension is installed from its source code (unpacked), the steps vary slightly depending on your Chromium-based browser.

### In Google Chrome
1. Open your browser and type `chrome://extensions/` in the address bar.
2. In the top right corner, toggle the **"Developer mode"** switch on.
3. Click the **"Load unpacked"** button that appears in the top left.
4. Select the `AutoRead` folder (the folder where you downloaded the files).
5. Done! I recommend clicking the puzzle icon 🧩 in the top right to "Pin" AutoRead Pro to your bar.

### In Microsoft Edge
1. Open your browser and type `edge://extensions/` in the address bar.
2. In the bottom left panel, turn on the **"Developer mode"** switch.
3. Click the new **"Load unpacked extension"** button that appears at the top.
4. Navigate to the project folder and select it.

### In Brave
1. Type `brave://extensions/` in your address bar.
2. In the top right, check the **"Developer mode"** box.
3. Click the **"Load unpacked"** button at the top left.
4. Select the project folder.

---

## 📖 How to Use
1. Go to any website or article.
2. Select the text snippet you want to hear by dragging your mouse.
3. Click the AutoRead Pro icon in your extensions bar.
4. Adjust your voice (you can leave it on "Auto-Detect Language") and your preferred speed.
5. Click the **"▶ Read"** button.
6. You can stop the reading at any time by clicking **"⏹ Stop"**. *(Note: If you want to apply a drastic speed change, stop the reading, adjust the slider, and press Read again).*

## Built With
- **HTML5 & Vanilla CSS:** Aesthetically enriched interface with Google Fonts (Inter).
- **JavaScript (ES6):** Background engine with asynchronous workers in Manifest V3.
- **Chrome APIs:** `chrome.tts`, `chrome.scripting`, `chrome.storage.local`, `chrome.i18n`.
