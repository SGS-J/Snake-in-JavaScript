class MathUtil {
   constructor() {}
   static toTen(num) {
     return num < 10 ? 0 : num - (num % 10);
   }
   static randomTen(value) {
     return MathUtil.toTen(Math.floor(Math.random() * value));
   }
 }
 