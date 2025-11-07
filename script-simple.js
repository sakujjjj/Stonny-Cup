// 球員資料
const playersData = [
    {
        name: "張志豪",
        number: 1,
        role: "我是發球像砲彈，接球像牆壁、全場最穩的底線型球員。",
        quote: "我告訴你們「把你們最強的派出來，我趕時間。」",
        emoji: "🎾"
    },
    {
        name: "李美玲",
        number: 7,
        role: "我是熱身前都在假裝拉筋，其實在放空、網前殺球超狠的攻擊型選手。",
        quote: "我告訴你們「我一發球，你們連名字都想不起來。」",
        emoji: "⚡"
    },
    {
        name: "王大明",
        number: 15,
        role: "我是除了打球，什麼都慢三拍、週休五日的業餘好手。",
        quote: "我告訴你們「記得賽後對我鞠躬，這是基本禮貌。」",
        emoji: "🏆"
    },
    {
        name: "陳小華",
        number: 23,
        role: "我是熬夜追劇，早上照樣來打球、閉眼都能接球的天才型選手。",
        quote: "我告訴你們「就算我倒了，也要拖你們一個下來。」",
        emoji: "💪"
    },
    {
        name: "林雅婷",
        number: 8,
        role: "我是發球沒準，吃飯超準、超會煮補湯的球員家長。",
        quote: "我告訴你們「這場結束後你們會重新思考人生。」",
        emoji: "🔥"
    },
    {
        name: "黃俊傑",
        number: 42,
        role: "我是熱身前都在假裝拉筋，其實在放空、每球都要吼的激情型選手。",
        quote: "我告訴你們「就算你們贏不了，也要演得像樣點。」",
        emoji: "⭐"
    },
    {
        name: "吳佩珊",
        number: 11,
        role: "我是除了搶球，什麼都慢三拍、週休五日的悠閒派球員。",
        quote: "我告訴你們「把你們最強的派出來，我趕時間。」",
        emoji: "🌟"
    },
    {
        name: "劉建國",
        number: 99,
        role: "我是除了打球，其他時間都在補眠修煉、全場最會喊的啦啦隊成員。",
        quote: "我告訴你們「今天的比數，只寫得下我的名字。」",
        emoji: "💫"
    },
    {
        name: "鄭雅文",
        number: 33,
        role: "我是熱身前都在假裝拉筋，其實在放空、每場都差點上場的高年級板凳球員。",
        quote: "我告訴你們「我一發球，你們連名字都想不起來。」",
        emoji: "✨"
    },
    {
        name: "周明哲",
        number: 5,
        role: "我是除了打球，其他時間都在補眠修煉、週休五日的主攻手。",
        quote: "我告訴你們「就算我倒了，也要拖你們一個下來。」",
        emoji: "🎯"
    },
    {
        name: "蔡依林",
        number: 27,
        role: "我是發球沒準，吃飯超準、暗中觀察的報到人員。",
        quote: "我告訴你們「就算我倒了，也要拖你們一個下來。」",
        emoji: "🌈"
    },
    {
        name: "許志明",
        number: 18,
        role: "我是熱身前都在假裝拉筋，其實在放空、每場都差點上場的高年級板凳球員。",
        quote: "我告訴你們「我的吼聲會讓你們忘記怎麼接球。」",
        emoji: "⚡"
    }
];

// ==================== 導航選單功能 ====================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 切換選單
    if (navToggle) {
        navToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navMenu.classList.toggle('active');
        });
    }

    // 點擊連結後關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            navMenu.classList.remove('active');
            
            // 平滑滾動
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 點擊外部關閉選單
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });

    // 滾動時改變導航樣式
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.3)';
            navbar.style.background = 'rgba(45, 80, 22, 0.98)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            navbar.style.background = 'rgba(45, 80, 22, 0.95)';
        }
    });
}

// ==================== 視差滾動效果 (簡化版) ====================
function initParallax() {
    const parallaxBg = document.querySelector('.parallax-bg');
    if (!parallaxBg) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const sloganSection = document.querySelector('.slogan-section');
        if (sloganSection) {
            const sectionTop = sloganSection.offsetTop;
            const sectionHeight = sloganSection.offsetHeight;
            
            if (scrolled > sectionTop - window.innerHeight && scrolled < sectionTop + sectionHeight) {
                const yPos = (scrolled - sectionTop) * 0.5;
                parallaxBg.style.transform = `translateY(${yPos}px)`;
            }
        }
    });
}

