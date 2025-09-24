// content.js
(function(){
    let debounceTimer = null;
    const DEBOUNCE_MS = 600;

    function createBubble(){
        const bubble = document.createElement('div');
        bubble.id = 'auto-trans-bubble';
        
        // Thêm CSS cho bubble
        Object.assign(bubble.style, {
            position: 'absolute',
            zIndex: 2147483647,
            background: 'white',
            border: '1px solid #ccc',
            padding: '10px',
            borderRadius: '8px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            maxWidth: '480px',
            fontSize: '14px',
            color: '#333',
            fontFamily: 'sans-serif',
            display: 'none' // Ẩn ban đầu
        });
        
        // Tạo nội dung và nút đóng
        bubble.innerHTML = `
            <div id="auto-trans-content" style="white-space: pre-wrap;"></div>
            <button id="auto-trans-close" style="position: absolute; top: 2px; right: 2px; background: none; border: none; font-size: 16px; cursor: pointer; color: #888;">&times;</button>
        `;

        document.body.appendChild(bubble);

        // Thêm sự kiện cho nút đóng
        bubble.querySelector('#auto-trans-close').addEventListener('click', removeBubble);
        bubble.addEventListener('mousedown', (e) => e.stopPropagation());

        return bubble;
    }

    function removeBubble() {
        const ex = document.getElementById('auto-trans-bubble');
        if (ex) {
            ex.style.display = 'none'; // Ẩn đi thay vì xóa hẳn
        }
    }

    function showBubble(x, y, text) {
        let b = document.getElementById('auto-trans-bubble');
        if (!b) b = createBubble();
        
        b.querySelector('#auto-trans-content').textContent = text || '';
        b.style.left = Math.max(0, x) + 'px';
        b.style.top = Math.max(0, y) + 'px';
        b.style.display = 'block'; // Hiện bubble lên
    }

    function getSelectionText() {
        return window.getSelection().toString().trim();
    }

    async function requestTranslate(text, clientRect) {
        showBubble(clientRect.left + window.scrollX, clientRect.bottom + window.scrollY + 8, 'Đang dịch...');
        try {
            const resp = await chrome.runtime.sendMessage({type:'translate', text});
            if (resp && resp.ok) {
                showBubble(clientRect.left + window.scrollX, clientRect.bottom + window.scrollY + 8, resp.result);
            } else {
                showBubble(clientRect.left + window.scrollX, clientRect.bottom + window.scrollY + 8, 'Lỗi: ' + (resp?.error || 'Không rõ'));
            }
        } catch (e) {
            console.error('Lỗi khi gửi yêu cầu dịch:', e);
            const errorMessage = e.message.includes('Receiving end does not exist') 
                ? 'Không thể kết nối tới background. Vui lòng tải lại tiện ích.'
                : 'Lỗi không xác định.';
            showBubble(clientRect.left + window.scrollX, clientRect.bottom + window.scrollY + 8, 'Lỗi: ' + errorMessage);
        }
    }

    document.addEventListener('mouseup', (ev) => {
        // Kiểm tra xem tiện ích có được bật hay không
        chrome.storage.sync.get('is_enabled', (settings) => {
            if (settings.is_enabled === false) return; // Nếu bị tắt thì không làm gì cả

            const text = getSelectionText();
            if (!text || text.length < 2) {
                removeBubble();
                return;
            }

            const sel = window.getSelection();
            const range = sel.rangeCount ? sel.getRangeAt(0) : null;
            if (!range) return;
            const rect = range.getBoundingClientRect();

            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                requestTranslate(text, rect);
            }, DEBOUNCE_MS);
        });
    });

    document.addEventListener('mousedown', (ev) => {
        const bubble = document.getElementById('auto-trans-bubble');
        // Nếu click ra ngoài bubble thì ẩn nó đi
        if (bubble && !bubble.contains(ev.target)) {
            removeBubble();
        }
    });

    // Các sự kiện để ẩn popup
    window.addEventListener('scroll', removeBubble, true);
    window.addEventListener('resize', removeBubble, true);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            removeBubble();
        }
    });

})();