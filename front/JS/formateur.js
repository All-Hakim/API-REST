window.stockQuestion = []

const add = document.getElementById('add')
const ajouter = document.getElementById('ajouter')
const question = document.getElementById('question')
const validation = document.getElementById('valider')
const pageValidation = document.getElementById('pageValidation')
const validePage = document.getElementById('validation')
let numeroQuestion = 0


add.addEventListener('click', function(e){
    e.preventDefault()
    numeroQuestion += 1
    let newQuestions = ajouter.value
    let questions = question.innerHTML 
    question.innerHTML = questions + "<br>" + numeroQuestion + "." + newQuestions;
    window.stockQuestion.push(newQuestions)
    console.log(stockQuestion)
    ajouter.value = ""

})

pageValidation.style.display = 'none'

validation.addEventListener('click', function(e){
    pageValidation.style.display = 'block'
    const questionsParams = encodeURIComponent(window.stockQuestion.join(';'));
    window.location.href = `index.html?questions=${questionsParams}`;
  
})

validePage.addEventListener('click', function(e){
    window.location.href = "index.html"
})

console.log(window.stockQuestion)