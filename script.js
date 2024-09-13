const evaluar = () => {
    const num1 = prompt("Ingresa un número positivo");
    const num2 = prompt("Ingresa un número positivo");
    const num3 = prompt("Ingresa un número positivo");

    let msj = num1 < num2 && num1 < num3? (document.getElementById("resultado").innerText = `El número menor es ${num1}`) 
    :num2 < num1 && num2 < num3? (document.getElementById("resultado").innerText = `El número menor es ${num2}`)
    :(document.getElementById("resultado").innerText = `El número menor es ${num3}`);

    num1 == num2 || num1 == num3 ? (document.getElementById("igual").innerText = `El número que se repite es el: ${num1}`)
    : num2 == num1 || num2 == num3? (document.getElementById("igual").innerText = `El número que se repite es el: ${num2}`)
    : num3 == num1 || num3 == num2? (document.getElementById("igual").innerText = `El número que se repite es el: ${num3}`)
    : (document.getElementById("igual").innerText = `No hay numeros repetidos`);
       


  };