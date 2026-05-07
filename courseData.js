const coursesData = {
    "python": {
        title: "Python cho người mới bắt đầu",
        description: "Khóa học lập trình Python toàn diện từ con số 0. Bạn sẽ học được cú pháp cơ bản, các cấu trúc dữ liệu cốt lõi, và cách xây dựng các ứng dụng đơn giản. Phù hợp cho người chưa từng học lập trình hoặc muốn chuyển sang IT.",
        benefits: ["Nắm vững cú pháp cơ bản của Python", "Hiểu và áp dụng các cấu trúc dữ liệu (List, Dictionary, Tuple...)", "Xử lý ngoại lệ và làm việc với file", "Xây dựng tư duy logic lập trình nền tảng"],
        modules: [
            {
                title: "Python Fundamentals",
                duration: "18 giờ",
                questions: [
                    { q: "Python được tạo ra bởi ai?", options: ["Guido van Rossum", "Elon Musk", "Bill Gates", "Mark Zuckerberg"], a: 0 },
                    { q: "Từ khóa nào được dùng để định nghĩa một hàm trong Python?", options: ["func", "define", "def", "function"], a: 2 },
                    { q: "Cấu trúc dữ liệu nào trong Python không thể thay đổi (immutable)?", options: ["List", "Dictionary", "Tuple", "Set"], a: 2 },
                    { q: "Kết quả của 3 ** 2 trong Python là gì?", options: ["6", "9", "8", "12"], a: 1 },
                    { q: "Hàm nào dùng để in ra màn hình trong Python?", options: ["echo", "print()", "console.log()", "write()"], a: 1 },
                    { q: "Kiểu dữ liệu của 3.14 là gì?", options: ["int", "str", "float", "bool"], a: 2 },
                    { q: "Từ khóa nào dùng để bắt lỗi trong Python?", options: ["try...except", "catch", "throw", "error"], a: 0 },
                    { q: "Ký tự nào bắt đầu một comment trong Python?", options: ["//", "/*", "#", "<!--"], a: 2 },
                    { q: "Phương thức nào dùng để thêm phần tử vào cuối List?", options: ["add()", "insert()", "push()", "append()"], a: 3 },
                    { q: "Toán tử '//' thực hiện việc gì?", options: ["Chia lấy dư", "Chia lấy phần nguyên", "Nhân đôi", "Bình phương"], a: 1 },
                    { q: "Hàm len() dùng để làm gì?", options: ["Đếm số phần tử", "Chuyển thành chữ hoa", "Tính độ dài mảng/chuỗi", "Tất cả đều đúng"], a: 2 },
                    { q: "List trong Python được khai báo bằng dấu gì?", options: ["{}", "[]", "()", "<>"], a: 1 }
                ]
            }
        ]
    },
    "webdev": {
        title: "HTML, CSS & JavaScript Foundation",
        description: "Khóa học này sẽ biến bạn từ một người mới thành một Frontend Developer thực thụ. Bạn sẽ học cách xây dựng cấu trúc trang web với HTML, làm đẹp giao diện với CSS, và tạo các tương tác động với JavaScript.",
        benefits: ["Thành thạo xây dựng giao diện với HTML5 & CSS3", "Làm chủ JavaScript hiện đại (ES6+)", "Nắm vững kỹ năng thao tác DOM và xử lý sự kiện", "Có khả năng thiết kế web Responsive tương thích đa thiết bị"],
        modules: [
            {
                title: "Web Development Basics",
                duration: "25 giờ",
                questions: [
                    { q: "HTML viết tắt của từ gì?", options: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None of these"], a: 0 },
                    { q: "Thẻ nào tạo ra một liên kết (link)?", options: ["<link>", "<a>", "<href>", "<url>"], a: 1 },
                    { q: "CSS viết tắt của từ gì?", options: ["Cascading Style Sheets", "Creative Style System", "Computer Style Sheets", "Colorful Style Sheets"], a: 0 },
                    { q: "Thuộc tính CSS nào thay đổi màu chữ?", options: ["text-color", "color", "font-color", "bgcolor"], a: 1 },
                    { q: "Thẻ HTML nào dùng để chèn Javascript?", options: ["<js>", "<script>", "<javascript>", "<code>"], a: 1 },
                    { q: "Cách khai báo biến trong JS mới nhất?", options: ["var", "let", "const", "Cả let và const"], a: 3 },
                    { q: "Làm thế nào để viết chú thích 1 dòng trong JS?", options: ["// chú thích", "/* chú thích", "# chú thích", "<!-- chú thích -->"], a: 0 },
                    { q: "Hàm nào hiện bảng thông báo (popup) trong JS?", options: ["msgBox()", "alert()", "prompt()", "console()"], a: 1 },
                    { q: "Giá trị 'null' trong JS là gì?", options: ["Số 0", "Không có giá trị", "Lỗi", "Chuỗi rỗng"], a: 1 },
                    { q: "Mô hình Flexbox trong CSS dùng để làm gì?", options: ["Tạo hiệu ứng", "Quản lý bố cục (layout)", "Đổi màu", "Thay đổi font chữ"], a: 1 },
                    { q: "DOM là viết tắt của?", options: ["Document Object Model", "Data Object Model", "Document Orientation Model", "Display Object Management"], a: 0 },
                    { q: "Đơn vị 'vh' trong CSS nghĩa là gì?", options: ["View height", "Viewport height", "Virtual height", "Vertical height"], a: 1 }
                ]
            }
        ]
    },
    "business": {
        title: "Khởi sự Kinh doanh & Startup",
        description: "Chương trình chuyên sâu về cách xây dựng, quản lý và phát triển một doanh nghiệp khởi nghiệp từ ý tưởng ban đầu. Bạn sẽ học về mô hình kinh doanh, gọi vốn, và chiến lược thị trường.",
        benefits: ["Biết cách lập kế hoạch kinh doanh (Business Plan) chi tiết", "Hiểu rõ các mô hình khởi nghiệp và cách đo lường chỉ số tài chính", "Phân tích thị trường, đối thủ cạnh tranh và lập chiến lược Marketing", "Trang bị tư duy nhạy bén và khả năng lãnh đạo đội ngũ"],
        modules: [
            {
                title: "Business Analysis Fundamentals",
                duration: "18 giờ",
                questions: [
                    { q: "Startup là gì?", options: ["Công ty lớn", "Công ty khởi nghiệp mang tính đổi mới", "Công ty gia đình", "Doanh nghiệp nhà nước"], a: 1 },
                    { q: "B2B có nghĩa là gì?", options: ["Business to Bank", "Business to Business", "Back to Business", "Brand to Brand"], a: 1 },
                    { q: "ROI là viết tắt của?", options: ["Return on Investment", "Rate of Interest", "Return on Income", "Risk of Investment"], a: 0 },
                    { q: "MVP trong khởi nghiệp là gì?", options: ["Most Valuable Player", "Minimum Viable Product", "Maximum Value Price", "Market Value Proposition"], a: 1 },
                    { q: "Vốn lưu động (Working Capital) là?", options: ["Tài sản dài hạn", "Tài sản ngắn hạn trừ Nợ ngắn hạn", "Vốn điều lệ", "Lợi nhuận"], a: 1 },
                    { q: "Mô hình SWOT phân tích những yếu tố nào?", options: ["Strengths, Weaknesses, Opportunities, Threats", "Sales, Wealth, Output, Time", "Strategy, Work, Objectives, Tactics", "None of the above"], a: 0 },
                    { q: "KPI dùng để làm gì?", options: ["Trả lương", "Đo lường hiệu suất", "Tuyển dụng", "Thiết kế sản phẩm"], a: 1 },
                    { q: "Thị trường ngách (Niche market) là gì?", options: ["Thị trường toàn cầu", "Thị trường có rất nhiều đối thủ", "Một phân khúc nhỏ của thị trường", "Thị trường chợ đen"], a: 2 },
                    { q: "Kế hoạch kinh doanh (Business Plan) thường có mục đích gì?", options: ["Gọi vốn", "Định hướng phát triển", "Đánh giá rủi ro", "Tất cả đều đúng"], a: 3 },
                    { q: "Chi phí cố định (Fixed cost) là gì?", options: ["Tiền nguyên vật liệu", "Tiền thuê mặt bằng", "Tiền hoa hồng", "Phí vận chuyển"], a: 1 },
                    { q: "Customer Persona là gì?", options: ["Tên khách hàng", "Chân dung khách hàng mục tiêu", "Nhân viên chăm sóc khách hàng", "Doanh thu khách hàng"], a: 1 }
                ]
            }
        ]
    },
    "react": {
        title: "Phát triển Web Frontend với ReactJS",
        description: "Bước vào thế giới của ReactJS - thư viện Frontend phổ biến nhất hiện nay. Khóa học hướng dẫn bạn tư duy Component, cách quản lý State, và xây dựng các Single Page Application (SPA) tốc độ cao.",
        benefits: ["Thành thạo việc chia nhỏ UI thành các Components độc lập", "Nắm vững các Hooks quan trọng (useState, useEffect, useContext...)", "Làm việc với API, xử lý bất đồng bộ trong React", "Triển khai Routing bằng React Router và quản lý Global State"],
        modules: [
            {
                title: "React JS Core",
                duration: "35 giờ",
                questions: [
                    { q: "React được phát triển bởi công ty nào?", options: ["Google", "Facebook (Meta)", "Microsoft", "Twitter"], a: 1 },
                    { q: "JSX là gì?", options: ["Một ngôn ngữ mới", "Cú pháp mở rộng của JavaScript", "Một thư viện CSS", "Database"], a: 1 },
                    { q: "Hook nào dùng để quản lý State?", options: ["useEffect", "useContext", "useState", "useReducer"], a: 2 },
                    { q: "Props trong React là gì?", options: ["Dữ liệu nội bộ", "Hàm", "Tham số truyền từ Component cha xuống con", "State"], a: 2 },
                    { q: "Để chạy một hiệu ứng phụ (side effect), ta dùng Hook nào?", options: ["useState", "useEffect", "useMemo", "useCallback"], a: 1 },
                    { q: "Virtual DOM là gì?", options: ["DOM thật của trình duyệt", "Bản sao nhẹ của DOM trong bộ nhớ", "Một plugin", "Một API"], a: 1 },
                    { q: "Lệnh nào dùng để tạo app React mới?", options: ["npx create-react-app", "npm init react", "react build", "npx install react"], a: 0 },
                    { q: "Thành phần (Component) trong React trả về gì?", options: ["HTML thuần", "JSX", "CSS", "JSON"], a: 1 },
                    { q: "Key trong list của React dùng để?", options: ["Trang trí", "Xác định các phần tử duy nhất", "Thay đổi màu sắc", "Tạo sự kiện"], a: 1 },
                    { q: "React Router dùng để làm gì?", options: ["Quản lý API", "Điều hướng trang", "Quản lý State", "Tối ưu hóa"], a: 1 }
                ]
            }
        ]
    },
    "ai": {
        title: "Deep Learning & AI Masterclass",
        description: "Khóa học cung cấp kiến thức nền tảng và nâng cao về Trí tuệ Nhân tạo và Deep Learning. Bạn sẽ được hướng dẫn cách xây dựng các mạng Nơ-ron nhân tạo và giải quyết các bài toán về Xử lý ngôn ngữ tự nhiên, Thị giác máy tính.",
        benefits: ["Hiểu sâu sắc về cấu trúc mạng Nơ-ron và thuật toán lan truyền ngược", "Thực hành xây dựng mô hình AI với TensorFlow/PyTorch", "Giải quyết các bài toán phân loại ảnh (Computer Vision) cơ bản", "Nắm bắt xu hướng ứng dụng AI trong tương lai (NLP, Generative AI)"],
        modules: [
            {
                title: "AI Fundamentals & Neural Networks",
                duration: "50 giờ",
                questions: [
                    { q: "AI viết tắt của?", options: ["Artificial Intelligence", "Automated Information", "Advanced Interface", "Active Integration"], a: 0 },
                    { q: "Machine Learning là gì?", options: ["Học vẹt", "Máy tính tự học từ dữ liệu", "Lập trình web", "Hệ điều hành"], a: 1 },
                    { q: "Mạng nơ-ron nhân tạo lấy cảm hứng từ đâu?", options: ["Mạng nhện", "Bộ não con người", "Mạng máy tính", "Hệ mặt trời"], a: 1 },
                    { q: "Overfitting trong ML là hiện tượng gì?", options: ["Mô hình học quá tốt trên tập huấn luyện nhưng kém trên dữ liệu mới", "Mô hình không học được gì", "Thiếu dữ liệu", "Mô hình chạy quá nhanh"], a: 0 },
                    { q: "Hàm kích hoạt (Activation Function) phổ biến trong Deep Learning?", options: ["ReLU", "Print", "Main", "Return"], a: 0 },
                    { q: "NLP viết tắt của?", options: ["Natural Language Processing", "New Learning Process", "Neural Logic Program", "None of these"], a: 0 },
                    { q: "Computer Vision giúp máy tính làm gì?", options: ["Nghe nhạc", "Hiểu và xử lý hình ảnh", "Dịch văn bản", "Chạy hệ điều hành"], a: 1 },
                    { q: "Epoch trong huấn luyện mô hình là gì?", options: ["Một thuật toán", "Một lần duyệt qua toàn bộ tập dữ liệu huấn luyện", "Tốc độ học", "Lỗi"], a: 1 },
                    { q: "Backpropagation dùng để làm gì?", options: ["Lan truyền ngược để cập nhật trọng số", "Tạo giao diện", "Thu thập dữ liệu", "Tính toán song song"], a: 0 },
                    { q: "GPU thường được dùng trong Deep Learning vì?", options: ["Rẻ hơn CPU", "Xử lý tính toán song song tốt hơn CPU", "Kích thước nhỏ", "Không tốn điện"], a: 1 }
                ]
            }
        ]
    },
    "datamngt": {
        title: "Quản trị Cơ sở Dữ liệu Hệ thống",
        description: "Làm chủ ngôn ngữ SQL và các hệ quản trị CSDL quan hệ. Khóa học giúp bạn nắm vững nghệ thuật truy vấn dữ liệu, thiết kế hệ thống và tối ưu hóa hiệu năng lưu trữ trong doanh nghiệp.",
        benefits: ["Thành thạo các lệnh truy vấn dữ liệu (SELECT, JOIN, GROUP BY...)", "Thiết kế, sửa đổi cấu trúc bảng (DDL) và thao tác dữ liệu (DML)", "Hiểu các khái niệm chuẩn hóa dữ liệu, Khóa chính, Khóa ngoại", "Nắm được nguyên tắc tối ưu hiệu năng truy vấn (Indexing, ACID)"],
        modules: [
            {
                title: "Database Administration Basics",
                duration: "30 giờ",
                questions: [
                    { q: "SQL là viết tắt của?", options: ["Structured Query Language", "Strong Question Language", "System Query Logic", "Simple Query Language"], a: 0 },
                    { q: "Lệnh nào dùng để lấy dữ liệu từ bảng?", options: ["GET", "SELECT", "PULL", "FETCH"], a: 1 },
                    { q: "Khóa chính (Primary Key) có đặc điểm gì?", options: ["Cho phép trùng lặp", "Duy nhất và không NULL", "Chỉ được dùng cho số", "Bắt buộc phải là Email"], a: 1 },
                    { q: "RDBMS là gì?", options: ["Hệ thống quản trị CSDL quan hệ", "Hệ điều hành mạng", "Ngôn ngữ lập trình", "Phần mềm diệt virus"], a: 0 },
                    { q: "Lệnh dùng để xóa một bảng trong SQL?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"], a: 2 },
                    { q: "NoSQL là gì?", options: ["CSDL không dùng SQL/không quan hệ", "Lỗi SQL", "Một hàm trong SQL", "Phần mềm Excel"], a: 0 },
                    { q: "JOIN trong SQL dùng để làm gì?", options: ["Kết hợp dữ liệu từ nhiều bảng", "Tách bảng", "Đổi tên bảng", "Xóa bảng"], a: 0 },
                    { q: "Lệnh UPDATE đi kèm với mệnh đề nào để tránh cập nhật toàn bộ bảng?", options: ["WHERE", "IF", "WHEN", "FILTER"], a: 0 },
                    { q: "ACID trong CSDL bao gồm những thuộc tính nào?", options: ["Atomicity, Consistency, Isolation, Durability", "Action, Code, Idea, Data", "Auto, Control, Input, Delete", "None of these"], a: 0 },
                    { q: "Index trong CSDL giúp gì?", options: ["Làm đẹp bảng", "Tăng tốc độ truy vấn", "Giảm dung lượng", "Tạo khóa ngoại"], a: 1 }
                ]
            }
        ]
    },
    "datamodel": {
        title: "Mô hình hóa Dữ liệu (Data Modeling)",
        description: "Khóa học đi sâu vào kỹ thuật thiết kế mô hình dữ liệu cho doanh nghiệp. Khám phá cách biểu diễn kiến trúc thông tin từ Conceptual, Logical đến Physical models cho Data Warehouse và OLTP.",
        benefits: ["Hiểu rõ quy trình và vai trò của mô hình hóa dữ liệu (Data Modeling)", "Sử dụng thành thạo sơ đồ ER (Entity Relationship Diagram)", "Thiết kế được các mô hình Star Schema, Snowflake Schema cho Data Warehouse", "Tối ưu hóa thiết kế CSDL để dễ dàng mở rộng và phân tích dữ liệu"],
        modules: [
            {
                title: "Data Modeling Foundation",
                duration: "40 giờ",
                questions: [
                    { q: "Mô hình hóa dữ liệu (Data Modeling) là quá trình gì?", options: ["Tạo giao diện web", "Thiết kế cấu trúc dữ liệu và mối quan hệ", "Lập trình server", "Cài đặt máy tính"], a: 1 },
                    { q: "ERD là viết tắt của?", options: ["Entity Relationship Diagram", "External Resource Data", "Electronic Record Device", "Entry Route Design"], a: 0 },
                    { q: "Thực thể (Entity) trong ERD thường đại diện cho?", options: ["Hành động", "Một đối tượng (Người, vật, sự kiện...)", "Màu sắc", "Giao diện"], a: 1 },
                    { q: "Mối quan hệ 1-N nghĩa là gì?", options: ["Một - Một", "Nhiều - Nhiều", "Một - Nhiều", "Không có quan hệ"], a: 2 },
                    { q: "Chuẩn hóa dữ liệu (Normalization) giúp gì?", options: ["Tăng dung lượng lưu trữ", "Giảm thiểu dư thừa dữ liệu", "Làm chậm hệ thống", "Tạo giao diện đẹp"], a: 1 },
                    { q: "Khóa ngoại (Foreign Key) là gì?", options: ["Khóa của nhà", "Thuộc tính liên kết đến Khóa chính của bảng khác", "Mật khẩu database", "Khóa USB"], a: 1 },
                    { q: "Các mức mô hình dữ liệu gồm?", options: ["Conceptual, Logical, Physical", "Front, Back, Middle", "High, Medium, Low", "Top, Bottom, Left"], a: 0 },
                    { q: "Trong mô hình Logical, chúng ta định nghĩa gì?", options: ["Cách lưu trên ổ cứng", "Cấu trúc bảng và các ràng buộc", "Ngôn ngữ lập trình", "Giao diện người dùng"], a: 1 },
                    { q: "OLTP là hệ thống tối ưu cho việc gì?", options: ["Phân tích dữ liệu lớn", "Xử lý giao dịch trực tuyến", "Thiết kế ảnh", "Nghe nhạc"], a: 1 },
                    { q: "Data Warehouse thường dùng mô hình nào?", options: ["Star Schema / Snowflake Schema", "Flat file", "Network model", "Hierarchical model"], a: 0 }
                ]
            }
        ]
    },
    "aicert": {
        title: "Chứng chỉ chuyên nghiệp AI Engineer",
        description: "Chương trình huấn luyện toàn diện nhất dành cho Kỹ sư AI tương lai. Từ cơ sở toán học, lập trình, đến triển khai hệ thống AI ngoài thực tế (Model Deployment & MLOps).",
        benefits: ["Trang bị kiến thức toán học và tối ưu hóa chuyên biệt cho ML/DL", "Xây dựng mô hình phức tạp (Transformer, CNN) bằng các bộ dữ liệu lớn", "Nắm được quy trình MLOps, Deploy mô hình qua API, Docker", "Nhận chứng chỉ chuyên nghiệp AI Engineer từ LearnX sau khi hoàn thành"],
        modules: [
            {
                title: "AI Engineer Certification Path",
                duration: "80 giờ",
                questions: [
                    { q: "Chứng chỉ AI Engineer thường yêu cầu kiến thức gì?", options: ["HTML/CSS", "Toán học, Lập trình Python, Machine Learning", "Thiết kế đồ họa", "Kế toán"], a: 1 },
                    { q: "Thư viện nào phổ biến cho Deep Learning bằng Python?", options: ["jQuery", "TensorFlow / PyTorch", "React", "Bootstrap"], a: 1 },
                    { q: "Transfer Learning là gì?", options: ["Truyền file qua mạng", "Sử dụng mô hình đã huấn luyện cho bài toán mới", "Chuyển tiền", "Học tiếng Anh"], a: 1 },
                    { q: "Kỹ thuật Augmentation trong Computer Vision dùng để?", options: ["Xóa ảnh", "Làm đa dạng dữ liệu huấn luyện bằng cách xoay, lật...", "Làm nét ảnh", "In ảnh"], a: 1 },
                    { q: "Transformer là mô hình đột phá trong lĩnh vực nào?", options: ["NLP (Xử lý ngôn ngữ tự nhiên)", "Kế toán", "Lập trình nhúng", "Bảo mật"], a: 0 },
                    { q: "Hệ thống Recommendation (Gợi ý) thường dùng kỹ thuật nào?", options: ["Collaborative Filtering", "Quick Sort", "Binary Search", "Bubble Sort"], a: 0 },
                    { q: "Model Deployment là quá trình gì?", options: ["Xóa mô hình", "Đưa mô hình vào môi trường thực tế (Production)", "Thiết kế logo", "Huấn luyện lại"], a: 1 },
                    { q: "Hyperparameter tuning là gì?", options: ["Tinh chỉnh siêu tham số để tối ưu mô hình", "Thay đổi màu sắc", "Tăng âm lượng", "Mua thêm RAM"], a: 0 },
                    { q: "Một rủi ro phổ biến của AI là gì?", options: ["AI tốn ít điện", "Thiên vị (Bias) trong dữ liệu", "AI quá chậm", "AI không có lỗi"], a: 1 },
                    { q: "Công cụ Docker giúp gì trong triển khai AI?", options: ["Đóng gói ứng dụng và môi trường để chạy mọi nơi", "Chỉnh sửa ảnh", "Soạn thảo văn bản", "Lướt web"], a: 0 }
                ]
            }
        ]
    }
};
