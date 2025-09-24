// background.js (service worker) - PHIÊN BẢN CẬP NHẬT TÊN MODEL

// Hàm dịch văn bản, giờ sẽ nhận apiKey và targetLang làm tham số
async function translateText(text, apiKey, targetLang) {
    // Kiểm tra API key ngay tại đây
    if (!apiKey) {
        throw new Error('Chưa có API key. Vui lòng thiết lập trong trang tùy chọn của extension.');
    }

    // === THAY ĐỔI DUY NHẤT TẠI ĐÂY ===
    // Đã đổi tên model từ 'gemini-pro' thành 'gemini-1.5-flash-latest'
    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const prompt = `You are a helpful translator. Translate the following English text to ${targetLang}. Keep the translation concise and only output the translated text, without any extra commentary or explanation.\n\nText to translate: "${text}"`;

    const payload = {
        contents: [{
            parts: [{ text: prompt }]
        }],
        generationConfig: {
            temperature: 0.2,
            maxOutputTokens: 1024
        }
    };

    const resp = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
    });

    if (!resp.ok) {
        const errorBody = await resp.json();
        const errorMessage = errorBody?.error?.message || 'Lỗi không xác định từ API.';
        throw new Error(`API error ${resp.status}: ${errorMessage}`);
    }

    const data = await resp.json();
    const translated = data?.candidates?.[0]?.content?.parts?.[0]?.text;
    
    return translated ? translated.trim() : 'Không thể dịch được văn bản.';
}


// Listener cho tin nhắn từ content script
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'translate') {
        // Sử dụng một hàm async ngay bên trong listener
        (async () => {
            try {
                // ĐỌC API KEY TỪ BỘ NHỚ NGAY KHI CÓ YÊU CẦU
                const items = await chrome.storage.sync.get(['gemini_api_key', 'target_lang']);
                const apiKey = items.gemini_api_key;
                const targetLang = items.target_lang || 'vi';

                // Gọi hàm dịch với các giá trị vừa đọc được
                const result = await translateText(msg.text, apiKey, targetLang);
                sendResponse({ ok: true, result });
            } catch (err) {
                sendResponse({ ok: false, error: err.message });
            }
        })();
        
        // Bắt buộc phải trả về true để báo cho Chrome biết rằng sendResponse sẽ được gọi bất đồng bộ
        return true;
    }
});