const enabledToggle = document.getElementById('enabled');
const langSelect = document.getElementById('targetLangSelect');

// Tải trạng thái hiện tại và cập nhật giao diện popup
document.addEventListener('DOMContentLoaded', () => {
    // Lấy cả hai cài đặt: trạng thái bật/tắt và ngôn ngữ
    chrome.storage.sync.get(['is_enabled', 'target_lang'], (data) => {
        enabledToggle.checked = data.is_enabled ?? true;
        langSelect.value = data.target_lang || 'vi';
    });
});

// Lưu trạng thái mới khi người dùng thay đổi công tắc
enabledToggle.addEventListener('change', () => {
    chrome.storage.sync.set({ is_enabled: enabledToggle.checked });
});

// Lưu ngôn ngữ mới khi người dùng thay đổi lựa chọn
langSelect.addEventListener('change', () => {
    chrome.storage.sync.set({ target_lang: langSelect.value });
});