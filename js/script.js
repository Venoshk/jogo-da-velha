let x = document.querySelector('.x');
let o = document.querySelector('.o');
let boxes = document.querySelectorAll('.box')
let buttons = document.querySelectorAll('#btn-container button')
let messageContainer = document.querySelector('#message')
let messageText = document.querySelector('#message p')
let secondPlayer;

//Contador de Jogadas
let player1 = 0;
let player2 = 0; 

//adicinando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++){
    
    //quando alguem clicar na caixa
    boxes[i].addEventListener('click', function(){

        let el = checkEl(player1, player2);

        //Verificando se já tem X ou O 
        if(this.childNodes.length == 0){
            let cloneEl = el.cloneNode(true);

            this.appendChild(cloneEl)

            //Computar Jogada
            if(player1 == player2){
                player1++

                if(secondPlayer === 'ia-player'){
                    //função executar IA
                    computerPlayer();
                    player2++;
                }
            }else{
                player2++
            }
            //checar quem venceu
            checkWinCodition();
        }

    })
}


//Eventos para escolher se é 2 player ou IA
for(let i = 0; i < buttons.length; i++){

    buttons[i].addEventListener('click', function(){

        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        setTimeout(() => {
            const containe = document.querySelector('#container')
            containe.classList.remove('hide')
        }, 500);
    })
}

//Ver quem vai jogar
const checkEl = (player1, player2) =>{
    
    if(player1 == player2){
        //x
        el = x
    }else{
        //o
        el = o
    }

    return el;
}

//Ve quem ganhou
const checkWinCodition = () =>{

    let b1 = document.querySelector('#block-1');
    let b2 = document.querySelector('#block-2');
    let b3 = document.querySelector('#block-3');
    let b4 = document.querySelector('#block-4');
    let b5 = document.querySelector('#block-5');
    let b6 = document.querySelector('#block-6');
    let b7 = document.querySelector('#block-7');
    let b8 = document.querySelector('#block-8');
    let b9 = document.querySelector('#block-9');

    //Horizontal

    if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b2child = b2.childNodes[0].className;
        let b3child = b3.childNodes[0].className;

        if(b1child === 'x' && b2child === 'x' && b3child === 'x'){
            //x
            declareWinner('x')
        }else if(b1child === 'o' && b2child === 'o' && b3child === 'o'){
            //o
            declareWinner('o')
        }
    }

    if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){

        let b4child = b4.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b6child = b6.childNodes[0].className;

        if(b4child === 'x' && b5child === 'x' && b6child === 'x'){
            //x
           declareWinner('x')
        }else if(b4child === 'o' && b5child === 'o' && b6child === 'o'){
            //o
           declareWinner('o')
        }
    }

    if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){

        let b7child = b7.childNodes[0].className;
        let b8child = b8.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b7child === 'x' && b8child === 'x' && b9child === 'x'){
            //x
            declareWinner('x')
        }else if(b7child === 'o' && b8child === 'o' && b9child === 'o'){
            //o
           declareWinner('o')
        }
    }

    //Vertical
    if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b4child = b4.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b1child == 'x' && b4child == 'x' && b7child == 'x'){
            //x
            declareWinner('x')
        }else if(b1child == 'o' && b4child == 'o' && b7child == 'o'){
            //o
           declareWinner('o')
        }
    }

    if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){

        let b2child = b2.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b8child = b8.childNodes[0].className;

        if(b2child === 'x' && b5child === 'x' && b8child === 'x'){
            //x
            declareWinner('x')
        }else if(b2child === 'o' && b5child === 'o' && b8child === 'o'){
            //o
           declareWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){

        let b3child = b3.childNodes[0].className;
        let b6child = b6.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b3child === 'x' && b6child === 'x' && b9child === 'x'){
            //x
            declareWinner('x')
        }else if(b3child === 'o' && b6child === 'o' && b9child === 'o'){
            //o
           declareWinner('o')
        }
    }

    //Diagonal
    if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){

        let b1child = b1.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b9child = b9.childNodes[0].className;

        if(b1child == 'x' && b5child == 'x' && b9child == 'x'){
            //x
            declareWinner('x')
        }else if(b1child == 'o' && b5child == 'o' && b9child == 'o'){
            //o
           declareWinner('o')
        }
    }

    if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){

        let b3child = b3.childNodes[0].className;
        let b5child = b5.childNodes[0].className;
        let b7child = b7.childNodes[0].className;

        if(b3child == 'x' && b5child == 'x' && b7child == 'x'){
            //x
            declareWinner('x')
        }else if(b3child == 'o' && b5child == 'o' && b7child == 'o'){
            //o
           declareWinner('o')
        }
    }

    //Deu velha
    let counter = 0
   
    for(let i = 0; i < boxes.length; i++){
        if(boxes[i].childNodes[0] != undefined){
            counter++
        }
    }

    if(counter === 9){
       declareWinner(`Velha`)
    }
}

//Limpar o jogo, declara o vencedor e atualizar o placar
const declareWinner = (winner) =>{
    let scoreboardX = document.querySelector(".scoreboard-1")
    let scoreboardO = document.querySelector(".scoreboard-2")
    let msg = '';

    if(winner == 'x'){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = `Player 1 X wins!`
    }else if(winner == 'o'){
        scoreboardO.textContent = parseInt(scoreboardO.textContent) +1
        msg = `Player 2 O wins!`
    }else{
        msg = "It's a draw!"
    }

    messageText.innerHTML = msg;
    messageContainer.classList.remove('hide');

    //Escondendo
    setTimeout(() =>{
        messageContainer.classList.add('hide')
    }, 2000)

    //Zera as Jogadas
    player1 = 0
    player2 = 0

    //Remove X e O
   let boxesToRemove = document.querySelectorAll('.box div');

   for(let i = 0 ; i < boxesToRemove.length; i++){
    boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);
   }

}

//Executar a lógica da joga do CPU
const computerPlayer = () => {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    for(let i = 0 ; i < boxes.length; i++){
        
        //criando numero aleatorio de 0 a 5 
        let randomNumber = Math.floor(Math.random() * 5);

        //Só preencher se o filho estiver vazio
        if(boxes[i].childNodes[0] === undefined){
            //Verificando se a caixa esta vazia para adicionar um O 
            if(randomNumber <= 5){
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
            //Cheacagem de quantas estão preencchidas
            }else{
                filled++;
            }
        }

        if(counter === 0 && filled < 9){
            computerPlayer();
        }
        
    }
