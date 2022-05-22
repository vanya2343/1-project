window.onload = function(){
    
    

    
    fetch('JSON/questions.json')
    .then(response => response.json())
    .then(function(quiz){
        console.log(quiz);


        let result = [];
        let step = 0;

        function showQuestion(questionNumber){
            if(step == 0){
                document.getElementById("prBtn").style.display = 'none';
            }else{
                document.getElementById("prBtn").style.display = 'inline-block';
            }
            document.querySelector(".welcome").innerHTML = quiz[questionNumber]['q'];
            let answer = ''
            for (let key in quiz[questionNumber]['ans']){
                answer += `<li data-v=${key} class="answer-variant">${quiz[questionNumber]['ans'][key]}</li>`
            }
            document.querySelector(".answer").innerHTML = answer;
        }
    
        document.onclick = function (event){
            
            event.stopPropagation();
            if(event.target.classList.contains("answer-variant") && step < quiz.length ){
                result.push(event.target.dataset.v);
                step++;
                if(step >= quiz.length){
                    sessionStorage.setItem('answers',result);
                    window.location.href = "/result.html";

                }
                console.log(result);
            }
            if(event.target.classList.contains("prev") && step > 0 ){
                step--;
                result.pop();
                console.log(result);
            }
            
            
            
            
            showQuestion(step)
        }
        
        showQuestion(step)
    });

    
    
 
    
    
}