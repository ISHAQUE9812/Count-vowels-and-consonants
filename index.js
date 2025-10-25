let str = "hello world";
let vowels = 0;
let consonants = 0;

for(i=0; i<str.length; i++){
   let ch = str[i].toLocaleLowerCase()
   if(ch>= 'a' && ch<='z'){
     if('aeiou'.includes(ch))  vowels++
     else consonants++
   }
}

console.log(vowels)
console.log(consonants)

