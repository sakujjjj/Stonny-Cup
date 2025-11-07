// ==================== 球員資料 ====================
const playersData = [
    {
        name: "STONNY WANG",
        number: 1,
        role: "TOURNAMENT CHAMPION",
        quote: "我是發球像砲彈，接球像牆壁、全場最穩的底線型球員。",
        emoji: "👑"
    },
    {
        name: "YU-JIE WANG",
        number: 7,
        role: "POWER STRIKER",
        quote: "Every shot counts",
        emoji: "🎾"
    },
    {
        name: "YI-TING",
        number: 10,
        role: "SPEED MASTER",
        quote: "Fast as lightning",
        emoji: "🎾"
    },
    {
        name: "JUN-HAO SU",
        number: 23,
        role: "TACTICAL GENIUS",
        quote: "Strategy wins games",
        emoji: "🎾"
    },
    {
        name: "TZU-MING LIN",
        number: 8,
        role: "SPIN MASTER",
        quote: "Spin to win",
        emoji: "🎾"
    },
    {
        name: "EDDIE",
        number: 3,
        role: "BASELINE KING",
        quote: "Consistency is key",
        emoji: "🎾"
    },
    {
        name: "JASON",
        number: 11,
        role: "NET MASTER",
        quote: "Dominating at the net",
        emoji: "🎾"
    },
    {
        name: "LIANG LIANG",
        number: 10,
        role: "NET MASTER",
        quote: "Dominating at the net",
        emoji: "🎾"
    }
];

// ==================== 載入動畫 ====================
function initLoader() {
    const loader = document.getElementById('loader');
    const progressFill = document.getElementById('progressFill');
    const loaderPercentage = document.getElementById('loaderPercentage');
    const particlesContainer = document.getElementById('particles');
    
    let progress = 0;
    const duration = 3000; // 3 秒
    const interval = 30;
    const increment = (100 / duration) * interval;
    
    const progressInterval = setInterval(() => {
        progress += increment;
        if (progress >= 100) {
            progress = 100;
            clearInterval(progressInterval);
            
            // 粒子爆炸效果
            createParticleExplosion(particlesContainer);
            
            // 延遲後隱藏載入畫面
            setTimeout(() => {
                loader.classList.add('hidden');
                // 移除載入畫面以釋放記憶體
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 500);
        }
        
        progressFill.style.width = progress + '%';
        loaderPercentage.textContent = Math.floor(progress) + '%';
    }, interval);
}

// 粒子爆炸效果
function createParticleExplosion(container) {
    const particleCount = 50;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 200 + Math.random() * 200;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.left = centerX + 'px';
        particle.style.top = centerY + 'px';
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        // 隨機顏色
        const colors = ['var(--cyber-cyan)', 'var(--cyber-purple)', 'var(--cyber-pink)'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        container.appendChild(particle);
        
        // 動畫結束後移除粒子
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// ==================== 導航功能 ====================
function initNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    // 漢堡選單切換
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
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 0 30px var(--cyber-cyan)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
            navbar.style.boxShadow = '0 0 20px var(--cyber-cyan)';
        }
        
        lastScroll = currentScroll;
    });
}

// ==================== 倒數計時器 ====================
function updateCountdown() {
    const targetDate = new Date('2025-12-13T10:00:00').getTime();
    
    const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;
        
        if (distance < 0) {
            clearInterval(timer);
            document.getElementById('days').textContent = '00';
            document.getElementById('hours').textContent = '00';
            document.getElementById('minutes').textContent = '00';
            document.getElementById('seconds').textContent = '00';
            return;
        }
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// ==================== 生成球員卡片 ====================
function generatePlayerCards() {
    const playersGrid = document.getElementById('playersGrid');
    
    playersData.forEach((player, index) => {
        const card = document.createElement('div');
        card.className = 'player-cyber-card';
        card.style.animationDelay = `${index * 0.1}s`;
        card.dataset.playerIndex = index;
        
        card.innerHTML = `
            <div class="player-number">${player.number}</div>
            <div class="player-emoji">${player.emoji}</div>
            <h3 class="player-name">${player.name}</h3>
            <p class="player-role">${player.role}</p>
            <p class="player-quote">"${player.quote}"</p>
        `;
        
        // 點擊卡片展開模態框
        card.addEventListener('click', () => {
            openPlayerModal(player);
        });
        
        playersGrid.appendChild(card);
    });
}

// ==================== 球員卡片模態框 ====================
function openPlayerModal(player) {
    // 創建模態框
    const modal = document.createElement('div');
    modal.className = 'player-modal';
    modal.innerHTML = `
        <div class="player-modal-content">
            <button class="modal-close">×</button>
            <div class="modal-player-number">${player.number}</div>
            <div class="modal-player-emoji">${player.emoji}</div>
            <h2 class="modal-player-name">${player.name}</h2>
            <p class="modal-player-role">${player.role}</p>
            <p class="modal-player-quote">"${player.quote}"</p>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 延遲添加 active 類以觸發動畫
    setTimeout(() => {
        modal.classList.add('active');
    }, 10);
    
    // 關閉按鈕事件
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => {
        closePlayerModal(modal);
    });
    
    // 點擊背景關閉
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closePlayerModal(modal);
        }
    });
    
    // ESC 鍵關閉
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closePlayerModal(modal);
            document.removeEventListener('keydown', escHandler);
        }
    };
    document.addEventListener('keydown', escHandler);
}

function closePlayerModal(modal) {
    modal.classList.remove('active');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// ==================== Q&A 手風琴 ====================
function initQA() {
    const qaQuestions = document.querySelectorAll('.qa-question');
    
    qaQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const qaItem = question.parentElement;
            const isActive = qaItem.classList.contains('active');
            
            // 關閉所有其他項目
            document.querySelectorAll('.qa-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // 切換當前項目
            if (!isActive) {
                qaItem.classList.add('active');
            }
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
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ==================== 報名按鈕 ====================
function initRegistration() {
    const registerBtn = document.getElementById('registerBtn');
    
    if (registerBtn) {
        registerBtn.addEventListener('click', () => {
            // 這裡可以連接到實際的報名表單
            alert('報名功能開發中！\n\n請聯繫主辦單位進行報名。');
        });
    }
}

// ==================== 滾動動畫 ====================
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
    
    // 觀察所有需要動畫的元素
    document.querySelectorAll('.spirit-cyber-card, .moment-item, .info-hex-card, .qualification-item, .player-cyber-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ==================== 滑鼠追蹤效果 ====================
function initMouseTracker() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--cyber-cyan);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.1s ease;
        box-shadow: 0 0 20px var(--cyber-cyan);
        display: none;
    `;
    document.body.appendChild(cursor);
    
    // 只在桌面版顯示
    if (window.innerWidth > 768) {
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX - 10 + 'px';
            cursor.style.top = e.clientY - 10 + 'px';
        });
        
        // 懸停在可點擊元素上時放大
        document.querySelectorAll('a, button, .player-cyber-card, .moment-item, .info-hex-card').forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'scale(2)';
                cursor.style.borderColor = 'var(--cyber-pink)';
                cursor.style.boxShadow = '0 0 30px var(--cyber-pink)';
            });
            
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'scale(1)';
                cursor.style.borderColor = 'var(--cyber-cyan)';
                cursor.style.boxShadow = '0 0 20px var(--cyber-cyan)';
            });
        });
    }
}

