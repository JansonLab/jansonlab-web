// src/i18n/ui.ts

import { en } from './locales/en';
import { zh } from './locales/zh';

export const languages = {
  en: 'English',
  zh: '简体中文',
  //  ja: '日本語', // 未来只需在这里加一行
};

export const defaultLang = 'en';

export const ui = {
  en,
  zh,
} as const;
