
function exibe_livros(){
var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(xhttp.responseText);
        var qtd = json.length;
        var x = 0;
        while(x<qtd){
            $("#livros_db").html($("#livros_db").html()+"<li class='list-group-item'> <a href='detalhes.html?id="+json[x].id+"'> "+json[x].id+" - "+json[x].titulo+"</a></li>");
            x++;
        }
    }
};
xhttp.open("GET", "http://localhost:3000/livros", true);
xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
xhttp.send();

}

$(document).ready(function(){

exibe_livros();    

$("#btnGravar").click(function(){

    let livro = {
        id: $("#id").val(),
        titulo: $("#titulo").val(),
        ano: $("#ano").val(),
        autor: $("#autor").val()
}
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 201) {
        console.log(JSON.parse(xhttp.responseText));
        exibe_livros();
    }else{
         console.log(`Error: ${xhttp.status}`);
    }
};
xhttp.open("POST", "http://localhost:3000/livros", true);
xhttp.setRequestHeader('Content-Type', 'application/json');
xhttp.send(JSON.stringify(livro));

});




});

