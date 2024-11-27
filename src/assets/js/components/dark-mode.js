class DarkMode {
    constructor() {
        this.init();
    }

    init() {
        this.addToggleButton();
        this.applyTheme();
        this.registerEvents();
    }

    addToggleButton() {
        const button = `
            <button class="theme-toggle" aria-label="تبديل الوضع">
                <i class="icon-moon"></i>
            </button>
        `;
        
        document.querySelector('.header-actions')
            .insertAdjacentHTML('beforeend', button);
    }

    applyTheme() {
        const theme = localStorage.getItem('theme') || 'light';
        document.documentElement.setAttribute('data-theme', theme);
    }

    registerEvents() {
        document.querySelector('.theme-toggle').addEventListener('click', () => {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
}

export default DarkMode; 