// ==================== 生成球員卡片 ====================
function generatePlayerCards() {
    const playersGrid = document.getElementById('playersGrid');
    if (!playersGrid) return;
    
    playersData.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-card-3d';
        card.style.animationDelay = `${index * 0.1}s`;
        
        card.innerHTML = `
            <div class="player-card-inner">
                <div class="player-number-3d">${player.number}</div>
                <div class="player-avatar-3d">${player.emoji}</div>
                <div class="player-info-3d">
                    <h3 class="player-name-3d">${player.name}</h3>
                    <p class="player-role-3d">${player.role}</p>
                </div>
                <div class="player-quote-3d">${player.quote}</div>
                <div class="player-card-shine"></div>
            </div>
        `;
        
        playersGrid.appendChild(card);
        
        // 添加 3D 傾斜效果
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
            
            // 光澤跟隨
            const shine = card.querySelector('.player-card-shine');
            if (shine) {
                const xPercent = (x / rect.width) * 100;
                const yPercent = (y / rect.height) * 100;
                shine.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, rgba(255, 235, 59, 0.2) 0%, transparent 50%)`;
                shine.style.opacity = '1';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            const shine = card.querySelector('.player-card-shine');
            if (shine) {
                shine.style.opacity = '0';
            }
        });
    });
}

// ==================== 3D 傾斜效果 (精神標語卡片) ====================
function initSpiritTilt() {
    const cards = document.querySelectorAll('.spirit-tilt-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 15;
            const rotateY = (centerX - x) / 15;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });
}

// ==================== 倒數計時功能 ====================
function updateCountdown() {
    const targetDate = new Date('2025-12-13T10:00:00').getTime();
    
    function update() {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            document.getElementById('days').textContent = '0';
            document.getElementById('hours').textContent = '0';
            document.getElementById('minutes').textContent = '0';
            document.getElementById('seconds').textContent = '0';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = days;
        document.getElementById('hours').textContent = hours;
        document.getElementById('minutes').textContent = minutes;
        document.getElementById('seconds').textContent = seconds;
    }
    
    update();
    setInterval(update, 1000);
}

// ==================== Q&A 折疊功能 ====================
function initQA() {
    const qaItems = document.querySelectorAll('.qa-item');
    
    qaItems.forEach(item => {
        const question = item.querySelector('.qa-question');
        
        question.addEventListener('click', () => {
            // 關閉其他已開啟的項目
            qaItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // 切換當前項目
            item.classList.toggle('active');
        });
    });
}

// ==================== 報名按鈕功能 ====================
function initRegistration() {
    const registerBtn = document.getElementById('registerBtn');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            alert('報名功能即將開放！\n請密切關注我們的最新消息。');
        });
    }
}

// ==================== 滾動動畫效果 (簡化版) ====================
function initScrollAnimation() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // 為各個區塊添加動畫
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        if (index > 0) { // 跳過第一個 section
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        }
    });
    
    // Moments 卡片動畫
    const momentItems = document.querySelectorAll('.moment-item');
    momentItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
}

// ==================== 3D 卡片懸浮效果 ====================
function init3DCardEffects() {
    const cards = document.querySelectorAll('.glass-info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-20px) scale(1.05)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ==================== Moments 卡片懸浮效果 ====================
function initMomentsEffects() {
    const momentItems = document.querySelectorAll('.moment-item');
    
    momentItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const overlay = item.querySelector('.moment-overlay');
            const content = item.querySelector('.moment-content');
            if (overlay) overlay.style.opacity = '1';
            if (content) content.style.transform = 'translateY(0)';
        });
        
        item.addEventListener('mouseleave', () => {
            const overlay = item.querySelector('.moment-overlay');
            const content = item.querySelector('.moment-content');
            if (overlay) overlay.style.opacity = '0.6';
            if (content) content.style.transform = 'translateY(10px)';
        });
    });
}

// ==================== 頁面載入完成後初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化導航
    initNavigation();
    
    // 生成球員卡片
    generatePlayerCards();
    
    // 初始化視差滾動
    initParallax();
    
    // 初始化精神標語 Tilt 效果
    initSpiritTilt();
    
    // 倒數計時
    updateCountdown();
    
    // Q&A
    initQA();
    
    // 報名按鈕
    initRegistration();
    
    // 滾動動畫
    initScrollAnimation();
    
    // 3D 卡片效果
    init3DCardEffects();
    
    // Moments 效果
    initMomentsEffects();
    
    // 添加頁面載入動畫
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ==================== 視窗大小改變時的處理 ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 重新計算視差效果
        initParallax();
    }, 250);
});

