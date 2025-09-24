//Replace your api key here
const API_KEY = "AIzaSyAGLiWFQKMa81Bu7mpwZ5lPIIvZVq8saSU";

async function translateText(text, targetLang) {
    if (!API_KEY || API_KEY === "YOUR_GEMINI_API_KEY_HERE") {
        throw new Error('API key chưa được cấu hình bởi nhà phát triển.');
    }

    const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${API_KEY}`;
    
    const prompt = `You are a helpful translator. Translate the following texts, words, or sentences into ${targetLang}. Keep the translation concise and only output the translated meaning. Do not add explanations or say anything beyond the translation itself. If a word has multiple meanings, list them separated by commas, with a maximum of three to four meanings. Text to translate: "${text}"`;

    const payload = {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { temperature: 0.2, maxOutputTokens: 1024 }
    };

    const resp = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.type === 'translate') {
        (async () => {
            try {
                const items = await chrome.storage.sync.get('target_lang');
                const targetLang = items.target_lang || 'vi';
                const result = await translateText(msg.text, targetLang);
                sendResponse({ ok: true, result });
            } catch (err) {
                sendResponse({ ok: false, error: err.message });
            }
        })();
        return true;
    }
});