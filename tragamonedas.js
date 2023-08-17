/*DESGLOSAR EL PROGRAMA QUE QUIERO CREAR

cantidad de monedas = cantidad de tiros

acumular las partidas ganadas

generar numeros random para jugar una tirada

*/


let cantidadMonedas;
let cantidadTiros;
let ganados = 0;

alert("Bienvenido a nuestro tragamonedas");


while(true){
    cantidadMonedas = prompt("Ingrese una cantidad de monedas (máximo 10 monedas)");

        if(cantidadMonedas >=1 && cantidadMonedas <= 10){
            alert(`Ya puede jugar! Tiene ${cantidadMonedas} tiros`);

            for(cantidadTiros = 0; cantidadTiros < cantidadMonedas; cantidadTiros++){

                let num1 = Math.floor(Math.random() * 3) + 1;
                let num2 = Math.floor(Math.random() * 3) + 1;
                let num3 = Math.floor(Math.random() * 3) + 1;

                    if(num1 === num2 && num1 === num3){
                        alert(`${num1} ${num2} ${num3} \nGanaste esta tirada!` );
                        ganados++;
                    }else{

                        alert(`${num1} ${num2} ${num3} \nSeguí paraticipando!`);
                    }
            }
            if(ganados > 2){
                alert(`Felicidades! Ganaste ${ganados} veces!`);
            }else{
                alert("mejor suerte la proxima vez ");
            }
            break;
        }else{
            alert("Ingrese una cantidad válida!");
            continue;
        }
}
