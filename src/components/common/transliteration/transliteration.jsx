import {transliterate as transliterateFunc}  from 'transliteration';



export default function translateCyrillic(category) {

   // Перевірка наявності кириличних символів у рядку
   const hasCyrillic = /[а-яА-ЯЁё]/.test(category);
   let latinTitle = category;
  
   if (hasCyrillic) {
     latinTitle = transliterateFunc(category);
   }
   return latinTitle
}
