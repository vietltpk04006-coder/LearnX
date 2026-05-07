// ===== UTILITY =====
function showToast(message, type) {
    type = type || 'success';
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.className = 'toast show';
    toast.style.background = type === 'success' ? '#10b981' : '#ef4444';
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    toast.innerHTML = '<i class="fas ' + icon + '"></i> <span>' + message + '</span>';
    setTimeout(function() { toast.classList.remove('show'); }, 3500);
}

// ===== AUTH =====
function openAuthModal(tab) {
    const m = document.getElementById('authModal');
    if (!m) return;
    m.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab || 'login');
}

function closeAuthModal() {
    const m = document.getElementById('authModal');
    if (!m) return;
    m.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tabId) {
    document.querySelectorAll('.auth-tab').forEach(function(t) { t.classList.remove('active'); });
    document.querySelectorAll('.auth-form').forEach(function(f) { f.classList.remove('active'); });
    const tab = document.querySelector('.auth-tab[data-tab="' + tabId + '"]');
    const form = document.getElementById(tabId + 'Form');
    if (tab) tab.classList.add('active');
    if (form) form.classList.add('active');
    const mt = document.getElementById('modalTitle');
    if (mt) mt.textContent = tabId === 'login' ? 'Đăng nhập' : 'Đăng ký tài khoản';
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    setTimeout(function() {
        closeAuthModal();
        showToast('Đăng nhập thành công! Xin chào ' + email.split('@')[0]);
        const authDiv = document.querySelector('.auth-buttons');
        if (authDiv) {
            authDiv.innerHTML = '<div style="display:flex;align-items:center;gap:10px;"><div style="width:36px;height:36px;background:var(--primary-color);border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold;color:white;">' + email.charAt(0).toUpperCase() + '</div></div>';
        }
    }, 600);
}

function handleSignup(e) {
    e.preventDefault();
    const name = document.getElementById('signupName').value;
    setTimeout(function() {
        closeAuthModal();
        showToast('Đăng ký thành công! Chào mừng ' + name + ' đến với LearnX.');
    }, 600);
}

// ===== NAVBAR SCROLL =====
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(15, 23, 42, 0.97)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.8)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ===== AUTH MODAL =====
const authModal   = document.getElementById('authModal');
const loginBtn    = document.getElementById('loginBtn');
const signupBtn   = document.getElementById('signupBtn');
const closeModal  = document.getElementById('closeModal');
const authTabs    = document.querySelectorAll('.auth-tab');
const authForms   = document.querySelectorAll('.auth-form');
const modalTitle  = document.getElementById('modalTitle');

function openAuthModal(tab) {
    if (!authModal) return;
    authModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    switchAuthTab(tab || 'login');
}
window.openAuthModal = openAuthModal;

function closeAuthModal() {
    if (!authModal) return;
    authModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function switchAuthTab(tabId) {
    authTabs.forEach(t => t.classList.remove('active'));
    authForms.forEach(f => f.classList.remove('active'));
    const tab = document.querySelector(`.auth-tab[data-tab="${tabId}"]`);
    const form = document.getElementById(`${tabId}Form`);
    if (tab) tab.classList.add('active');
    if (form) form.classList.add('active');
    if (modalTitle) modalTitle.textContent = tabId === 'login' ? 'Đăng nhập' : 'Đăng ký tài khoản';
}

if (loginBtn)   loginBtn.addEventListener('click', () => openAuthModal('login'));
if (signupBtn)  signupBtn.addEventListener('click', () => openAuthModal('signup'));
if (closeModal) closeModal.addEventListener('click', closeAuthModal);
if (authModal)  authModal.addEventListener('click', e => { if (e.target === authModal) closeAuthModal(); });

authTabs.forEach(tab => tab.addEventListener('click', () => switchAuthTab(tab.dataset.tab)));

// Login form submit
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        setTimeout(() => {
            closeAuthModal();
            showToast(`Đăng nhập thành công! Xin chào ${email.split('@')[0]}`);
            const authDiv = document.querySelector('.auth-buttons');
            if (authDiv) {
                authDiv.innerHTML = `
                  <div style="display:flex;align-items:center;gap:10px;cursor:pointer;">
                    <div style="width:35px;height:35px;background:var(--primary-color);border-radius:50%;display:flex;justify-content:center;align-items:center;font-weight:bold;color:white;">
                      ${email.charAt(0).toUpperCase()}
                    </div>
                  </div>`;
            }
        }, 600);
    });
}

