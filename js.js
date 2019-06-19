function ReloadPage(){
    window.location.reload();
}
var memory_massive = ['A','A','B','B','C','C','D','D','E','E','X','X'];
var memory_values = [];
var memory_card_ids = [];
var card_flipped = 0;
Array.prototype.memory_card_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}
function LoadBoard(){
    card_flipped = 0;
    var output = '';
    memory_massive.memory_card_shuffle();
    for(var i = 0; i < memory_massive.length; i++){
        output += '<div id="card_'+i+'" onclick="memoryFlipCard(this,\''+memory_massive[i]+'\')"></div>';
    }
    document.getElementById('memory_board').innerHTML = output;
}
function memoryFlipCard(card,val){
    if(card.innerHTML == "" && memory_values.length < 2){
        card.style.background = 'white';
        card.innerHTML = val;
        if(memory_values.length == 0){
            memory_values.push(val);
            memory_card_ids.push(card.id);
        } else if(memory_values.length == 1){
            memory_values.push(val);
            memory_card_ids.push(card.id);
            if(memory_values[0] == memory_values[1]){
                card_flipped += 2;
                // Clear 
                memory_values = [];
                memory_card_ids = [];          
            } else {
                function flip2Back(){
                    // Flip the 2 cards back over
                    var card_1 = document.getElementById(memory_card_ids[0]);
                    var card_2 = document.getElementById(memory_card_ids[1]);
                    card_1.style.background = 'gray';
                    card_1.innerHTML = "";
                    card_2.style.background = 'gray';
                    card_2.innerHTML = "";
                    // Clear both arrays when failed
                    memory_values = [];
                    memory_card_ids = [];
                }
                setTimeout(flip2Back, 1000);
            }
        }
    }
}