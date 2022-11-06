const question = [
    {
        'que': "Which of  the following is a markup language",
        'a':"HTML",
        'b': "CSS",
        'c':"JavaScript",
        'd':"php",
        'correct': 'a'
    },
    {
        'que': "What year Javascript launched",
        'a':"1994",
        'b': "1995",
        'c':"1996",
        'd':"none of a above",
        'correct': 'b'
    },
    {
        'que': "What does CSS stand for",
        'a':"Hypertext Markup Language",
        'b': "Cascading Style Sheet",
        'c':"Jason Object Notation",
        'd':"Hericopter Terminal Motorboats Lamborigins",
        'correct': 'b'
    }
]
let index = 0;
let total = question.length
let right = 0,
    wrong = 0;
const quebox  = document.getElementById("quebox")
const option = document.querySelectorAll(".option")
function laodQuestion() {
    if(index === total){
        return endQuiz()
    }
    resSet()
    const data  = question[index]
    quebox.innerText = `${index+1})${data.que}`
    option[0].nextElementSibling.innerText = data.a;
    option[1].nextElementSibling.innerText = data.b;
    option[2].nextElementSibling.innerText = data.c;
    option[3].nextElementSibling.innerText = data.d;
}
function  submitQuiz(){
    const data  = question[index]
    const ans = getAnswer()
    if(ans == data.correct){
       right++;
    }
    else{
        wrong++;
    }
    index++;
    laodQuestion();
    return;
}
function getAnswer(input){
    let anwser;
    option.forEach(
        (input)=>{
            if (input.checked) {
               anwser = input.value;
            }
            
        }
    )
    return anwser;
}
function resSet(){
    option.forEach(
        input => {
            input.checked = false
        }
    )
    
}
function endQuiz(){
    document.getElementById("box").innerHTML = `
    <h3>Thank you for playing </h3>
    <h2>${right} / ${total} are correct</h2>`
}
laodQuestion()