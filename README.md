# The Thinker English Center - Landing Page

Dự án Landing Page cho Trung tâm Anh ngữ "The Thinker", được xây dựng với mục tiêu mang lại ấn tượng thị giác mạnh mẽ (Premium Aesthetics) và cấu trúc hiện đại cho người dùng. 

Dự án sử dụng kiến trúc **Vanilla HTML, CSS, JavaScript** để đảm bảo tính gọn nhẹ, linh hoạt tối đa, và có thể chạy được trên mọi môi trường mà không cần phụ thuộc vào Node.js hay các Framework phức tạp.

## 🌟 Chức năng nổi bật (Walkthrough)
- **Giao diện cao cấp (Premium Aesthetics):** Sử dụng các biến CSS hiện đại, màu sắc nổi bật, hệ thống bóng đổ (box-shadow) phân tầng, hiệu ứng Glassmorphism và Typography Google Fonts (Inter & Outfit).
- **Responsive 100%:** Tối ưu hóa trên mọi thiết bị (Mobile, Tablet, Desktop) thông qua CSS Grid/Flexbox và CSS Media Queries.
- **Thanh Menu (Navigation):** Có Sticky Header khi cuộn trang, Dropdown Menu trên Desktop và Hamburger Sliding Menu trên Mobile.
- **Hero & Đăng ký tư vấn:** Giao diện bắt mắt với Form Đăng ký tư vấn lộ trình học tập được nhúng trực tiếp ngay đầu trang để tăng tỉ lệ chuyển đổi.
- **Search & Lọc chương trình:** Hỗ trợ Popup tìm kiếm toàn trang, và bộ lọc danh mục Chương trình học (Tất cả, Tiếng Anh, Kỹ Năng Mềm, Ngoại Khóa) sử dụng JavaScript DOM Manipulation.
- **Nội dung lý thuyết giáo dục:** Thể hiện trực quan về 4 Trụ cột giáo dục UNESCO, Thang nhận thức Bloom và 3 Trụ cột cốt lõi của The Thinker.
- **Floating Contact Bar:** Tích hợp bộ nút gọi nhanh góc dưới bên phải gồm Hotline, Zalo, và Facebook Messenger.
- **Liên hệ (Contact):** Nhúng bản đồ Google Maps và hướng dẫn chỉ đường chi tiết.

---

## 🌍 Hướng dẫn Đa ngôn ngữ (i18n)

Trang web hỗ trợ 2 ngôn ngữ **Tiếng Việt (Mặc định)** và **Tiếng Anh**. Cơ chế dịch thuật được thực hiện thông qua JSON Object trong file JavaScript mà không cần tải lại trang.

### Thay đổi nội dung dịch thuật
1. Mở file `js/translations.js`.
2. Bên trong biến `translations`, bạn sẽ thấy 2 key là `vi` và `en`.
3. Tìm đến key (ví dụ: `hero_subtitle`) và thay đổi chuỗi text tương ứng.
4. Lưu file và tải lại trình duyệt.

### Cách thêm một Ngôn ngữ mới
Nếu muốn thêm ngôn ngữ (ví dụ: Tiếng Pháp `fr`), bạn cần thao tác như sau:
1. Mở file `js/translations.js` và tạo nội dung bản dịch mới:
   ```javascript
   const translations = {
      vi: { ... },
      en: { ... },
      fr: { 
         "nav_home": "Accueil",
         // ... copy các id từ phần tiếng Anh (en) sang và dịch nội dung tương ứng
      }
   }
   ```
2. Mở file `index.html` và tìm đến nút Toggle (`id="lang-toggle"`) ở Navigation Header.
3. Thay thế cấu trúc của nút thay đổi ngôn ngữ, hoặc cấu hình lại hàm `setLanguage()` trong `js/main.js` để có thể đổi qua lại giữa 3 ngôn ngữ thay vì chỉ 2 mã (`vi` / `en`). Cơ chế `data-i18n` của HTML sẽ tự động map nội dung cho ngôn ngữ mới.

---

## 🚀 Hướng dẫn Cài đặt & Chạy (Run)

Việc phát triển và chạy dự án này vô cùng đơn giản, không yêu cầu cài đặt môi trường phức tạp.

