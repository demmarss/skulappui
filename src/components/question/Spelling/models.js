
export function SpellingTaskModel () {
    return {
            words: [],
            parentAuthor: '',
            currentAuthor: '',
            ParentTaskId: '',
            scoreHistory: [],
            lcycleId: ''

        }
}

export function SpellingQuestionModel (){
    return {word: '',
    wordWithMissingCharacter: '',
    missingCharacter: '',
    optionSelected: [],
    answerSelected: '',
    parentTaskId:'',
    author: ''
    }
}