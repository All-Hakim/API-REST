let form = document.querySelector('#form')
var envoyer = document.querySelector("#envoyer")
let myBtn = document.querySelector('#myBtn')
verrou = document.querySelector('.verrou')


  
    form.addEventListener("submit",function(e){

        e.preventDefault()

        var nom = document.querySelector('#nom').value
        var prenom = document.querySelector('#prenom').value
    
        async function connexion(){
            
        const response = await fetch('http://localhost:3000/',{
            method : "POST",
            headers : {"content-type":"application/json"},
            body : JSON.stringify({
                nom : nom,
                prenom : prenom
            })
        })
            if(response.status===200){
                verrou.style.display='none'

            }
        
    }
    connexion()
    

    

    
    document.addEventListener('keydown', function(event) {
        if ((event.ctrlKey || event.metaKey) && (event.keyCode === 67 || event.keyCode === 86)) {
            event.preventDefault();

            event.preventDefault();
            let triche = document.querySelector('.triche')
            let message = document.querySelector('#message')
            message.innerHTML = "Bon courage pour trouver une excuse au prof"
            triche.style.display = 'flex'
            setTimeout(() => {
                triche.style.display = 'none'
            }, 3000);
            
            async function triche1(){
                response = await fetch('http://localhost:3000/ctrl',{
                    method : "POST",
                    headers : {"content-type" : "application/json"},
                    body : JSON.stringify({
                        nom : nom,
                        prenom : prenom
                    })
                })
            }
            triche1();
            }
        });



        
    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
        let triche = document.querySelector('.triche')
        let message = document.querySelector('#message')
        message.innerHTML = "Poto arrête tu te fait du mal"
        triche.style.display = 'flex'
        setTimeout(() => {
            triche.style.display = 'none'
    }, 3000);
    
    async function triche2(){
        response = await fetch('http://localhost:3000/droit',{
            method : "POST",
            headers : {"content-type" : "application/json"},
            body : JSON.stringify({
                nom : nom,
                prenom : prenom
                })
            })
        }
        triche2()
        })
        
        
    document.body.addEventListener('mouseleave', function() {
            
        let triche = document.querySelector('.triche')
        let message = document.querySelector('#message')
        message.innerHTML = "Tu vas où frère"
        triche.style.display = 'flex'
        setTimeout(() => {
            triche.style.display = 'none'
        }, 3000);
        
        async function triche3(){
            response = await fetch('http://localhost:3000/sortie',{
                method : "POST",
                headers : {"content-type" : "application/json"},
                body : JSON.stringify({
                    nom : nom,
                    prenom : prenom
                })
            })

        }
        triche3()
    });
        
    
    envoyer.addEventListener('click',function(){
    
        window.location.href = "../front/fin.html"
    
    })
    
    
    start = document.getElementById('starting')
    startQCM = document.getElementById('start')

    let timer = document.querySelector('#timer')
    let s = 0
    let m = 5

    
    startQCM.addEventListener('click', function() {
        start.style.display = 'none';
        start.style.backgroundColor = 'none';
        let minute
        let seconde

        setInterval(function(){

            s--
            if (m==0 && s==0){
                envoyer.click()
            }
            if(s==-1){
                m--
                s= 59
            }

            if(s<10){
                seconde = '0' + s
            }else{
                seconde = s
            }
            if(m<10){
                minute = '0' +m
            }else{
                minute= m
            }



        timer.innerHTML = `${minute} : ${seconde}`
            },1000)



        })
        const urlParams = new URLSearchParams(window.location.search);
        const questionsParam = urlParams.get('questions');
        if (questionsParam) {
            const questionsArray = questionsParam.split(';');
            const questionsDiv = document.getElementById('questions');
    
            questionsArray.forEach((question, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.innerHTML = `<h3>Question ${index + 1}:</h3><p>${question}</p><textarea placeholder="Répondez vite" name="message" rows="5" cols="50"></textarea>`;
                questionsDiv.appendChild(questionDiv);
                });
            }
        })






