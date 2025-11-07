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

// ==================== 初始化 AOS 動畫 ====================
function initAOS() {
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: false,
        mirror: true,
        offset: 100
    });
}

// ==================== 導航選單功能 ====================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 切換選單
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // 點擊連結後關閉選單
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
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

// ==================== 視差滾動效果 ====================
function initParallax() {
    gsap.registerPlugin(ScrollTrigger);

    // 標語區視差背景
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        gsap.to(parallaxBg, {
            y: () => window.innerHeight * 0.5,
            ease: "none",
            scrollTrigger: {
                trigger: ".slogan-section",
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });
    }

    // 玻璃卡片動畫
    const glassCard = document.querySelector('.glass-card');
    if (glassCard) {
        gsap.from(glassCard, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: glassCard,
                start: "top 80%",
                end: "top 50%",
                scrub: 1
            }
        });
    }
}

// ==================== 生成 3D 傾斜球員卡片 ====================
function generatePlayerCards() {
    const playersGrid = document.getElementById('playersGrid');
    
    playersData.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-card-3d';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', index * 50);
        card.setAttribute('data-tilt', '');
        card.setAttribute('data-tilt-max', '10');
        card.setAttribute('data-tilt-speed', '400');
        card.setAttribute('data-tilt-perspective', '1000');
        card.setAttribute('data-tilt-glare', 'true');
        card.setAttribute('data-tilt-max-glare', '0.3');
        
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
        
        // 添加光澤跟隨效果
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            card.style.setProperty('--mouse-x', `${x}%`);
            card.style.setProperty('--mouse-y', `${y}%`);
        });
    });
    
    // 初始化 Vanilla Tilt
    if (typeof VanillaTilt !== 'undefined') {
        VanillaTilt.init(document.querySelectorAll('.player-card-3d'));
    }
}

// ==================== 數字動畫計數 ====================
function animateNumbers() {
    const numbers = document.querySelectorAll('.animated-number');
    
    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        const duration = 2000; // 2秒
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        
        const updateNumber = () => {
            current += increment;
            if (current < target) {
                number.textContent = Math.floor(current);
                requestAnimationFrame(updateNumber);
            } else {
                number.textContent = target;
            }
        };
        
        // 使用 Intersection Observer 觸發動畫
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateNumber();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(number);
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
        
        // 使用 GSAP 動畫更新數字
        gsap.to('#days', { textContent: days, duration: 0.5, snap: { textContent: 1 } });
        gsap.to('#hours', { textContent: hours, duration: 0.5, snap: { textContent: 1 } });
        gsap.to('#minutes', { textContent: minutes, duration: 0.5, snap: { textContent: 1 } });
        gsap.to('#seconds', { textContent: seconds, duration: 0.5, snap: { textContent: 1 } });
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

// ==================== 平滑滾動 ====================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: {
                        y: target,
                        offsetY: 70
                    },
                    ease: "power2.inOut"
                });
            }
        });
    });
}

// ==================== 報名按鈕功能 ====================
function initRegistration() {
    const registerBtn = document.getElementById('registerBtn');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 添加點擊動畫
            gsap.to(registerBtn, {
                scale: 0.95,
                duration: 0.1,
                yoyo: true,
                repeat: 1
            });
            
            alert('報名功能即將開放！\n請密切關注我們的最新消息。');
        });
    }
}

// ==================== 滾動動畫效果 ====================
function initScrollAnimation() {
    // 使用 GSAP ScrollTrigger 創建滾動動畫
    gsap.utils.toArray('section').forEach((section, index) => {
        // 跳過第一個 section (hero)
        if (index === 0) return;
        
        gsap.from(section, {
            opacity: 0,
            y: 50,
            duration: 0.8,
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                end: "top 50%",
                toggleActions: "play none none reverse"
            }
        });
    });
    
    // 3D 浮動卡片動畫
    gsap.utils.toArray('.floating-card').forEach((card, index) => {
        gsap.from(card, {
            opacity: 0,
            y: 100,
            rotationX: -15,
            duration: 0.8,
            delay: index * 0.1,
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });
    });
}

// ==================== 初始化 Vanilla Tilt (精神標語卡片) ====================
function initSpiritTilt() {
    if (typeof VanillaTilt !== 'undefined') {
        const tiltCards = document.querySelectorAll('.spirit-tilt-card');
        VanillaTilt.init(tiltCards);
    }
}

// ==================== 照片懶加載 ====================
function initLazyLoading() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.classList.add('loaded');
                
                // 添加淡入動畫
                gsap.from(img, {
                    opacity: 0,
                    scale: 0.9,
                    duration: 0.6,
                    ease: "power2.out"
                });
                
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// ==================== 3D 卡片懸浮動畫 ====================
function init3DCardEffects() {
    // 為所有 3D 卡片添加懸浮效果
    const cards = document.querySelectorAll('.glass-info-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -20,
                scale: 1.05,
                duration: 0.3,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
            });
        });
    });
}

// ==================== 頁面載入完成後初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 初始化 AOS
    initAOS();
    
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
    
    // 數字動畫
    animateNumbers();
    
    // Q&A
    initQA();
    
    // 平滑滾動
    initSmoothScroll();
    
    // 報名按鈕
    initRegistration();
    
    // 滾動動畫
    initScrollAnimation();
    
    // 3D 卡片效果
    init3DCardEffects();
    
    // 照片懶加載
    initLazyLoading();
    
    // 添加頁面載入動畫
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
    });
    
    // 英雄區標題動畫
    gsap.from('.hero-main-title', {
        y: -50,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out"
    });
    
    gsap.from('.hero-subtitle', {
        y: -30,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power3.out"
    });
    
    gsap.from('.countdown-wrapper', {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power3.out"
    });
});

// ==================== 視窗大小改變時的處理 ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 重新初始化 ScrollTrigger
        if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
        }
        
        // 重新初始化 AOS
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 250);
});

// ==================== 滾動性能優化 ====================
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // 這裡可以添加需要在滾動時執行的代碼
            ticking = false;
        });
        ticking = true;
    }
});
