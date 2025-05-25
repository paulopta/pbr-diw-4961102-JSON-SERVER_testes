
//exemplo do código com listagem de mais detalhes

    var parametros = new URLSearchParams(location.search);
    var id = parametros.get("id");

 var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var livro = JSON.parse(xhttp.responseText);       

if(livro){

    document.getElementById("titulo").innerHTML = livro.titulo;
    document.getElementById("id").innerHTML = livro.id;
    document.getElementById("autor").innerHTML = livro.autor;
    document.getElementById("ano").innerHTML = livro.ano;
}else{
    document.getElementById("titulo").innerHTML = "Não Existe";
    document.getElementById("id").innerHTML = "Não Existe";
    document.getElementById("autor").innerHTML = "Não Existe";
    document.getElementById("ano").innerHTML = "Não Existe";    
}

    }
};
xhttp.open("GET", "http://localhost:3000/livros/"+id, true);
xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
xhttp.send();




/*
 var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var json = JSON.parse(xhttp.responseText);
        var parametros = new URLSearchParams(location.search);
        var id = parametros.get("id");
        var livro = json.find(function (elem) { return elem.id==id});

if(livro){

    document.getElementById("titulo").innerHTML = livro.titulo;
    document.getElementById("id").innerHTML = livro.id;
    document.getElementById("autor").innerHTML = livro.autor;
    document.getElementById("ano").innerHTML = livro.ano;
}else{
    document.getElementById("titulo").innerHTML = "Não Existe";
    document.getElementById("id").innerHTML = "Não Existe";
    document.getElementById("autor").innerHTML = "Não Existe";
    document.getElementById("ano").innerHTML = "Não Existe";    
}

    }
};
xhttp.open("GET", "http://localhost:3000/livros", true);
xhttp.setRequestHeader('Content-type','application/json; charset=utf-8');
xhttp.send();

*/




