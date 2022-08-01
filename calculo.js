const productoNormalA = 6.00;
const productoNormalB = 8.50;
const productoNormalC = 13.2;
const productoMayA = 5.50;
const productoMayB = 7.90;
const productoMayC = 11.6;

function calcular(nproductos,tipo){
    console.log('Inicio de la compra de ' + nproductos +' productos del tipo ' + tipo)
    if(nproductos <= 6){
        console.log('Compra a menudeo')
        switch(tipo){
            case 'A':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoNormalA +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
            case 'B':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoNormalB +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
            case 'C':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoNormalC +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
        }
    }else{
        console.log('Compra a Mayoreo')
        switch(tipo){
            case 'A':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoMayA +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
            case 'B':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoMayB +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
            case 'C':
                var compraNormal = 'Precio total de la compra = '+ nproductos * productoMayC +  '$ del producto '+tipo
                console.log(compraNormal);
                break;
        }
    }
    return console.log('Compra finalizada')
}


calcular(7,'A');
