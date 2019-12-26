export default function onCreateQuestions(words){
    let questions = [];

    for (let i=0; i<words.length; i++) {

        questions.push(onCreateQuestion(words[i]));
      }

    return questions;
}
  
   function onCreateQuestion(word){
        // To randomely create word with missing character and know the missing character
        let wordArray = []
        for (var i = 0; i < word.length; i++) {
            let a = word.charAt(i);
            wordArray.push(a);            
        }
        
        let wordQuestion = ''

        let ChartPosition = Math.floor(Math.random() * wordArray.length);
        let missingCharater = wordArray[ChartPosition]
        if (~ChartPosition) {
            wordArray[ChartPosition] = "__";
            wordQuestion = wordArray.join('');
        }

        // identify the suitable group of option
        const vowels = ['a', 'e', 'i', 'o', 'u']
        const consonant = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z'];
        let optionGroup = [];
        if (vowels.indexOf(missingCharater)>-1){
            onDeleteItemFromArray(missingCharater, vowels)
            optionGroup = vowels;
        }else {onDeleteItemFromArray(missingCharater, consonant)
            optionGroup = consonant
        }
        
        // Here I will generate 3 distinct characters + the missing character to serve as selected optionArray 
            let a = [];
            let otherOptionRandomly = [];
            while (a.length < 3) {
                    var n = Math.floor(Math.random() * optionGroup.length);
                    if (a.indexOf(n) == -1) {
                        a.push(n);
                        let b = optionGroup[n]
                        otherOptionRandomly.push(b)
                    }
                }
                    
        otherOptionRandomly.push(missingCharater)
        onShuffleArray(otherOptionRandomly)

        // Generate Question
        let question = {};
            question.word = word;
            question.missingCharacter = missingCharater;
            question.wordWithMissingCharacter = wordQuestion;
            question.optionToSelected = otherOptionRandomly;
        return question;
        }        

    function onDeleteItemFromArray(item, array){
        function searchPosition(elementToFind, array) {
          return array.map(function(el) {
              return el;
          }).indexOf(elementToFind);
      }
      const position = searchPosition(item, array);
      array.splice(position, 1);
    }

    
    function onShuffleArray(array){
        let counter = array.length;
    
        // While there are elements in the array
        while (counter > 0) {
            // Pick a random index
            let index = Math.floor(Math.random() * counter);
    
            // Decrease counter by 1
            counter--;
    
            // And swap the last element with it
            let temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }
        return array;
    }