var scores, roundScore, activePlayer, dice;

scores=[0,0];
roundScore=0;
activePlayer=0;

//dice=Math.floor(Math.random()*6)+1;
console.log(dice);
document.querySelector('#current-'+activePlayer).textContent=dice;

var x=document.querySelector('#score-0').textContent;

console.log(x);

document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';

document.querySelector('.btn-roll').addEventListener('click',function(){
    dice=Math.floor(Math.random()*6)+1;
    var diceDOM0=document.querySelector('.dice');
    diceDOM0.style.display='block';
    diceDOM0.src='https://s3-us-west-2.amazonaws.com/s.cdpn.io/243004/dice-'+dice+'.png';

    var diceDOM2=document.querySelector('.dice2');
    


    if(dice!==1){
        
        roundScore+=dice;
        document.querySelector('#current-'+activePlayer).textContent=roundScore;
    }else{
        //next player
        activePlayer===0? activePlayer=1:activePlayer=0;
        roundScore=0;
        diceDOM.style.display='hide';
        diceDOM2.style.display='block';

        document.getElementById('current-0').textContent='0';
        document.getElementById('current-1').textContent='1';
    
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    alert('000');


});
//document.getElementById('score-0').textContent='0';
//document.getElementById('score-1').textContent='0';

document.getElementById('current-0').textContent='0';
document.getElementById('current-1').textContent='0';
