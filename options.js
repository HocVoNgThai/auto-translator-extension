const apiKeyInput = document.getElementById('apiKey');
const targetInput = document.getElementById('targetLang');
const enabledInput = document.getElementById('enabled');
const msg = document.getElementById('msg');

// Lưu cài đặt
document.getElementById('save').addEventListener('click', () => {
    const apiKey = apiKeyInput.value.trim();
    const target = targetInput.value.trim() || 'vi';
    const isEnabled = enabledInput.checked;

    chrome.storage.sync.set({ 
        gemini_api_key: apiKey, 
        target_lang: target,
        is_enabled: isEnabled 
    }, () => {
        msg.textContent = 'Đã lưu cài đặt.';
        setTimeout(() => msg.textContent = '', 1500);
        console.log("[i] Cài đặt đã được lưu!");
    });
});

// Tải các cài đặt đã có
function loadSettings() {
    // Thêm 'is_enabled' vào danh sách cần lấy
    chrome.storage.sync.get(['gemini_api_key', 'target_lang', 'is_enabled'], (items) => {
        apiKeyInput.value = items.gemini_api_key || '';
        targetInput.value = items.target_lang || 'vi';
        // Mặc định là bật nếu chưa có cài đặt
        enabledInput.checked = items.is_enabled ?? true; 
    });
}

// Chạy hàm tải khi trang được mở
document.addEventListener('DOMContentLoaded', loadSettings);