let nav = document.querySelectorAll("nav");

let click = document.getElementById("Detail-info");
let info = document.getElementById("Detail");

let kondisional = 0;

click.onclick = function(){detailInfo()};

function detailInfo() {
    if(kondisional == 0){
        kondisional++;
        console.log(kondisional);
        info.innerHTML = "<li><pre>Tanggal Lahir  : 24 - 02 - 2002</pre></li>";
        info.innerHTML += "<li><pre>Hobi                : Olahraga</pre></li>";
        info.innerHTML += "<li><pre>Motto              : Jangan pernah takut untuk mencoba</pre></li>"
    }else{
        kondisional--;
        console.log(kondisional);
        info.innerHTML = "";
    }
}