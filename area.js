function area(figura,b,h){
    console.log('Calculo del area de la figura '+ figura)
        switch(figura){
            case 'cuadrado':
                var resultado = b*h
                console.log('El resultado es = '+ resultado +' centimetros cuadrados');
                break;
            case 'rectangulo':
                var resultado = b*h
                console.log('El resultado es = '+ resultado +' centimetros cuadrados');
                break;
            case 'triangulo':
                var resultado = (b*h)/2
                console.log('El resultado es = '+ resultado +' centimetros cuadrados');
                break;
        }
}




area('rectangulo',5,3);