const lessonsData = {
  python: [
    { id:1, title:"Giới thiệu Python", icon:"🐍", slides:[
      { title:"Python là gì?", content:"<h3>🐍 Python</h3><p>Ngôn ngữ lập trình bậc cao, dễ đọc, tạo bởi <b>Guido van Rossum</b> năm 1991.</p><p>Dùng trong: <b>Web, AI, Data Science, Automation</b></p>" },
      { title:"Biến & Kiểu dữ liệu", content:"<h3>📦 Biến trong Python</h3><div class='slide-code'>age = 25<br>name = \"LearnX\"<br>pi = 3.14<br>is_fun = True<br>print(type(age))  # int</div><p>Python tự nhận biết kiểu — <b>dynamic typing</b></p>" },
      { title:"Cấu trúc điều kiện", content:"<h3>🔀 If / Else</h3><div class='slide-code'>score = 85<br>if score >= 80:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Xuất sắc!\")<br>elif score >= 50:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Đạt\")<br>else:<br>&nbsp;&nbsp;&nbsp;&nbsp;print(\"Chưa đạt\")</div>" },
      { title:"Vòng lặp & Hàm", content:"<h3>🔁 Loop & Function</h3><div class='slide-code'>for i in range(5):<br>&nbsp;&nbsp;&nbsp;&nbsp;print(i)<br><br>def chao(ten):<br>&nbsp;&nbsp;&nbsp;&nbsp;return f\"Xin chào {ten}!\"<br><br>print(chao(\"LearnX\"))</div>" }
    ]},
    { id:2, title:"List, Dict & OOP", icon:"📦", slides:[
      { title:"List", content:"<h3>📋 List</h3><div class='slide-code'>fruits = [\"táo\", \"cam\", \"chuối\"]<br>fruits.append(\"xoài\")<br>print(fruits[0])   # táo<br>print(len(fruits)) # 4</div><p>List có thứ tự, thay đổi được, index từ 0</p>" },
      { title:"Dictionary", content:"<h3>🗂 Dictionary</h3><div class='slide-code'>person = {<br>&nbsp;&nbsp;\"name\": \"An\",<br>&nbsp;&nbsp;\"age\": 25<br>}<br>print(person[\"name\"]) # An<br>person[\"city\"] = \"HCM\"</div>" },
      { title:"Class & OOP", content:"<h3>🏗 Lập trình hướng đối tượng</h3><div class='slide-code'>class Animal:<br>&nbsp;&nbsp;def __init__(self, name):<br>&nbsp;&nbsp;&nbsp;&nbsp;self.name = name<br>&nbsp;&nbsp;def speak(self):<br>&nbsp;&nbsp;&nbsp;&nbsp;return f\"{self.name} kêu!\"<br><br>dog = Animal(\"Chó\")<br>print(dog.speak())</div>" }
    ]}
  ],
  webdev: [
    { id:1, title:"HTML Cơ bản", icon:"🌐", slides:[
      { title:"HTML là gì?", content:"<h3>🌐 HTML</h3><p><b>HyperText Markup Language</b> — xương sống của mọi trang web.</p><div class='slide-code'>&lt;h1&gt;Tiêu đề&lt;/h1&gt;<br>&lt;p&gt;Đoạn văn&lt;/p&gt;<br>&lt;a href=\"#\"&gt;Link&lt;/a&gt;<br>&lt;img src=\"img.png\" alt=\"\"&gt;</div>" },
      { title:"Semantic HTML", content:"<h3>🏛 Semantic HTML5</h3><div class='slide-code'>&lt;header&gt;Đầu trang&lt;/header&gt;<br>&lt;nav&gt;Điều hướng&lt;/nav&gt;<br>&lt;main&gt;Nội dung chính&lt;/main&gt;<br>&lt;section&gt;Phần&lt;/section&gt;<br>&lt;footer&gt;Chân trang&lt;/footer&gt;</div>" },
      { title:"Forms", content:"<h3>📝 Form HTML</h3><div class='slide-code'>&lt;form&gt;<br>&nbsp;&nbsp;&lt;input type=\"email\" placeholder=\"Email\"&gt;<br>&nbsp;&nbsp;&lt;input type=\"password\"&gt;<br>&nbsp;&nbsp;&lt;button type=\"submit\"&gt;Đăng nhập&lt;/button&gt;<br>&lt;/form&gt;</div>" }
    ]},
    { id:2, title:"CSS & JavaScript", icon:"🎨", slides:[
      { title:"CSS Selectors", content:"<h3>🎨 CSS</h3><div class='slide-code'>/* Tag */ h1 { color: blue; }<br>/* Class */ .card { padding: 20px; }<br>/* ID */ #nav { position: fixed; }<br>/* Flexbox */<br>.box { display: flex; gap: 10px; }</div>" },
      { title:"JavaScript DOM", content:"<h3>⚡ JavaScript</h3><div class='slide-code'>const btn = document.getElementById('btn');<br>btn.addEventListener('click', () => {<br>&nbsp;&nbsp;document.body.style.background = 'red';<br>});<br><br>fetch('/api').then(r => r.json())<br>&nbsp;&nbsp;.then(data => console.log(data));</div>" }
    ]}
  ],
  business: [
    { id:1, title:"Tư duy Khởi nghiệp", icon:"💼", slides:[
      { title:"Startup là gì?", content:"<h3>🚀 Startup</h3><p>Công ty khởi nghiệp giải quyết <b>vấn đề thực tế</b> bằng giải pháp đổi mới có khả năng <b>tăng trưởng nhanh</b>.</p><p>Ví dụ: Grab, Airbnb, Shopify</p>" },
      { title:"Lean Startup", content:"<h3>🔄 Lean Startup</h3><div class='slide-code'>BUILD → MEASURE → LEARN<br><br>MVP: Ra mắt sớm nhất có thể<br>→ Thu thập phản hồi thật<br>→ Cải tiến dựa trên dữ liệu<br>→ Pivot nếu cần</div>" },
      { title:"SWOT Analysis", content:"<h3>📊 SWOT</h3><div class='slide-code'>S - Strengths    (Điểm mạnh)<br>W - Weaknesses   (Điểm yếu)<br>O - Opportunities (Cơ hội)<br>T - Threats      (Đe dọa)</div><p>Phân tích trung thực → Chiến lược đúng đắn</p>" }
    ]}
  ],
  react: [
    { id:1, title:"React Fundamentals", icon:"⚛️", slides:[
      { title:"React là gì?", content:"<h3>⚛️ ReactJS</h3><p>Thư viện JavaScript của <b>Meta</b> để xây dựng UI theo kiến trúc <b>Component</b>.</p><p>Điểm mạnh: Virtual DOM, tái sử dụng component, ecosystem lớn</p>" },
      { title:"Components & JSX", content:"<h3>🧩 Component</h3><div class='slide-code'>function Card({ title, desc }) {<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;div className=\"card\"&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h2&gt;{title}&lt;/h2&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;p&gt;{desc}&lt;/p&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>&nbsp;&nbsp;);<br>}</div>" },
      { title:"useState Hook", content:"<h3>🎣 useState</h3><div class='slide-code'>import { useState } from 'react';<br><br>function Counter() {<br>&nbsp;&nbsp;const [count, setCount] = useState(0);<br>&nbsp;&nbsp;return (<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;button onClick={() =&gt; setCount(c+1)}&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Số: {count}<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/button&gt;<br>&nbsp;&nbsp;);<br>}</div>" }
    ]}
  ],
  ai: [
    { id:1, title:"AI & Machine Learning", icon:"🤖", slides:[
      { title:"AI là gì?", content:"<h3>🤖 Trí tuệ Nhân tạo</h3><div class='slide-code'>AI (Artificial Intelligence)<br>└── Machine Learning<br>&nbsp;&nbsp;&nbsp;&nbsp;└── Deep Learning<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── CNN (Thị giác)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── RNN (Chuỗi)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Transformer (GPT...)</div>" },
      { title:"Mạng Nơ-ron", content:"<h3>🧠 Neural Network</h3><div class='slide-code'>Input → [Hidden Layers] → Output<br><br>Mỗi neuron: y = ReLU(Wx + b)<br><br>Training:<br>1. Forward pass → tính output<br>2. Loss → đo sai số<br>3. Backprop → cập nhật W</div>" },
      { title:"Overfitting", content:"<h3>⚠️ Overfitting</h3><p>Mô hình học <b>quá khớp</b> với training data → kém trên dữ liệu mới.</p><p>Giải pháp: <b>Dropout, Regularization, More Data, Cross-validation</b></p>" }
    ]}
  ],
  datamngt: [
    { id:1, title:"SQL Fundamentals", icon:"🗄️", slides:[
      { title:"SQL là gì?", content:"<h3>🗄️ SQL</h3><p><b>Structured Query Language</b> — ngôn ngữ tiêu chuẩn để làm việc với cơ sở dữ liệu quan hệ.</p><p>Các hệ thống: MySQL, PostgreSQL, SQL Server, SQLite</p>" },
      { title:"CRUD Operations", content:"<h3>✏️ CRUD</h3><div class='slide-code'>-- Đọc<br>SELECT * FROM Users WHERE age > 18;<br><br>-- Thêm<br>INSERT INTO Users (name) VALUES ('An');<br><br>-- Sửa<br>UPDATE Users SET age = 26 WHERE id = 1;<br><br>-- Xóa<br>DELETE FROM Users WHERE id = 1;</div>" },
      { title:"JOIN Tables", content:"<h3>🔗 JOIN</h3><div class='slide-code'>-- Lấy tên KH và đơn hàng<br>SELECT u.name, o.total<br>FROM Users u<br>INNER JOIN Orders o<br>&nbsp;&nbsp;ON u.id = o.user_id<br>WHERE o.total > 100000;</div>" }
    ]}
  ],
  datamodel: [
    { id:1, title:"ERD & Data Modeling", icon:"📐", slides:[
      { title:"Data Modeling là gì?", content:"<h3>📐 Data Modeling</h3><p>Quá trình <b>thiết kế cấu trúc dữ liệu</b> — mối quan hệ giữa các đối tượng trong hệ thống.</p><p>3 mức: <b>Conceptual → Logical → Physical</b></p>" },
      { title:"ERD", content:"<h3>🔗 Entity Relationship</h3><div class='slide-code'>KHÁCH HÀNG (1) ──── (N) ĐƠN HÀNG<br>│                         │<br>id (PK)              id (PK)<br>ten                  kh_id (FK)<br>email                ngay_dat<br>                     tong_tien</div>" },
      { title:"Normalization", content:"<h3>🎯 Chuẩn hóa</h3><div class='slide-code'>1NF: Mỗi ô = 1 giá trị<br>2NF: Không phụ thuộc từng phần<br>3NF: Không phụ thuộc bắc cầu<br><br>→ Giảm dữ liệu dư thừa<br>→ Tăng tính toàn vẹn</div>" }
    ]}
  ],
  aicert: [
    { id:1, title:"MLOps & Production AI", icon:"🔬", slides:[
      { title:"MLOps Pipeline", content:"<h3>🔬 ML Pipeline</h3><div class='slide-code'>1. Data Collection<br>2. Data Preprocessing<br>3. Feature Engineering<br>4. Model Training<br>5. Evaluation (Accuracy, F1...)<br>6. Deployment (API/Docker)<br>7. Monitoring & Retraining</div>" },
      { title:"LLM & GenAI", content:"<h3>🚀 Large Language Models</h3><p><b>GPT-4, Gemini, Claude</b> — mô hình ngôn ngữ lớn huấn luyện trên hàng tỷ văn bản.</p><div class='slide-code'>Prompt Engineering:<br>System: \"Bạn là chuyên gia..\"<br>User: \"Giải thích X cho tôi\"<br>→ Output chất lượng cao</div>" },
      { title:"Deploy với Docker", content:"<h3>🐳 Docker Deployment</h3><div class='slide-code'>FROM python:3.10-slim<br>WORKDIR /app<br>COPY . .<br>RUN pip install -r requirements.txt<br>EXPOSE 8000<br>CMD [\"uvicorn\", \"app:app\"]<br><br># Build & Run<br>docker build -t ai-api .<br>docker run -p 8000:8000 ai-api</div>" }
    ]}
  ]
};
