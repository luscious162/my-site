"use client";

import React, { useEffect } from "react";

// 这个组件用于确保字体正确加载
export default function FontLoader() {
  useEffect(() => {
    // 强制加载字体
    const loadFonts = async () => {
      // 使用FontFace API强制加载字体
      try {
        // 添加自定义CSS
        const css = `
          /* 确保字体以最高优先级加载 */
          @import url('https://fonts.googleapis.com/css2?family=ZCOOL+XiaoWei&display=swap');
          @import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap');

          /* 全局应用中文字体 */
          html, body {
            font-family: 'ZCOOL XiaoWei', '华文细黑', SimHei, sans-serif !important;
          }
          
          /* 常规文本元素使用中文字体 */
          p, span, div, a, button, li, td, th, input, textarea, label {
            font-family: 'ZCOOL XiaoWei', '华文细黑', SimHei, sans-serif !important;
          }
          
          /* 标题文本使用中文字体，并增加字重 */
          h1, h2, h3, h4, h5, h6 {
            font-family: 'ZCOOL XiaoWei', '华文细黑', SimHei, sans-serif !important;
            font-weight: 700 !important;
          }
          
          /* 大字号文本增加字重 */
          .text-4xl, .text-5xl, .text-6xl, .text-7xl, .text-8xl, .text-9xl,
          h1, h2 {
            font-weight: 800 !important;
          }
          
          /* 为英文内容应用特殊字体 */
          .en, [lang="en"], *:lang(en), [data-lang="en"] {
            font-family: 'Special Gothic Expanded One', monospace !important;
          }
          
          /* 为提示框添加中文字体 */
          .skill-tooltip, 
          .skill-tooltip h3, 
          .skill-tooltip p,
          .skill-tooltip * {
            font-family: 'ZCOOL XiaoWei', '华文细黑', SimHei, sans-serif !important;
          }

          /* 为Spline中的文本添加英文特殊字体 */
          .spline-container,
          .spline-container canvas,
          .spline-container iframe {
            font-family: 'Special Gothic Expanded One' !important;
          }
          
          /* 强制应用字体 */
          [data-spline-text], [data-spline-heading], .spline-text {
            font-family: 'Special Gothic Expanded One' !important;
          }
        `;

        // 创建并添加样式元素
        const styleEl = document.createElement('style');
        styleEl.setAttribute('id', 'custom-fonts');
        styleEl.innerHTML = css;
        document.head.appendChild(styleEl);

        // 直接添加字体链接
        const linkEl = document.createElement('link');
        linkEl.rel = 'stylesheet';
        linkEl.href = 'https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&display=swap';
        document.head.appendChild(linkEl);
        
        console.log('自定义字体已加载');
      } catch (e) {
        console.error('加载字体时出错:', e);
      }
    };

    loadFonts();

    // 返回清理函数
    return () => {
      // 清理添加的样式
      const styleEl = document.getElementById('custom-fonts');
      if (styleEl) {
        document.head.removeChild(styleEl);
      }
    };
  }, []);

  return null;
} 
