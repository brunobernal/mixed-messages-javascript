const mixedMessagesJavaScript = () => {

        const data = {
            object: ["Array","String","Math"],
            difficulty: ["easy","medium","hard"],
            arrayMethods: {
                easy: [{
                    name:"Array.prototype.pop()",
                    explanation: "The pop() method removes the last element from an array and returns that element. This method changes the length of the array.",
                    syntax: "arrName.pop()",
                    example: `
                    const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

                    console.log(plants.pop());
                    // expected output: "tomato"

                    console.log(plants);
                    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

                    plants.pop();

                    console.log(plants);
                    // expected output: Array ["broccoli", "cauliflower", "cabbage"]`},
                    {
                    name:"Array.prototype.push()",
                    explanation: "The push() method adds one or more elements to the end of an array and returns the new length of the array.",
                    syntax: "arr.push([element1[, ...[, elementN]]])",
                    example: `
                    const animals = ['pigs', 'goats', 'sheep'];

                    const count = animals.push('cows');
                    console.log(count);
                    // expected output: 4
                    console.log(animals);
                    // expected output: Array ["pigs", "goats", "sheep", "cows"]

                    animals.push('chickens', 'cats', 'dogs');
                    console.log(animals);
                    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]`},
                    {
                    name:"Array.prototype.slice()",
                    explanation: `The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.`,
                    syntax: "arr.slice([start[, end]])",
                    example: `
                    const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

                    console.log(animals.slice(2));
                    // expected output: Array ["camel", "duck", "elephant"]

                    console.log(animals.slice(2, 4));
                    // expected output: Array ["camel", "duck"]

                    console.log(animals.slice(1, 5));
                    // expected output: Array ["bison", "camel", "duck", "elephant"]
                    `}],
                medium: [{
                    name:"Array.prototype.filter()",
                    explanation: "The filter() method creates a new array with all elements that pass the test implemented by the provided function.",
                    syntax: `
                    let newArray = arr.filter(callback(currentValue[, index[, array]]) {
                        // return element for newArray, if true
                      }[, thisArg]);`,
                    example: `
                    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

                    const result = words.filter(word => word.length > 6);

                    console.log(result);
                    // expected output: Array ["exuberant", "destruction", "present"]
                    `},
                    {
                    name:"Array.prototype.map()",
                    explanation: "The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.",
                    syntax: `
                    let newArray = arr.map(callback(currentValue[, index[, array]]) {
                        // return element for newArray, after executing something
                      }[, thisArg]);`,
                    example: `
                    const array1 = [1, 4, 9, 16];

                    // pass a function to map
                    const map1 = array1.map(x => x * 2);
                    
                    console.log(map1);
                    // expected output: Array [2, 8, 18, 32]
                    `},
                    {
                    name:"Array.prototype.includes()",
                    explanation: `The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.`,
                    syntax: "arr.includes(valueToFind[, fromIndex])",
                    example: `
                    const array1 = [1, 2, 3];

                    console.log(array1.includes(2));
                    // expected output: true

                    const pets = ['cat', 'dog', 'bat'];

                    console.log(pets.includes('cat'));
                    // expected output: true

                    console.log(pets.includes('at'));
                    // expected output: false

                    `}],
                hard: [{
                    name:"Array.prototype.reduce()",
                    explanation: "The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.",
                    syntax: `
                    arr.reduce(callback( accumulator, currentValue[, index[, array]] ) {
                        // return result from executing something for accumulator or currentValue
                      }[, initialValue]);`,
                    example: `
                    const array1 = [1, 2, 3, 4];
                    const reducer = (accumulator, currentValue) => accumulator + currentValue;

                    // 1 + 2 + 3 + 4
                    console.log(array1.reduce(reducer));
                    // expected output: 10

                    // 5 + 1 + 2 + 3 + 4
                    console.log(array1.reduce(reducer, 5));
                    // expected output: 15
                    `},
                    {
                    name:"Array.prototype.forEach()",
                    explanation: "The forEach() method executes a provided function once for each array element.",
                    syntax: `
                    arr.forEach(callback(currentValue[, index[, array]]) {
                        // execute something
                      }[, thisArg]);`,
                    example: `
                    const array1 = ['a', 'b', 'c'];

                    array1.forEach(element => console.log(element));

                    // expected output: "a"
                    // expected output: "b"
                    // expected output: "c"

                    `},
                    {
                    name:"Array.prototype.every()",
                    explanation: `The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.`,
                    syntax: "arr.every(callback(element[, index[, array]])[, thisArg])",
                    example: `
                    const isBelowThreshold = (currentValue) => currentValue < 40;

                    const array1 = [1, 30, 39, 29, 10, 13];

                    console.log(array1.every(isBelowThreshold));
                    // expected output: true

                    `}]},
            stringMethods: {
                easy: [{
                    name:"String.prototype.toUpperCase()",
                    explanation: "The toUpperCase() method returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).",
                    syntax: "str.slice(beginIndex[, endIndex])",
                    example: `
                    const sentence = 'The quick brown fox jumps over the lazy dog.';

                    console.log(sentence.toUpperCase());
                    // expected output: "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."`},
                    {
                    name:"String.prototype.slice()",
                    explanation: "The slice() method extracts a section of a string and returns it as a new string, without modifying the original string.",
                    syntax: "arr.push([element1[, ...[, elementN]]])",
                    example: `
                    const str = 'The quick brown fox jumps over the lazy dog.';

                    console.log(str.slice(31));
                    // expected output: "the lazy dog."

                    console.log(str.slice(4, 19));
                    // expected output: "quick brown fox"

                    console.log(str.slice(-4));
                    // expected output: "dog."

                    console.log(str.slice(-9, -5));
                    // expected output: "lazy"
                    `},
                    {
                    name:"String.prototype.concat()",
                    explanation: `The concat() method concatenates the string arguments to the calling string and returns a new string.`,
                    syntax: "str.concat(str2 [, ...strN])",
                    example: `
                    const str1 = 'Hello';
                    const str2 = 'World';

                    console.log(str1.concat(' ', str2));
                    // expected output: "Hello World"

                    console.log(str2.concat(', ', str1));
                    // expected output: "World, Hello"

                    `}],
                medium: [{
                    name:"String.prototype.repeat()",
                    explanation: "The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.",
                    syntax: "str.repeat(count)",
                    example: `
                    const chorus = 'Because I\'m happy. ';

                    console.log('Chorus lyrics for "Happy": "{chorus.repeat(27)});
                    // expected output: "Chorus lyrics for "Happy": Because I'm happy. Because I'm happy. Because I'm happy. Be`},
                    {
                    name:"String.prototype.replace()",
                    explanation: `The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. 
                    The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match. 
                    If pattern is a string, only the first occurrence will be replaced.
                    The original string is left unchanged.`,
                    syntax: "const newStr = str.replace(regexp|substr, newSubstr|function)",
                    example: `
                    const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

                    const regex = /dog/gi;

                    console.log(p.replace(regex, 'ferret'));
                    // expected output: "The quick brown fox jumps over the lazy ferret. If the ferret reacted, was it really lazy?"

                    console.log(p.replace('dog', 'monkey'));
                    // expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
                    `},
                    {
                    name:"String.prototype.split()",
                    explanation: `The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.  The division is done by searching for a pattern; where the pattern is provided as the first parameter in the method's call.  `,
                    syntax: "str.split([separator[, limit]])",
                    example: `
                    const str = 'The quick brown fox jumps over the lazy dog.';

                    const words = str.split(' ');
                    console.log(words[3]);
                    // expected output: "fox"
                    
                    const chars = str.split('');
                    console.log(chars[8]);
                    // expected output: "k"
                    
                    const strCopy = str.split();
                    console.log(strCopy);
                    // expected output: Array ["The quick brown fox jumps over the lazy dog."]
                    
                    `}],
                hard: [{
                    name:"String.prototype.padStart()",
                    explanation: `
                    The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.
                     The padding is applied from the start of the current string.`,
                    syntax: "str.padStart(targetLength [, padString])",
                    example: `
                    const str1 = '5';

                    console.log(str1.padStart(2, '0'));
                    // expected output: "05"
                    
                    const fullNumber = '2034399002125581';
                    const last4Digits = fullNumber.slice(-4);
                    const maskedNumber = last4Digits.padStart(fullNumber.length, '*');
                    
                    console.log(maskedNumber);
                    // expected output: "************5581"
                    `},
                    {
                    name:"String.prototype.localeCompare()",
                    explanation: "The localeCompare() method returns a number indicating whether a reference string comes before, or after, or is the same as the given string in sort order.",
                    syntax: "referenceStr.localeCompare(compareString[, locales[, options]])",
                    example: `
                    const a = 'réservé'; // with accents, lowercase
                    const b = 'RESERVE'; // no accents, uppercase

                    console.log(a.localeCompare(b));
                    // expected output: 1
                    console.log(a.localeCompare(b, 'en', { sensitivity: 'base' }));
                    // expected output: 0
                    `},
                    {
                    name:"String.prototype.search()",
                    explanation: `The search() method executes a search for a match between a regular expression and this String object.`,
                    syntax: "str.search(regexp)",
                    example: `
                    const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

                    // any character that is not a word character or whitespace
                    const regex = /[^\w\s]/g;

                    console.log(paragraph.search(regex));
                    // expected output: 43

                    console.log(paragraph[paragraph.search(regex)]);
                    // expected output: "."

                    `}]},
            mathMethods: {
                easy: [{
                    name:"Math.ceil()",
                    explanation: `
                    The Math.ceil() function always rounds a number up to the next largest integer.
                    Note: Math.ceil(null) returns integer 0 and does not give a NaN error.`,
                    syntax: "Math.ceil(x)",
                    example: `
                    console.log(Math.ceil(.95));
                    // expected output: 1

                    console.log(Math.ceil(4));
                    // expected output: 4

                    console.log(Math.ceil(7.004));
                    // expected output: 8

                    console.log(Math.ceil(-7.004));
                    // expected output: -7`},
                    {
                    name:"Math.floor()",
                    explanation: "The Math.floor() function returns the largest integer less than or equal to a given number.",
                    syntax: "Math.floor(x)",
                    example: `
                    console.log(Math.floor(5.95));
                    // expected output: 5

                    console.log(Math.floor(5.05));
                    // expected output: 5

                    console.log(Math.floor(5)); 
                    // expected output: 5

                    console.log(Math.floor(-5.05));
                    // expected output: -6
                    `},
                    {
                    name:"Math.random()",
                    explanation: `
                    The Math.random() function returns a floating-point,
                     pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) 
                     with approximately uniform distribution over that range — which you can then scale to your desired range. 
                     The implementation selects the initial seed to the random number generation algorithm;
                      it cannot be chosen or reset by the user.`,
                    syntax: "Math.random()",
                    example: `
                    function getRandomInt(max) {
                        return Math.floor(Math.random() * Math.floor(max));
                      }
                      
                      console.log(getRandomInt(3));
                      // expected output: 0, 1 or 2
                      
                      console.log(getRandomInt(1));
                      // expected output: 0
                      
                      console.log(Math.random());
                      // expected output: a number from 0 to <1
                    `}],
                medium: [{
                    name:"Math.trunc()",
                    explanation: "The Math.trunc() function returns the integer part of a number by removing any fractional digits.",
                    syntax: "Math.trunc(x)",
                    example: `
                    console.log(Math.trunc(13.37));
                    // expected output: 13

                    console.log(Math.trunc(42.84));
                    // expected output: 42

                    console.log(Math.trunc(0.123));
                    // expected output: 0

                    console.log(Math.trunc(-0.123));
                    // expected output: -0`},
                    {
                    name:"Math.log()",
                    explanation: `
                    The Math.log() function returns the natural logarithm (base e) of a number, that is

                    ∀x>0,Math.log(x)=ln(x)=the uniqueysuch that ey=x

                    The JavaScript Math.log() function is equivalent to ln(x) in mathematics.`,
                    syntax: "Math.log(x)",
                    example: `
                    function getBaseLog(x, y) {
                        return Math.log(y) / Math.log(x);
                      }
                      
                      // 2 x 2 x 2 = 8
                      console.log(getBaseLog(2, 8));
                      // expected output: 3
                      
                      // 5 x 5 x 5 x 5 = 625
                      console.log(getBaseLog(5, 625));
                      // expected output: 4`},
                    {
                    name:"Math.round()",
                    explanation: `The Math.round() function returns the value of a number rounded to the nearest integer.`,
                    syntax: "Math.round(x)",
                    example: `
                    console.log(Math.round(0.9));
                    // expected output: 1

                    console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));
                    // expected output: 6 6 5

                    console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));
                    // expected output: -5 -5 -6
                    `}],
                hard: [{
                    name:"Math.clz32()",
                    explanation: "The Math.clz32() function returns the number of leading zero bits in the 32-bit binary representation of a number.",
                    syntax: "Math.clz32(x)",
                    example: `
                    // 00000000000000000000000000000001
                    console.log(Math.clz32(1));
                    // expected output: 31

                    // 00000000000000000000000000000100
                    console.log(Math.clz32(4));
                    // expected output: 29

                    // 00000000000000000000001111101000
                    console.log(Math.clz32(1000));
                    // expected output: 22`},
                    {
                    name:"Math.fround()",
                    explanation: "The Math.fround() function returns the nearest 32-bit single precision float representation of a Number.",
                    syntax: "var singleFloat = Math.fround(doubleFloat);",
                    example: `
                    console.log(Math.fround(5.5));
                    // expected output: 5.5

                    console.log(Math.fround(5.05));
                    // expected output: 5.050000190734863

                    console.log(Math.fround(5));
                    // expected output: 5

                    console.log(Math.fround(-5.05));
                    // expected output: -5.050000190734863`},
                    {
                    name:"Math.sign()",
                    explanation: `
                    The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument.
                     If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.`,
                    syntax: "Math.sign(x)",
                    example: `
                    console.log(Math.sign(3));
                    // expected output: 1

                    console.log(Math.sign(-3));
                    // expected output: -1

                    console.log(Math.sign(0));
                    // expected output: 0

                    console.log(Math.sign('-3'));
                    // expected output: -1
                    `}]},
        }
        let randomIndex = Math.floor(Math.random()*3);
        let randomObj = data.object[Math.floor(Math.random()*3)];
        let randomDifficulty = data.difficulty[Math.floor(Math.random()*3)];
        let randomMethod;
        
        switch (randomObj) {
            case "Array":
                randomMethod = data.arrayMethods[randomDifficulty][randomIndex];
                break;
            case "String":
                randomMethod = data.stringMethods[randomDifficulty][randomIndex];
                break;
            case "Math":
                randomMethod = data.mathMethods[randomDifficulty][randomIndex];
                break;

        }
        
        const printMessage = () => {

            console.log(`
            OBJECT: ${randomObj}.

            DIFFICULTY: ${randomDifficulty}.

            METHOD: ${randomMethod.name}.

            EXPLANATION:
            ${randomMethod.explanation}

            SINTAX:
            ${randomMethod.syntax}

            EXAMPLE:
            ${randomMethod.example}
            `)
        }  
        
        printMessage();        
};
mixedMessagesJavaScript();
