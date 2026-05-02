// src/i18n/utils.ts
import { ui, defaultLang } from './ui';

// 1. 从 URL 提取当前语言
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

// 2. 获取翻译函数
export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key]; // 如果找不到对应语言的翻译，降级显示英文
  }
}

// 3. 动态生成各语言的正确路由
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return l === defaultLang ? path : `/${l}${path}`;
  }
}
