function wordDensity(){
    var texto = document.getElementById('text').value;
        
        
       startWhite = /^[]+/;
        endWhite = /$/;
        variusWhite = /[]+/g;
        texto = texto.replace(startWhite, '');
        texto = texto.replace(endWhite, '');
        texto = texto.replace(variusWhite, '');
        var textoDivided = texto.split(' ');
        var numOfWords = textoDivided.length;
        if(numOfWords < 300){
        document.getElementById('words').innerHTML = '<i class="far fa-thumbs-down"></i>' + " El número de palabras es " + numOfWords +
        ". Debes agregar más contenido, el mínimo recomendado para un artículo es de 300 palabras.";
        }
        else{
            document.getElementById('words').innerHTML = '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i> ' + ' El número de palabras es: '
            + numOfWords + ' El texto cumple con la cantidad mínima recomendada' ;
        }
        var count = 0;
        var palabraClave = document.getElementById('keyword').value;
        for ( i in textoDivided){
            if (textoDivided[i]==palabraClave){
                count++;
            }
        }
    
        var densidad = Math.ceil((count/numOfWords)*100);
        if (densidad > 0){
        document.getElementById('key').innerHTML= '<i class="fa fa-thumbs-o-up" aria-hidden="true"></i>' + ' La densidad de palabras clave es:  '
         +  densidad+"%";
        }
        else{
            document.getElementById('key').innerHTML = '<i class="far fa-thumbs-down"></i>' + 
            ' La palabra clave que ingreso no se encuentra en el texto';
        }
}