// ==================== 數字計數動畫 ====================
function animateNumbers() {
    const numberElements = document.querySelectorAll('.info-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        entry.target.textContent = target;
                        clearInterval(timer);
                    } else {
                        entry.target.textContent = Math.floor(current);
                    }
                }, 30);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    numberElements.forEach(el => observer.observe(el));
}

// ==================== 故障效果增強 ====================
function enhanceGlitchEffect() {
    const glitchElements = document.querySelectorAll('.glitch');
    
    glitchElements.forEach(el => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                el.style.transform = `translate(${Math.random() * 4 - 2}px, ${Math.random() * 4 - 2}px)`;
                setTimeout(() => {
                    el.style.transform = 'translate(0, 0)';
                }, 50);
            }
        }, 100);
    });
}

// ==================== 背景粒子效果 ====================
function createBackgroundParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);
    
    // 創建浮動粒子
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: var(--cyber-cyan);
            border-radius: 50%;
            box-shadow: 0 0 5px var(--cyber-cyan);
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float-particle ${10 + Math.random() * 20}s linear infinite;
        `;
        particleContainer.appendChild(particle);
    }
    
    // 添加 CSS 動畫
    if (!document.getElementById('particle-animation')) {
        const style = document.createElement('style');
        style.id = 'particle-animation';
        style.textContent = `
            @keyframes float-particle {
                0% {
                    transform: translate(0, 0);
                    opacity: 0;
                }
                10% {
                    opacity: 1;
                }
                90% {
                    opacity: 1;
                }
                100% {
                    transform: translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ==================== 初始化所有功能 ====================
document.addEventListener('DOMContentLoaded', () => {
    // 載入動畫
    initLoader();
    
    // 等待載入完成後初始化其他功能
    setTimeout(() => {
        initNavigation();
        updateCountdown();
        generatePlayerCards();
        initQA();
        initSmoothScroll();
        initRegistration();
        initScrollAnimation();
        initMouseTracker();
        animateNumbers();
        enhanceGlitchEffect();
        createBackgroundParticles();
    }, 3500);
});

// ==================== 視窗調整 ====================
window.addEventListener('resize', () => {
    // 重新計算響應式元素
    const customCursor = document.querySelector('.custom-cursor');
    if (customCursor) {
        if (window.innerWidth <= 768) {
            customCursor.style.display = 'none';
        } else {
            customCursor.style.display = 'block';
        }
    }
});

// ==================== 鍵盤快捷鍵 ====================
document.addEventListener('keydown', (e) => {
    // ESC 關閉選單
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        if (navMenu) {
            navMenu.classList.remove('active');
        }
    }
    
    // Space 滾動到下一個區塊
    if (e.key === ' ' && e.target === document.body) {
        e.preventDefault();
        const sections = document.querySelectorAll('section');
        const currentScroll = window.pageYOffset;
        
        for (let section of sections) {
            if (section.offsetTop > currentScroll + 100) {
                window.scrollTo({
                    top: section.offsetTop - 80,
                    behavior: 'smooth'
                });
                break;
            }
        }
    }
});

console.log('%c🎾 STONNY CUP CYBER EDITION 🎾', 'color: #00f0ff; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #00f0ff;');
console.log('%cWelcome to the future of tennis!', 'color: #b000ff; font-size: 14px;');

