document.addEventListener('DOMContentLoaded', function() {
    // 🔹 تعریف ترجمه‌ها برای دو زبان: انگلیسی (en) و فارسی (fa)
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

    // 🔹 زبان پیش‌فرض را انگلیسی قرار می‌دهد
    let currentLang = 'en';

    // 🔹 تابعی برای به‌روزرسانی متن‌ها طبق زبان انتخاب‌شده
    function updateTranslations() {
        // برای هر المنتی که خاصیت data-i18n دارد، متن مربوطه را از ترجمه‌ها جایگزین می‌کند
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = translations[currentLang][key];
        });

        // 🔸 تنظیم جهت متن (چپ‌چین برای انگلیسی، راست‌چین برای فارسی)
        document.documentElement.dir = currentLang === 'fa' ? 'rtl' : 'ltr';
    }

    // 🔹 گوش دادن به کلیک‌ها برای تعویض زبان
    document.addEventListener('click', function(e) {
        // اگر روی المانی با data-lang کلیک شود، زبان را تغییر می‌دهد
        if (e.target.closest('[data-lang]')) {
            currentLang = e.target.closest('[data-lang]').getAttribute('data-lang');
            updateTranslations(); // و سپس متن‌ها را به‌روزرسانی می‌کند
        }
    });

    // 🔹 اعتبارسنجی فرم ورود (Login)
    document.addEventListener('submit', function(e) {
        // اگر فرم دارای selector به نام auth-form باشد
        if (e.target.matches('auth-form')) {
            e.preventDefault(); // از ارسال فرم جلوگیری می‌کند
            const form = e.target;
            const email = form.querySelector('input[type="email"]').value;
            const password = form.querySelector('input[type="password"]').value;

            // بررسی اینکه ایمیل و پسورد پر شده باشند
            if (!email || !password) {
                // نمایش پیغام خطا به زبان فعلی
                const errorElement = form.querySelector('.error-message');
                errorElement.textContent = currentLang === 'en' 
                    ? "Please fill in all fields" 
                    : "لطفاً تمام فیلدها را پر کنید";
                errorElement.classList.remove('hidden');
                return;
            }

            // شبیه‌سازی موفقیت ورود (Login)
            setTimeout(() => {
                form.classList.add('animate-pulse'); // انیمیشن کوتاه
                setTimeout(() => {
                    alert(currentLang === 'en' 
                        ? "Login successful!" 
                        : "ورود با موفقیت انجام شد!");
                    form.classList.remove('animate-pulse');
                }, 800);
            }, 500);
        }
    });

    // 🔹 در هنگام بارگذاری صفحه، متن‌ها را به‌روزرسانی کن
    updateTranslations();
});


// 🔸 بار دوم برای اطمینان از به‌روزرسانی هنگام آماده شدن DOM
document.addEventListener('DOMContentLoaded', function() {
    // اینجا کد زبان و فرم لاگین است
    updateTranslations();
});

// 👇 این قسمت مخصوص کلیک روی لینک "ثبت نام" است
document.addEventListener('click', function(e) {
    // پیدا کردن لینک ثبت‌نام با data-i18n="signUp"
    const signUpLink = e.target.closest('[data-i18n="signUp"]');
    if (signUpLink) {
        e.preventDefault(); // جلوگیری از رفتار پیش‌فرض لینک
        alert('در حال نمایش فرم ثبت‌نام ...'); // نمایش پیام برای تست
    }
});
