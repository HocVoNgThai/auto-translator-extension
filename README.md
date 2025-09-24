_This document is also available in (Xem bản dịch tiếng Việt tại) [**Vietnamese version**](./README.vie.md)._
<hr>
<div align = "center">
  
  # auto-translator-extension 📝

</div>
A browser extension that automatically translates selected text on any webpage using the Google Gemini API. Simply highlight a word or phrase, and a clean, unobtrusive popup will provide you with a quick translation.

---
## Features ✨
- **Instant Translation**: Get translations on the fly just by selecting text.
- **Powered by Google Gemini**: Leverages the power of the Gemini 1.5 Flash model for fast and accurate translations.
- **Customizable Target Language**: Easily switch the language you want to translate to directly from the extension's popup.
- **Quick Toggle**: Enable or disable the translation feature with a single click in the popup.
- **Customizable Bubble**: The translation bubble is designed to be helpful but not intrusive. It can be easily dismissed by scrolling, pressing 'Escape', or clicking the '×' button.
- **Secure**: Your API key is stored locally and securely in your browser's storage, never shared.

---
## How to use 🔧

### Requirements

- A modern web browser that supports Chrome extensions (Google Chrome, Microsoft Edge, Brave, etc.).
- A personal **Google Gemini API Key**. You can get one for free from [Google AI Studio](https://aistudio.google.com/app/apikey).

### Installation (from source)

1.  **Download or Clone**: Download this repository as a ZIP file and unzip it, or clone it using Git.
```
git clone https://github.com/HocVoNgThai/auto-translator-extension.git
```
2.  **Open Extensions Page**: Open your browser and navigate to `chrome://extensions`.
3.  **Enable Developer Mode**: Find the "Developer mode" toggle in the top-right corner and turn it on.
<img width="275" height="91" alt="image" src="https://github.com/user-attachments/assets/c8926036-884a-4422-80c1-bb19b1f0ba6f" />

4.  **Load the Extension**: Click the "**Load unpacked**" button that appears.
<img width="557" height="220" alt="image" src="https://github.com/user-attachments/assets/ed1cb4a9-2b3f-4fe1-ab7e-5d6cdd54a305" />

5.  **Select Folder**: In the file selection dialog, choose the folder where you unzipped or cloned the repository.

The extension icon should now appear in your browser's toolbar!

### Configuration and Usage

1.  **Set Your API Key**:
    - Open source code folder and choose file `background.js`.
    - Paste your Google Gemini API Key into here.
     <img width="555" height="75" alt="image" src="https://github.com/user-attachments/assets/ccfd3499-c348-4db3-bb69-a5cf7468dd71" />
     
    - Click "**Save**" and reload the extension.
2.  **Start Translating**:
    - Go to any webpage with text.
    - Highlight a word or phrase.
    - The translation will appear in a small popup bubble near your selection.
3.  **Quick Settings**:
    - Left-click the extension icon in the toolbar to open the main popup.
    - From here, you can quickly **enable/disable** the extension or **change the target language**.

---
## Future Development 🚀 

This project has a lot of potential for growth. Here are some ideas for future features:

- **Multi-API Support**: Integrate other translation services like DeepL or Microsoft Translator and allow users to choose.
- **Text-to-Speech**: Add a "listen" button to speak the selected or translated text aloud.
- **Translation History**: Keep a history of recent translations in the popup for easy access.
- **Advanced Customization**: Allow users to customize the appearance of the translation bubble (colors, font size, position) from the Options page.
- **Definition Mode**: Add an option to get a dictionary definition of a word instead of just a translation.
- **Publish to Web Store**: Package the extension for easy installation from the Chrome Web Store.

---


