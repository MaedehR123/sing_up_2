class AuthForm extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .form-group {
                    margin-bottom: 1.5rem;
                    position: relative;
                }
                
                label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: #E2E8F0;
                    font-size: 0.875rem;
                    transition: all 0.3s ease;
                }
                
                input {
                    width: 100%;
                    padding: 0.75rem;
                    background-color: rgba(255, 255, 255, 0.1);
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    border-radius: 0.375rem;
                    color: white;
                    transition: all 0.3s ease;
                }
                
                input:focus {
                    outline: none;
                    border-color: #8B5CF6;
                    box-shadow: 0 0 0 2px rgba(139, 92, 246, 0.3);
                }
                
                input:hover {
                    border-color: rgba(255, 255, 255, 0.4);
                }
                
                .forgot-password {
                    display: block;
                    text-align: right;
                    font-size: 0.75rem;
                    color: #A5B4FC;
                    margin-top: 0.25rem;
                    transition: color 0.3s ease;
                }
                
                .forgot-password:hover {
                    color: #EC4899;
                }
                
                .btn-primary {
                    width: 100%;
                    padding: 0.75rem;
                    background: linear-gradient(to right, #8B5CF6, #EC4899);
                    color: white;
                    border: none;
                    border-radius: 0.375rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    position: relative;
                    overflow: hidden;
                }
                
                .btn-primary:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 10px 20px -5px rgba(139, 92, 246, 0.4);
                }
                
                .btn-primary:active {
                    transform: translateY(0);
                }
                
                .btn-primary::after {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(to right, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.3));
                    transform: translateX(-100%);
                    transition: transform 0.4s ease;
                }
                
                .btn-primary:hover::after {
                    transform: translateX(0);
                }
                
                .flex-between {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }
                
                .checkbox-container {
                    display: flex;
                    align-items: center;
                }
                
                .checkbox-container input {
                    width: auto;
                    margin-right: 0.5rem;
                }
                
                .error-message {
                    color: #EF4444;
                    font-size: 0.875rem;
                    margin-top: 0.25rem;
                    display: none;
                }
                
                .icon {
                    position: absolute;
                    right: 0.75rem;
                    top: 2.25rem;
                    color: #94A3B8;
                }
            </style>
            
            <form>
                <div class="form-group">
                    <label data-i18n="email">Email Address</label>
                    <input type="email" placeholder="you@example.com" required>
                    <i data-feather="mail" class="icon"></i>
                </div>
                
                <div class="form-group">
                    <label data-i18n="password">Password</label>
                    <input type="password" placeholder="••••••••" required>
                    <i data-feather="lock" class="icon"></i>
                </div>
                
                <div class="flex-between">
                    <div class="checkbox-container">
                        <input type="checkbox" id="remember">
                        <label for="remember" data-i18n="remember">Remember me</label>
                    </div>
                    <a href="#" class="forgot-password" data-i18n="forgot">Forgot password?</a>
                </div>
                
                <div class="error-message hidden"></div>
                
                <button type="submit" class="btn-primary" data-i18n="signIn">Sign In</button>
            </form>
        `;
        
        // Feather icons needs to be initialized after shadow DOM is created
        setTimeout(() => {
            if (window.feather) {
                feather.replace({
                    'stroke-width': 1.5
                });
            }
        }, 100);
    }
}

customElements.define('auth-form', AuthForm);