const enabledToggle = document.getElementById('enabled');

// Tải trạng thái hiện tại và cập nhật giao diện popup
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get('is_enabled', (data) => {
        enabledToggle.checked = data.is_enabled ?? true;
    });
});

// Lưu trạng thái mới khi người dùng thay đổi
enabledToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ is_enabled: enabledToggle.checked });
});