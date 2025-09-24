const enabledToggle = document.getElementById('enabled');
const langSelect = document.getElementById('targetLangSelect');

document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['is_enabled', 'target_lang'], (data) => {
        enabledToggle.checked = data.is_enabled ?? true;
        langSelect.value = data.target_lang || 'vi';
    });
});

enabledToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ is_enabled: enabledToggle.checked });
});

langSelect.addEventListener('change', () => {
    chrome.storage.sync.set({ target_lang: langSelect.value });
});