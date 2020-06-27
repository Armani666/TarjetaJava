function generar(){
    document.getElementById("resul").style.display="block";
    
    var primero = document.getElementById("titulon").value;
    document.getElementById("primero").innerHTML = primero;

    var segundo= document.getElementById("subtitulon").value;
    document.getElementById("segundo").innerHTML= segundo;

    var tercero= document.getElementById("nombreson").value;
    document.getElementById("tercero").innerHTML= tercero;

    var textolong= document.getElementById("mensajon").value;
    document.getElementById("textolong").innerHTML= textolong;


    var i;

    var sb = document.getElementsByName("opcion");
    var fk = document.getElementsByName("Ab");
    var wt = document.getElementsByName("Sc");

    for(i=0; i<sb.length; i++)
    {
        if (sb[i].checked){
            var w= sb[i].value;
        }

        
    }

    for(i=0; i<fk.length; i++)
    {
        if (fk[i].checked){
            var r= fk[i].value;
        }

        
    }

    for(i=0; i<wt.length; i++)
    {
        if (wt[i].checked){
            var o= wt[i].value;
        }

        
    }

    switch (w){
        case 'sv':
            document.getElementById("temple").src="../img/FELIZ CUMPLEAÑOS.png";
            break;

        case 'fc':
            document.getElementById("temple").src="../img/sanva.png";
            break;

        case 'mt':
            document.getElementById("temple").src="../img/motivacional.png";
            break;
    }

    switch(r){
        case 'sb':
            document.getElementById("imagen").src="../img/amor.svg";
            break;

        case 'fk':
            document.getElementById("imagen").src="../img/cumpleanos.svg";
            break;

        case 'wt':
            document.getElementById("imagen").src="../img/moti.svg"
            break;
    }

    switch (o){
        case'Nrj':
            document.getElementById("resul").style.backgroundColor="#e67e22";
        break;

        case'Mrd':
            document.getElementById("resul").style.backgroundColor="#8e44ad";
        break;

        case'Rj0':
            document.getElementById("resul").style.backgroundColor="#c0392b";
        break;
    }
    
}