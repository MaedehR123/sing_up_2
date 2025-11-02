document.addEventListener('DOMContentLoaded', function() {
    // 🔹 ترجمه‌ها برای دو زبان: انگلیسی (en) و فارسی (fa)
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

    // 🔸 زبان پیش‌فرض
    let currentLang = 'en';

    // 🔹 تابع بروزرسانی ترجمه‌ها
    function updateTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                el.textContent = translations[currentLang][key];
            }
        });
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    }

    // 🔹 تغییر زبان با کلیک روی دکمه یا المان data-lang
    document.addEventListener('click', e => {
        const langBtn = e.target.closest('[data-lang]');
        if (langBtn) {
            currentLang = langBtn.getAttribute('data-lang');
            updateTranslations();
        }
    });

    // 🔹 اعتبارسنجی فرم ورود (auth-form)
    document.addEventListener('submit', e => {
        if (e.target.matches('auth-form')) {
            e.preventDefault();

            const form = e.target;
            const email = form.querySelector('input[type="email"]')?.value.trim();
            const password = form.querySelector('input[type="password"]')?.value.trim();
            const errorElement = form.querySelector('.error-message');

            if (!email || !password) {
                errorElement.textContent = currentLang === 'en'
                    ? "Please fill in all fields"
                    : "لطفاً تمام فیلدها را پر کنید";
                errorElement.classList.remove('hidden');
                return;
            }

            // شبیه‌سازی ورود موفق
            form.classList.add('animate-pulse');
            setTimeout(() => {
                alert(currentLang === 'en'
                    ? "Login successful!"
                    : "ورود با موفقیت انجام شد!");
                form.classList.remove('animate-pulse');
            }, 800);
        }
    });

    // 🔹 مدیریت کلیک روی لینک "Sign up"
    document.addEventListener('click', e => {
        const signUpLink = e.target.closest('[data-i18n="signUp"]');
        if (signUpLink) {
            e.preventDefault();
            // انتقال به صفحه ثبت‌نام
            window.location.href = "signup.html";
        }
    });

    // 🔹 در هنگام بارگذاری صفحه ترجمه‌ها را اعمال کن
    updateTranslations();
});
