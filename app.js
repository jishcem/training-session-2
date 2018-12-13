var startQuiz = function(){

    renderQuestionContent(quiz.questions[quiz.index++]);

    const interval = setInterval(function(){            
        renderQuestionContent(quiz.questions[quiz.index++]);
    }, quiz.interval);
    
    
        
    setTimeout(function(){
        clearInterval(interval);
        console.log(quiz);        
    }, ((quiz.questions.length - 1) * quiz.interval));        
    
}

$(".quiz-container").on('change', '[type=radio]', function(e){    
    const selectedAnswer = $(this).val();
    const questionTitleInBTag = $(this).parent().parent().find('b').eq(0).html();    
    

    const quizApp = quiz;

    for (let index = 0; index < quizApp.questions.length; index++) {
        const element = quizApp.questions[index];
        if ( 'Question : ' + element.title === questionTitleInBTag ) {

            for (let index2 = 0; index2 < element.answers.length; index2++) {
                const element2 = element.answers[index2];
                if(element2.correct == true && selectedAnswer == element2.title) {
                    quizApp.questions[index].selectedCorrectAnswer = true;                    
                }
            }
        }
    }
    
});


$("#start").on('click', startQuiz);

function renderQuestionContent (question) {    
    const output = Mustache.render($("#question").html(), question);
    $(".content").html(output);
}