// Signup form submit
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('signupName').value;
        setTimeout(() => {
            closeAuthModal();
            showToast(`Đăng ký thành công! Chào mừng ${name} đến với LearnX.`);
        }, 600);
    });
}

// ===== COURSE FILTER =====
const categoryBtns = document.querySelectorAll('.category-btn');
const courseCards  = document.querySelectorAll('.course-card');
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        courseCards.forEach(card => {
            const match = filter === 'all' || card.dataset.level === filter;
            card.style.transition = 'opacity 0.3s, transform 0.3s';
            if (match) {
                card.style.display = 'flex';
                setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'scale(1)'; }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});
// ===== RECENT COURSES SECTION =====
const COURSE_ICONS = { python:'🐍', webdev:'🌐', react:'⚛️', ai:'🤖', business:'💼', datamngt:'🗄️', datamodel:'📐', aicert:'🔬' };

function renderRecentSection() {
    const recent = JSON.parse(localStorage.getItem('lx_recent') || '[]');
    const section = document.getElementById('recentSection');
    const grid = document.getElementById('recentGrid');
    if (!section || !grid) return;
    if (!recent.length) { section.classList.remove('visible'); return; }
    section.classList.add('visible');
    grid.innerHTML = recent.map(id => {
        const data = coursesData[id];
        if (!data) return '';
        const pct = calcPct(id);
        return `<div class="recent-card" onclick="openCourseModal('${id}')">
            <div class="recent-card-icon">${COURSE_ICONS[id] || '📚'}</div>
            <div class="recent-card-title">${data.title}</div>
            <div class="recent-pct-row">
                <div class="recent-pct-bar"><div class="recent-pct-fill" style="width:${pct}%"></div></div>
                <span>${pct}%</span>
            </div>
            <button class="recent-continue-btn" onclick="event.stopPropagation();openLesson('${id}',0)">
                <i class="fas fa-play-circle"></i> Tiếp tục học
            </button>
        </div>`;
    }).join('');
}
window.renderRecentSection = renderRecentSection;
// Init on load
document.addEventListener('DOMContentLoaded', renderRecentSection);

// ===== CATEGORY FILTER BY ATTRIBUTE =====
function filterByAttr(attr, val) {
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.querySelectorAll('.course-card').forEach(card => {
        const data = card.dataset[attr] || card.dataset.level;
        const match = !val || data === val;
        card.style.transition = 'opacity 0.3s, transform 0.3s';
        if (match) {
            card.style.display = 'flex';
            setTimeout(() => { card.style.opacity='1'; card.style.transform='scale(1)'; }, 10);
        } else {
            card.style.opacity = '0'; card.style.transform = 'scale(0.95)';
            setTimeout(() => { card.style.display='none'; }, 280);
        }
    });
}
window.filterByAttr = filterByAttr;

// ===== PROGRESS HELPERS =====


function getProgress(courseId) {
    try { return JSON.parse(localStorage.getItem('lx_progress_' + courseId) || '{}'); } catch(e) { return {}; }
}
function saveProgress(courseId, prog) {
    localStorage.setItem('lx_progress_' + courseId, JSON.stringify(prog));
}
function calcPct(courseId) {
    const prog = getProgress(courseId);
    const lessons = (typeof lessonsData !== 'undefined' && lessonsData[courseId]) ? lessonsData[courseId] : [];
    const totalSteps = lessons.length + 1; // lessons + quiz
    let done = 0;
    lessons.forEach(l => { if (prog['lesson_' + l.id]) done++; });
    if (prog.quiz_done) done++;
    return totalSteps > 0 ? Math.round(done / totalSteps * 100) : 0;
}

