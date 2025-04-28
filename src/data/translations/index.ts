import { en } from './en';
import { zh } from './zh';

export const translations = {
  en,
  zh
};

export type Language = 'en' | 'zh';
export type TranslationKey = keyof typeof en; 