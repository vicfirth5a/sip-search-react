import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/scss/all.scss'; // 導入 SCSS 文件
import '../main'; // 導入 main.js 文件
import App from './App';


// 導入 AOS 和 Swiper
import AOS from 'aos';
import 'aos/dist/aos.css';


// 初始化 AOS
AOS.init();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);