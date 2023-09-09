p1_name=localStorage.getItem("p1_key");
p2_name=localStorage.getItem("p2_key");
document.getElementById("player1_name").innerHTML=p1_name;
document.getElementById("player2_name").innerHTML=p2_name;
document.getElementById("player_question").innerHTML="Question turn:"+ p1_name;
document.getElementById("player_answer").innerHTML="Answer turn:"+ p2_name;
player1_score=0
player2_score=0
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

function send() {
    word=document.getElementById("word").value;
    word=word.toLowerCase();
    length=word.length;
    secondletter=word.charAt(1);
    lastletter=word.charAt(length-1);
    middleletter=word.charAt(Math.floor(length/2));


    console.log(secondletter,middleletter,lastletter);
    replace_word=word.replace(secondletter,"_");
    console.log(replace_word);
    replace_word=replace_word.replace(middleletter,"_");
    console.log(replace_word);
    replace_word=replace_word.replace(lastletter,"_");
    console.log(replace_word)
    qtag='<h4 id="word_display">Q:'+ replace_word + '</h4>';
    itag='<br> Answer:<input id="answer_input">';
    btag='<br> <br> <button onclick="check_answer()" class="btn btn-success" > Check </button>';
    document.getElementById("output").innerHTML=qtag+itag+btag;
    document.getElementById("word").value="";

}