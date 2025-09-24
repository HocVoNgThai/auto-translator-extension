const enabledInput = document.getElementById('enabled');
const msg = document.getElementById('msg');

document.getElementById('save').addEventListener('click', () => {
    const isEnabled = enabledInput.checked;

    chrome.storage.sync.set({ 
        is_enabled: isEnabled 
    }, () => {
        msg.textContent = 'Đã lưu cài đặt.';
        setTimeout(() => msg.textContent = '', 1500);
    });
});

function loadSettings() {
    chrome.storage.sync.get('is_enabled', (items) => {
        enabledInput.checked = items.is_enabled ?? true; 
    });
}

document.addEventListener('DOMContentLoaded', loadSettings);