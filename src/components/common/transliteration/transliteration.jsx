import { transliterate as transliterateFunc } from 'transliteration';

export default function translateCyrillic(category) {
  const hasCyrillic = /[а-яА-ЯЁё]/.test(category);
  let latinTitle = category;

  if (hasCyrillic) {
    latinTitle = transliterateFunc(category);
  }
  latinTitle = latinTitle.replace(/\s+/g, '-');
  return latinTitle;
}
