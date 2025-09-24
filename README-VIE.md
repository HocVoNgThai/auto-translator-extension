Tài liệu này cũng có sẵn bằng tiếng Anh [**Phiên bản tiếng Anh**](README.md).
<hr>
<div align = "center">

# auto-translator-extension 📝

</div>

Một tiện ích trình duyệt giúp dịch tự động văn bản được bôi đen trên bất kỳ trang web nào bằng Google Gemini API. Chỉ cần tô sáng một từ hoặc cụm từ, một cửa sổ nhỏ gọn sẽ xuất hiện và cung cấp bản dịch nhanh chóng.

---
## Tính năng ✨

- **Dịch tức thì**: Nhận bản dịch ngay lập tức chỉ bằng cách bôi đen văn bản.
- **Hỗ trợ bởi Google Gemini**: Tận dụng sức mạnh của mô hình Gemini 1.5 Flash cho các bản dịch nhanh và chính xác.
- **Tùy chỉnh ngôn ngữ đích**: Dễ dàng thay đổi ngôn ngữ bạn muốn dịch sang trực tiếp từ popup của tiện ích.
- **Bật/Tắt nhanh**: Kích hoạt hoặc vô hiệu hóa tính năng dịch chỉ với một cú nhấp chuột trong popup.
- **Popup tùy chỉnh**: Popup dịch được thiết kế hữu ích nhưng không gây rối. Bạn có thể dễ dàng tắt nó bằng cách cuộn trang, nhấn phím 'Escape', hoặc nhấp vào nút '×'.
- **Bảo mật**: API key của bạn được lưu trữ cục bộ và an toàn trong bộ nhớ của trình duyệt, không bao giờ bị chia sẻ.

---
## Hướng dẫn sử dụng 🔧
### Yêu cầu

- Một trình duyệt hiện đại hỗ trợ tiện ích Chrome (Google Chrome, Microsoft Edge, Brave, v.v.).
- Google Gemini API Key của riêng bạn. Bạn có thể lấy miễn phí tại Google AI Studio.

### Cài đặt (từ mã nguồn)

1. **Tải về hoặc Clone**: Tải repo này dưới dạng tệp ZIP và giải nén, hoặc clone bằng Git.
```
git clone https://github.com/HocVoNgThai/auto-translator-extension.git
```
2. **Mở trang tiện ích**: Mở trình duyệt và truy cập vào địa chỉ chrome://extensions.

3. **Bật chế độ nhà phát triển**: Tìm và bật tùy chọn "Chế độ dành cho nhà phát triển" (Developer mode) ở góc trên bên phải.

<img width="275" height="91" alt="image" src="https://github.com/user-attachments/assets/c8926036-884a-4422-80c1-bb19b1f0ba6f" />

4. **Tải tiện ích**: Nhấp vào nút "Tải tiện ích đã giải nén" (Load unpacked) vừa xuất hiện.

<img width="557" height="220" alt="image" src="https://github.com/user-attachments/assets/ed1cb4a9-2b3f-4fe1-ab7e-5d6cdd54a305" />

5. **Chọn Thư mục**: Trong cửa sổ chọn tệp, hãy chọn thư mục mà bạn vừa giải nén hoặc clone repo.

Biểu tượng của tiện ích sẽ xuất hiện trên thanh công cụ của trình duyệt!

### Cấu hình và Sử dụng

1. **Thiết lập API Key của bạn**:
- Mở thư mục mã nguồn và chọn tệp background.js.
- Dán Google Gemini API Key của bạn vào đây.
<img width="555" height="75" alt="image" src="https://github.com/user-attachments/assets/ccfd3499-c348-4db3-bb69-a5cf7468dd71" />

- Nhấn "Lưu" và tải lại tiện ích.

2. **Bắt đầu dịch**:
- Truy cập một trang web bất kỳ có văn bản.
- Bôi đen một từ hoặc cụm từ.
- Bản dịch sẽ xuất hiện trong một bong bóng nhỏ gần vùng bạn chọn.

3. **Cài đặt nhanh**:
- Nhấp chuột trái vào biểu tượng tiện ích trên thanh công cụ để mở popup chính.
- Tại đây, bạn có thể bật/tắt nhanh tiện ích hoặc thay đổi ngôn ngữ đích.

## Hướng phát triển trong tương lai 🚀 

- Dự án này có rất nhiều tiềm năng để phát triển thêm. Dưới đây là một vài ý tưởng:
- Hỗ trợ nhiều API: Tích hợp thêm các dịch vụ dịch thuật khác như DeepL, Microsoft Translator và cho phép người dùng lựa chọn.
- Chuyển văn bản thành giọng nói (Text-to-Speech): Thêm nút "nghe" để đọc to văn bản được bôi đen hoặc bản dịch.
- Lịch sử dịch: Lưu lại lịch sử các bản dịch gần đây trong popup để tiện tra cứu.
- Tùy chỉnh nâng cao: Cho phép người dùng tùy chỉnh giao diện của bong bóng dịch (màu sắc, cỡ chữ, vị trí) trong trang Tùy chọn.
- Chế độ tra từ điển: Thêm tùy chọn để tra định nghĩa của một từ thay vì chỉ dịch nghĩa.

Đăng lên Cửa hàng Chrome trực tuyến: Đóng gói tiện ích để người dùng có thể dễ dàng cài đặt từ Cửa hàng Chrome trực tuyến.