### 1. Trực tiếp trên trình duyệt (Môi trường cục bộ đơn giản nhất)
Bạn chỉ cần mở trực tiếp file `index.html` trong bất kỳ trình duyệt web hiện đại nào (Chrome, Edge, Firefox, Safari).
- **Cách làm:** Click đúp chuột vào file `index.html` hoặc kéo-thả file `index.html` vào cửa sổ trình duyệt.

### 2. Sử dụng Local Web Server (Khuyên dùng để JS hoạt động tốt nhất nếu tương tác Fetch/API sau này)
Nếu môi trường máy tính của bạn có cài sẵn Python (hoặc IDE như VSCode có tiện ích mở rộng Live Server), bạn có thể chạy một Local Server:

**Sử dụng Python:**
Mở Terminal/Command Prompt trong thư mục chứa dự án:
- Đối với Windows/Python 3.x:
  ```bash
  python -m http.server 8000
  ```
- Mở trình duyệt và truy cập vào: `http://localhost:8000`

**Sử dụng VSCode Live Server:**
- Mở thư mục dự án trong VSCode.
- Cài đặt extension **Live Server** (của Ritwick Dey).
- Click chuột phải vào file `index.html` và chọn **"Open with Live Server"**.

---

## 🛠 Hướng dẫn Debug (Sửa lỗi/Gỡ rối)

Mọi quá trình Debugging có thể được thực hiện hoàn toàn trong **Developer Tools** của trình duyệt web (Nhấn `F12` hoặc `Ctrl + Shift + I` / `Cmd + Opt + I` trên Chrome/Edge).

1. **HTML & Layout (Tab Elements):** Kiểm tra cấu trúc thẻ, xem khoảng cách padding, margin, hay kiểm tra Responsive bằng công cụ Device Toolbar (biểu tượng Điện thoại/Tablet).
2. **CSS Styling (Tab Elements > Styles):** Live-edit các biến màu sắc `:root` hoặc CSS rules trong file `style.css` ngay trên trình duyệt để tinh chỉnh.
3. **JavaScript (Tab Console & Sources):** 
   - Tab **Console**: Nơi in ra các message lỗi nếu có, hoặc để bạn log các biến trong quá trình thao tác filter, submit form.
   - Các logic tương tác DOM (Search form, Slider, Form Submission) được viết hoàn toàn trong `js/main.js`. Bạn có thể đặt Breakpoints trực tiếp ở Tab **Sources** để debug luồng JavaScript.

---

## 📦 Hướng dẫn Release (Triển khai/Đưa lên mạng)

Do đây là dự án Website tĩnh (Static Website - chỉ bao gồm HTML, CSS, JS), bạn có thể nhanh chóng xuất bản trang web này hoàn toàn miễn phí trên các dịch vụ hosting dành cho Frontend trong vài phút mà không cần thiết lập Server hay Database.

### Phương án 1: GitHub Pages (Đề xuất)
1. Tạo một tài khoản [GitHub](https://github.com/) và tạo một repository mới (ví dụ: `the-thinker-landing`).
2. Tải toàn bộ mã nguồn của thư mục này lên Repo vừa tạo.
3. Trong Repository, vào phần **Settings > Pages**.
4. Chọn Source là nhánh `main` (hoặc `master`) và nhấn Save.
5. Đợi khoảng 1-2 phút, GitHub sẽ cấp cho bạn một đường link tĩnh miễn phí dạng `https://[username].github.io/the-thinker-landing/` để gửi cho phụ huynh.

### Phương án 2: Vercel hoặc Netlify
Dành cho việc bạn muốn tích hợp CI/CD tự động khi push code:
1. Đăng ký tài khoản trên [Vercel](https://vercel.com/) hoặc [Netlify](https://www.netlify.com/).
2. Kéo-thả (Drag & Drop) trực tiếp thư mục chứa `index.html` vào giao diện deploy của Netlify, hoặc link với GitHub repository.
3. Dịch vụ sẽ tự động deploy và cấp cho bạn một đường dẫn (có thể cấu hình trỏ tên miền tùy chỉnh ví dụ `thethinker.vn` sau này một cách rất dễ dàng).
