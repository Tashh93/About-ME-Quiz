document.addEventListener('DOMContentLoaded', function() {
    // Variable to store correct answers
    const correctAnswers = {
        question1: 30,
        question2: "neither", 
        question3: 11,
        question4: "roseland",
        question5: "dreday",
        question6: 18,
        question7: "monie",
        question8: "allday",
        question9: "chicken",
        question10: "Marie"
    };

    // Function to grade the quiz
    function gradeQuiz() {
        let score = 0;
        const quiz = document.getElementById("quiz-form");

        for (const questionId in correctAnswers) {
            const userAnswer = quiz.elements[questionId].value;
            const correctAnswer = correctAnswers[questionId];

            if (userAnswer === correctAnswer.toString()) { // Ensure comparison as string
                alert(`Question ${questionId}: Correct, Okayyy!`);
                score++;
            } else {
                alert(`Question ${questionId}: Wrong SMH!`);
            }
        }

        const totalQuestions = Object.keys(correctAnswers).length;
        const percentage = (score / totalQuestions) * 100;
        // alert(`You scored ${score} out of ${totalQuestions}. Percentage: ${percentage}%`);

        let message = "";
        if (percentage >= 60) {
            message = `IKTR! You scored ${score} out of ${totalQuestions}. You're at ${percentage}%. I love you!`;
        } else {
            message = `Damn, You scored ${score} out of ${totalQuestions}. You got ${percentage}%. Don't Call Me!`;
        }

        // Display message to the user
        alert(message);

        }

        // Prevent form submission on pressing Enter
        document.getElementById('quiz-form').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
            e.preventDefault();
            return false;
        }

    });

    // Add validation for the number input
    const numInput = document.getElementById("age");
    const errorMsg = document.getElementById("age-error-message");

    function numInputValidation() {
        const value = parseInt(numInput.value);

        if (isNaN(value) || value < 1 || value > 100) {
            errorMsg.style.display = "inline";
        } else {
            errorMsg.style.display = "none";
        }
    }

    numInput.addEventListener("input", numInputValidation);
    numInput.addEventListener("blur", numInputValidation);

    // Add event listener to the submit button to grade the quiz
    document.getElementById("submit-button").addEventListener("click", gradeQuiz);

    // function submitForm(){
    //     const form = document.getElementById("quiz-form");
    //     event.preventDefault();
    
    //     gradeQuiz();
    
    // }
});