// ===== COURSE DETAIL MODAL =====
const courseModal       = document.getElementById('courseModal');
const closeCourseModal  = document.getElementById('closeCourseModal');
const courseDetailTitle = document.getElementById('courseDetailTitle');
const courseDetailDesc  = document.getElementById('courseDetailDesc');
const courseModulesList = document.getElementById('courseModulesList');

let _activeCourseId = '';

function openCourseModal(courseId) {
    if (!courseModal || typeof coursesData === 'undefined') return;
    const data = coursesData[courseId];
    if (!data) { showToast('Khóa học đang cập nhật!', 'error'); return; }
    _activeCourseId = courseId;

    courseDetailTitle.textContent = data.title;

    let benefitsHtml = '';
    if (data.benefits && data.benefits.length) {
        benefitsHtml = `<div style="background:rgba(16,185,129,0.1);border-left:4px solid #10b981;padding:15px;border-radius:6px;margin-top:15px;">
            <h4 style="color:#10b981;margin-bottom:10px;"><i class="fas fa-check-circle" style="margin-right:8px;"></i>Bạn sẽ học được gì?</h4>
            <ul style="list-style:none;padding-left:0;">
              ${data.benefits.map(b => `<li style="margin-bottom:8px;"><i class="fas fa-check" style="color:#10b981;margin-right:8px;"></i>${b}</li>`).join('')}
            </ul></div>`;
    }
    courseDetailDesc.innerHTML = `<p style="line-height:1.8;">${data.description}</p>${benefitsHtml}`;

    renderCourseModules(courseId);
    courseModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
window.openCourseModal = openCourseModal;

function renderCourseModules(courseId) {
    const data = coursesData[courseId];
    const lessons = (typeof lessonsData !== 'undefined' && lessonsData[courseId]) || [];
    const prog = getProgress(courseId);
    const pct = calcPct(courseId);

    // Progress section
    const stepsHtml = lessons.map(l => {
        const done = prog['lesson_' + l.id];
        return `<span class="progress-step ${done ? 'done' : ''}">
            ${done ? '<i class="fas fa-check"></i>' : '<i class="fas fa-book"></i>'} ${l.title}
        </span>`;
    }).join('') + `<span class="progress-step ${prog.quiz_done ? 'quiz-done' : ''}">
        ${prog.quiz_done ? '<i class="fas fa-trophy"></i>' : '<i class="fas fa-pen"></i>'} Bài Quiz
    </span>`;

    const progressHtml = `<div class="progress-section">
        <div class="progress-header">
            <span><i class="fas fa-chart-line" style="margin-right:6px;color:var(--primary-color);"></i>Tiến độ học tập</span>
            <span class="progress-pct">${pct}%</span>
        </div>
        <div class="progress-bar-bg"><div class="progress-bar-fill" style="width:${pct}%"></div></div>
        <div class="progress-steps">${stepsHtml}</div>
        ${pct >= 100 ? `<div style="margin-top:14px;padding:12px;background:rgba(16,185,129,0.2);border-radius:8px;text-align:center;color:#10b981;font-weight:700;">
            🎉 Chúc mừng! Bạn đã hoàn thành khóa học. <a href="#" onclick="downloadCert('${courseId}')" style="color:#10b981;text-decoration:underline;">Nhận chứng chỉ</a>
        </div>` : ''}
    </div>`;

    // Modules list with Lesson + Quiz buttons
    const modulesHtml = data.modules.map((mod, idx) => `
        <div class="module-item">
            <div class="module-info">
                <div class="module-icon"><i class="fas fa-book-open"></i></div>
                <div class="module-text">
                    <h4>${mod.title}</h4>
                    <p>Chương ${idx+1} &bull; ${mod.duration} &bull; ${lessons.length} bài giảng &bull; ${mod.questions.length} câu Quiz</p>
                </div>
            </div>
            <div class="module-actions-row">
                ${lessons.length > 0 ? `<button class="btn-lesson ${Object.keys(prog).some(k=>k.startsWith('lesson_')) ? 'done' : ''}" onclick="openLesson('${courseId}', 0)">
                    <i class="fas fa-play-circle"></i> ${Object.keys(prog).some(k=>k.startsWith('lesson_')) ? 'Xem lại bài' : 'Bắt đầu học'}
                </button>` : ''}
                <button class="btn-primary" onclick="startQuiz('${courseId}', ${idx})" style="padding:8px 16px;font-size:0.85rem;">
                    <i class="fas fa-pen-to-square"></i> Làm Quiz
                </button>
            </div>
        </div>`).join('');

    courseModulesList.innerHTML = progressHtml + modulesHtml;
}
window.renderCourseModules = renderCourseModules;

function closeCourse() {
    if (courseModal) { courseModal.classList.remove('active'); document.body.style.overflow = 'auto'; }
}
if (closeCourseModal) closeCourseModal.addEventListener('click', closeCourse);
if (courseModal) courseModal.addEventListener('click', e => { if (e.target === courseModal) closeCourse(); });

// Wire up all "Học & Quiz" buttons
document.querySelectorAll('.btn-enroll').forEach(btn => {
    btn.addEventListener('click', () => openCourseModal(btn.dataset.course));
});

// ===== LESSON VIEWER =====
let _lessonCourseId = '';
let _lessonIdx = 0;

function openLesson(courseId, idx) {
    const lessons = (typeof lessonsData !== 'undefined' && lessonsData[courseId]) || [];
    if (!lessons.length) { showToast('Bài giảng đang cập nhật!'); return; }
    _lessonCourseId = courseId;
    _lessonIdx = idx;

    const lm = document.getElementById('lessonModal');
    if (lm) lm.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderLesson();
}
window.openLesson = openLesson;

function renderLesson() {
    const lessons = (typeof lessonsData !== 'undefined' && lessonsData[_lessonCourseId]) || [];
    const lesson = lessons[_lessonIdx];
    if (!lesson) return;

    document.getElementById('lessonIcon').textContent = lesson.icon;
    document.getElementById('lessonTitle').textContent = lesson.title;
    document.getElementById('lessonProgress').innerHTML = `<i class="fas fa-play-circle" style="margin-right:5px;"></i>Bài ${_lessonIdx+1} / ${lessons.length}`;
    document.getElementById('lessonCourseLabel').innerHTML = `<i class="fas fa-graduation-cap" style="margin-right:5px;"></i>${coursesData[_lessonCourseId]?.title || ''}`;

    const slides = lesson.slides || [];
    let slideIdx = 0;
    let playing = false;
    let timer = null;
    let currentUtterance = null; // Track current speech
    const SLIDE_DURATION = 10000; // Increased to 10s to give time for speech

    function cleanTextForSpeech(html) {
        // Remove HTML tags and code blocks to read just the text
        const tmp = document.createElement('div');
        tmp.innerHTML = html.replace(/<div class="slide-code">[\s\S]*?<\/div>/g, ' (Đoạn mã ví dụ trên màn hình) ');
        return tmp.textContent || tmp.innerText || '';
    }

    function speakSlideText(text) {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel(); // Stop previous speech
        if (!playing) return; // Only speak if auto-playing
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'vi-VN'; // Vietnamese AI voice
        utterance.rate = 1.0;     // Normal speed
        utterance.pitch = 1.0;
        currentUtterance = utterance;
        window.speechSynthesis.speak(utterance);
    }

    function renderSlide() {
        const s = slides[slideIdx];
        if (!s) return;
        const pct = Math.round((slideIdx + 1) / slides.length * 100);
        document.getElementById('slideContent').innerHTML = s.content;
        document.getElementById('slideTitle').textContent = s.title;
        document.getElementById('slideCounter').textContent = `${slideIdx+1} / ${slides.length}`;
        document.getElementById('slideProgressFill').style.width = pct + '%';
        document.getElementById('slidePrev').disabled = slideIdx === 0;
        const nextBtn = document.getElementById('slideNext');
        if (nextBtn) nextBtn.textContent = slideIdx === slides.length - 1 ? '✅ Xong' : '▶ Tiếp';

        // Trigger AI Voice if playing
        if (playing) {
            const textToSpeak = `${s.title}. ${cleanTextForSpeech(s.content)}`;
            speakSlideText(textToSpeak);
        }
    }

    function startTimer() {
        clearInterval(timer);
        timer = setInterval(() => {
            if (slideIdx < slides.length - 1) { slideIdx++; renderSlide(); }
            else { 
                clearInterval(timer); 
                playing = false; 
                updatePlayBtn(); 
                if(window.speechSynthesis) window.speechSynthesis.cancel();
            }
        }, SLIDE_DURATION);
    }

    function updatePlayBtn() {
        const pb = document.getElementById('slidePlayBtn');
        if (pb) pb.innerHTML = playing ? '<i class="fas fa-pause"></i> Tạm dừng AI' : '<i class="fas fa-play"></i> Phát bằng AI';
        if (!playing && window.speechSynthesis) window.speechSynthesis.cancel();
    }

    window._slideCleanup = () => {
        clearInterval(timer);
        if (window.speechSynthesis) window.speechSynthesis.cancel();
    };

    document.getElementById('lessonContent').innerHTML = `
        <div class="slide-player" style="position:relative;">
            <div id="aiVoiceIndicator" style="display:none; position:absolute; top:10px; left:20px; background:rgba(16,185,129,0.2); border:1px solid #10b981; color:#10b981; padding:4px 10px; border-radius:20px; font-size:0.75rem; z-index:10; font-weight:bold;">
                <i class="fas fa-robot"></i> Giọng AI đang đọc...
            </div>
            <div class="slide-topbar">
                <span id="slideTitle" class="slide-title-bar" style="margin-left: 120px;"></span>
                <span id="slideCounter" class="slide-counter"></span>
            </div>
            <div class="slide-progress-bar"><div class="slide-progress-fill" id="slideProgressFill"></div></div>
            <div class="slide-body" id="slideContent"></div>
            <div class="slide-controls">
                <button class="slide-btn" id="slidePrev" onclick="window._slidePrev()">◀ Trước</button>
                <button class="slide-btn primary" id="slidePlayBtn" onclick="window._slidePlay()"><i class="fas fa-play"></i> Phát bằng AI</button>
                <button class="slide-btn" id="slideNext" onclick="window._slideNext()">▶ Tiếp</button>
            </div>
        </div>`;

    window._slidePrev = () => { if (slideIdx > 0) { slideIdx--; renderSlide(); } };
    window._slideNext = () => {
        if (slideIdx < slides.length - 1) { slideIdx++; renderSlide(); }
        else {
            clearInterval(timer);
            if(window.speechSynthesis) window.speechSynthesis.cancel();
            const prog = getProgress(_lessonCourseId);
            prog['lesson_' + lesson.id] = true;
            saveProgress(_lessonCourseId, prog);
        }
    };
    window._slidePlay = () => {
        playing = !playing;
        const indicator = document.getElementById('aiVoiceIndicator');
        if (playing) {
            indicator.style.display = 'block';
            startTimer(); 
            // Read first slide immediately on play
            const s = slides[slideIdx];
            if(s) speakSlideText(`${s.title}. ${cleanTextForSpeech(s.content)}`);
        } else {
            indicator.style.display = 'none';
            clearInterval(timer);
        }
        updatePlayBtn();
    };

    renderSlide();

    const prevBtn = document.getElementById('prevLessonBtn');
    const nextBtn = document.getElementById('nextLessonBtn');
    if (prevBtn) { prevBtn.disabled = (_lessonIdx === 0); prevBtn.style.opacity = _lessonIdx === 0 ? '0.4' : '1'; }
    if (nextBtn) {
        nextBtn.innerHTML = _lessonIdx === lessons.length - 1
            ? '<i class="fas fa-check"></i> Hoàn thành & Về khóa học'
            : 'Bài tiếp theo <i class="fas fa-chevron-right"></i>';
    }

    const prog = getProgress(_lessonCourseId);
    prog['lesson_' + lesson.id] = true;
    saveProgress(_lessonCourseId, prog);
    trackRecentCourse(_lessonCourseId);
}

function trackRecentCourse(courseId) {
    let recent = JSON.parse(localStorage.getItem('lx_recent') || '[]');
    recent = [courseId, ...recent.filter(id => id !== courseId)].slice(0, 4);
    localStorage.setItem('lx_recent', JSON.stringify(recent));
    renderRecentSection();
}

function navLesson(dir) {
    const lessons = (typeof lessonsData !== 'undefined' && lessonsData[_lessonCourseId]) || [];
    const newIdx = _lessonIdx + dir;
    if (newIdx < 0) return;
    if (newIdx >= lessons.length) {
        closeLesson();
        return;
    }
    _lessonIdx = newIdx;
    renderLesson();
}
window.navLesson = navLesson;

function closeLesson() {
    const lm = document.getElementById('lessonModal');
    if (lm) lm.classList.remove('active');
    document.body.style.overflow = 'auto';
    // Refresh course modal if open
    if (_activeCourseId && courseModal && courseModal.classList.contains('active')) {
        renderCourseModules(_activeCourseId);
    }
}
window.closeLesson = closeLesson;

function downloadCert(courseId) {
    showToast('🎓 Chứng chỉ của bạn đã được cấp! (Tính năng in sẽ sớm ra mắt)');
}
window.downloadCert = downloadCert;

// ===== QUIZ =====
const quizModal       = document.getElementById('quizModal');
const closeQuizModal  = document.getElementById('closeQuizModal');
const quizContainer   = document.getElementById('quizContainer');
const quizResult      = document.getElementById('quizResult');
const scoreDisplay    = document.getElementById('scoreDisplay');
const scoreMessage    = document.getElementById('scoreMessage');
const retryQuizBtn    = document.getElementById('retryQuizBtn');

let _questions = [], _qIdx = 0, _answers = [], _quizCourseId = '';

function startQuiz(courseId, moduleIdx) {
    if (typeof coursesData === 'undefined') return;
    _quizCourseId = courseId;
    const mod = coursesData[courseId].modules[moduleIdx];
    _questions = mod.questions;
    _qIdx = 0;
    _answers = new Array(_questions.length).fill(null);
    if (courseModal) courseModal.classList.remove('active');
    if (quizModal)  quizModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    renderQuestion();
}
window.startQuiz = startQuiz;

function renderQuestion() {
    if (!quizContainer) return;
    quizContainer.style.display = 'block';
    if (quizResult) quizResult.style.display = 'none';

    const q = _questions[_qIdx];
    quizContainer.innerHTML = `
      <div style="color:var(--text-muted);font-weight:600;margin-bottom:12px;">
        Câu hỏi ${_qIdx + 1} / ${_questions.length}
      </div>
      <div style="background:rgba(79,70,229,0.15);border-radius:6px;padding:4px 14px;display:inline-block;font-size:0.8rem;margin-bottom:14px;">
        ${_qIdx + 1 <= 5 ? '⭐ Cơ bản' : _qIdx + 1 <= 9 ? '🔥 Trung cấp' : '💎 Nâng cao'}
      </div>
      <div class="quiz-question">${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <div class="quiz-option ${_answers[_qIdx] === i ? 'selected' : ''}" onclick="selectOption(${i})" data-idx="${i}">${opt}</div>
        `).join('')}
      </div>
      <div style="display:flex;gap:15px;margin-top:20px;">
        <button class="btn-secondary full-width" onclick="prevQuestion()" ${_qIdx === 0 ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>← Quay lại</button>
        <button class="btn-primary full-width" id="nextBtn" onclick="nextQuestion()" ${_answers[_qIdx] === null ? 'disabled style="opacity:0.4;cursor:not-allowed;"' : ''}>
          ${_qIdx === _questions.length - 1 ? '✅ Nộp bài' : 'Tiếp theo →'}
        </button>
      </div>`;
}

function selectOption(idx) {
    _answers[_qIdx] = idx;
    document.querySelectorAll('.quiz-option').forEach((el, i) => {
        el.classList.toggle('selected', i === idx);
    });
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) { nextBtn.disabled = false; nextBtn.style.opacity = '1'; nextBtn.style.cursor = 'pointer'; }
}
window.selectOption = selectOption;

function prevQuestion() {
    if (_qIdx > 0) { _qIdx--; renderQuestion(); }
}
window.prevQuestion = prevQuestion;

function nextQuestion() {
    if (_qIdx < _questions.length - 1) { _qIdx++; renderQuestion(); }
    else finishQuiz();
}
window.nextQuestion = nextQuestion;

function finishQuiz() {
    let score = 0;
    _questions.forEach((q, i) => { if (_answers[i] === q.a) score++; });
    const pct = Math.round(score / _questions.length * 100);

    if (quizContainer) quizContainer.style.display = 'none';
    if (quizResult) quizResult.style.display = 'block';
    if (scoreDisplay) {
        scoreDisplay.textContent = `${score}/${_questions.length}`;
        scoreDisplay.style.color = pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444';
    }
    if (scoreMessage) {
        if (pct >= 80) scoreMessage.innerHTML = `🎉 Xuất sắc! Bạn đạt <b>${pct}%</b>. Bạn đã nắm vững kiến thức!`;
        else if (pct >= 50) scoreMessage.innerHTML = `👍 Tốt lắm! Bạn đạt <b>${pct}%</b>. Hãy ôn thêm một chút!`;
        else scoreMessage.innerHTML = `💪 Bạn đạt <b>${pct}%</b>. Đừng nản, xem lại bài và thử lại nhé!`;
    }

    // Save progress if passed (>=50%)
    if (_quizCourseId && pct >= 50) {
        const prog = getProgress(_quizCourseId);
        prog.quiz_done = true;
        prog.quiz_score = pct;
        saveProgress(_quizCourseId, prog);
    }
}

function closeQuiz() {
    if (quizModal) { quizModal.classList.remove('active'); document.body.style.overflow = 'auto'; }
}
if (closeQuizModal) closeQuizModal.addEventListener('click', closeQuiz);
if (quizModal) quizModal.addEventListener('click', e => { if (e.target === quizModal) closeQuiz(); });
function retryQuiz() { _qIdx = 0; _answers = new Array(_questions.length).fill(null); renderQuestion(); }

if (retryQuizBtn) retryQuizBtn.addEventListener('click', retryQuiz);

// ===== GEMINI AI CHATBOT =====
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbotWindow = document.getElementById('chatbotWindow');
const chatInput     = document.getElementById('chatInput');
const chatMessages  = document.getElementById('chatbotMessages');

let GEMINI_KEY = localStorage.getItem('lx_gemini_key') || '';
let chatHistory = [];

function addMsg(html, role, isLoading) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.className = `message ${role}`;
    if (isLoading) div.id = 'chatLoadingMsg';
    div.innerHTML = `<div class="message-content">${html}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

async function callGemini(userText) {
    if (!GEMINI_KEY) {
        const key = prompt('🔑 Nhập Google Gemini API Key của bạn (lấy miễn phí tại aistudio.google.com):');
        if (!key) return null;
        GEMINI_KEY = key.trim();
        localStorage.setItem('lx_gemini_key', GEMINI_KEY);
    }

    chatHistory.push({ role: 'user', parts: [{ text: userText }] });

    const systemCtx = 'Bạn là trợ lý AI thông minh của nền tảng học tập LearnX. Hãy trả lời bằng tiếng Việt, ngắn gọn, chính xác và hữu ích. LearnX có 8 khóa học miễn phí: Python, HTML/CSS/JS, ReactJS, AI/Deep Learning, Kinh doanh, Quản trị CSDL, Data Modeling, Chứng chỉ AI Engineer. Khi cần, dùng emoji và markdown đơn giản để dễ đọc.';

    const payload = {
        system_instruction: { parts: [{ text: systemCtx }] },
        contents: chatHistory,
        generationConfig: { temperature: 0.8, maxOutputTokens: 1024 }
    };

    const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_KEY}`,
        { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) }
    );

    if (!res.ok) {
        const err = await res.json();
        if (res.status === 400 || res.status === 403) {
            GEMINI_KEY = '';
            localStorage.removeItem('lx_gemini_key');
            throw new Error('API Key không hợp lệ. Vui lòng thử lại.');
        }
        throw new Error(err?.error?.message || 'Lỗi kết nối Gemini');
    }

    const data = await res.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'Xin lỗi, mình không hiểu câu hỏi này.';
    chatHistory.push({ role: 'model', parts: [{ text: reply }] });
    return reply;
}

async function handleSend() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    chatInput.value = '';

    const loadingEl = addMsg('<i class="fas fa-circle-notch fa-spin"></i> AI đang suy nghĩ...', 'bot', true);

    try {
        const reply = await callGemini(text);
        loadingEl.remove();
        // Convert simple markdown-like formatting
        const formatted = reply
            .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
            .replace(/\*(.*?)\*/g, '<i>$1</i>')
            .replace(/`(.*?)`/g, '<code style="background:rgba(255,255,255,0.1);padding:1px 5px;border-radius:3px;">$1</code>')
            .replace(/\n/g, '<br>');
        addMsg(formatted, 'bot');
    } catch (err) {
        loadingEl.remove();
        addMsg(`⚠️ ${err.message || 'Kết nối thất bại. Kiểm tra API Key và thử lại!'}`, 'bot');
    }
}
window.handleSend = handleSend;

if (chatInput) {
    chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(); });
}


if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        if (chatbotWindow) chatbotWindow.classList.add('open');
        chatbotToggle.style.display = 'none';
    });
}
if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        if (chatbotWindow) chatbotWindow.classList.remove('open');
        if (chatbotToggle) chatbotToggle.style.display = 'flex';
    });
}

function addMsg(html, role) {
    if (!chatMessages) return;
    const div = document.createElement('div');
    div.className = `message ${role}`;
    div.innerHTML = `<div class="message-content">${html}</div>`;
    chatMessages.appendChild(div);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    return div;
}

async function handleSend() {
    if (!chatInput) return;
    const text = chatInput.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    chatInput.value = '';

    const loading = addMsg('<i class="fas fa-circle-notch fa-spin"></i> Đang tìm kiếm...', 'bot');
    try {
        const lower = text.toLowerCase();
        if (/chào|xin chào|hello|hi/.test(lower)) {
            loading.remove();
            addMsg('Xin chào! Mình là AI của LearnX 🤖. Hỏi mình bất cứ điều gì về công nghệ, kinh doanh, dữ liệu... Mình sẽ tra cứu và giải đáp ngay!', 'bot');
            return;
        }
        if (/khóa học|quiz|chứng chỉ|học|đăng ký/.test(lower)) {
            loading.remove();
            addMsg('LearnX có <b>8 khóa học miễn phí</b> gồm: Python, Web Dev, ReactJS, AI/Deep Learning, Kinh doanh, Quản trị CSDL, Data Modeling, và Chứng chỉ AI Engineer. Bạn nhấn nút <b>"Học & Quiz"</b> ở bất kỳ khóa học nào để bắt đầu nhé!', 'bot');
            return;
        }
        const res  = await fetch(`https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(text)}&utf8=&format=json&origin=*`);
        const data = await res.json();
        loading.remove();
        if (data.query?.search?.length) {
            const r = data.query.search[0];
            const snippet = r.snippet.replace(/<[^>]*>/g, '');
            addMsg(`<b>${r.title}</b>: ${snippet}...<br><a href="https://vi.wikipedia.org/wiki/${encodeURIComponent(r.title)}" target="_blank" style="color:#0ea5e9;font-size:0.85rem;">📖 Đọc thêm trên Wikipedia</a>`, 'bot');
        } else {
            addMsg('Xin lỗi mình chưa tìm thấy thông tin về chủ đề này. Bạn thử hỏi cụ thể hơn nhé!', 'bot');
        }
    } catch {
        if (loading) loading.remove();
        addMsg('Oops! Kết nối bị gián đoạn. Vui lòng thử lại sau 🙏', 'bot');
    }
}

if (sendChatBtn) sendChatBtn.addEventListener('click', handleSend);
if (chatInput) chatInput.addEventListener('keypress', e => { if (e.key === 'Enter') handleSend(); });
