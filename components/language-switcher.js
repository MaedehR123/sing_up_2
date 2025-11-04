// class LanguageSwitcher extends HTMLElement {
//     connectedCallback() {
//         this.attachShadow({ mode: 'open' });
//         this.shadowRoot.innerHTML = `
//             <style>
//                 .switch {
//                     position: relative;
//                     display: inline-block;
//                     width: 60px;
//                     height: 30px;
//                 }
                
//                 .switch input { 
//                     opacity: 0;
//                     width: 0;
//                     height: 0;
//                 }
                
//                 .slider {
//                     position: absolute;
//                     cursor: pointer;
//                     top: 0;
//                     left: 0;
//                     right: 0;
//                     bottom: 0;
//                     background-color: #4B5563;
//                     transition: .4s;
//                     border-radius: 30px;
//                 }
                
//                 .slider:before {
//                     position: absolute;
//                     content: "";
//                     height: 22px;
//                     width: 22px;
//                     left: 4px;
//                     bottom: 4px;
//                     background-color: white;
//                     transition: .4s;
//                     border-radius: 50%;
//                 }
                
//                 input:checked + .slider {
//                     background-color: #8B5CF6;
//                 }
                
//                 input:checked + .slider:before {
//                     transform: translateX(30px);
//                 }
                
//                 .lang-flag {
//                     position: absolute;
//                     top: 50%;
//                     transform: translateY(-50%);
//                     font-weight: bold;
//                     font-size: 12px;
//                     color: white;
//                 }
                
//                 .en {
//                     left: 8px;
//                 }
                
//                 .fa {
//                     right: 8px;
//                 }
//             </style>
            
//             <label class="switch">
//                 <input type="checkbox">
//                 <span class="slider"></span>
//                 <span class="lang-flag en">EN</span>
//                 <span class="lang-flag fa">FA</span>
//             </label>
//         `;

//         this.shadowRoot.querySelector('input').addEventListener('change', (e) => {
//             const event = new CustomEvent('languageChange', {
//                 detail: {
//                     lang: e.target.checked ? 'fa' : 'en'
//                 },
//                 bubbles: true,
//                 composed: true
//             });
//             this.dispatchEvent(event);
//         });
//     }
// }

// customElements.define('language-switcher', LanguageSwitcher);