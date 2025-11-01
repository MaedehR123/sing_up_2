document.addEventListener('DOMContentLoaded', function() {
    // Language switching functionality
    const translations = {
        en: {
            welcome: "Welcome Back",
            subtitle: "Please enter your details",
            email: "Email Address",
            password: "Password",
            remember: "Remember me",
            forgot: "Forgot password?",
            signIn: "Sign In",
            noAccount: "Don't have an account?",
            signUp: "Sign up"
        },
        fa: {
            welcome: "خوش آمدید",
            subtitle: "لطفاً اطلاعات خود را وارد کنید",
            email: "آدرس ایمیل",
            password: "رمز عبور",
            remember: "مرا به خاطر بسپار",
            forgot: "رمز عبور را فراموش کرده‌اید؟",
            signIn: "ورود",
            noAccount: "حساب کاربری ندارید؟",
            signUp: "ثبت نام"
        }
    };

    let currentLang = 'en';

    function updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[currentLang][key];
        });

        // Update HTML direction
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    }

    // Event delegation for language switcher
    document.addEventListener('click', function(e) {
        if (e.target.closest('[data-lang]')) {
            currentLang = e.target.closest('[data-lang]').getAttribute('data-lang');
            updateTranslations();
        }
    });

    // Form validation
    document.addEventListener('submit', function(e) {
        if (e.target.matches('auth-form')) {
            e.preventDefault();
            const form = e.target;
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;

            if (!email || !password) {
                // Show error message
                const errorElement = form.querySelector('.error-message');
                errorElement.textContent = currentLang === 'en' 
                    ? "Please fill in all fields" 
                    : "لطفاً تمام فیلدها را پر کنید";
                errorElement.classList.remove('hidden');
                return;
            }

            // Simulate successful login
            setTimeout(() => {
                form.classList.add('animate-pulse');
                setTimeout(() => {
                    alert(currentLang === 'en' 
                        ? "Login successful!" 
                        : "ورود با موفقیت انجام شد!");
                    form.classList.remove('animate-pulse');
                }, 800);
            }, 500);
        }
    });

    // Initialize
    updateTranslations();
});


document.addEventListener('DOMContentLoaded', function() {
    // اینجا کد زبان و فرم لاگین است
    updateTranslations();
});

// 👇 اینجا بگذار:
document.addEventListener('click', function(e) {
    const signUpLink = e.target.closest('[data-i18n="signUp"]');
    if (signUpLink) {
        e.preventDefault();
        alert('در حال نمایش فرم ثبت‌نام ...');
    }
});
