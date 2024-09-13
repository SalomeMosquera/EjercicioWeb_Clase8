const evaluar = () => {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    let msj = num1 < num2 && num1 < num3? (document.getElementById("resultado").innerText = `El número menor es el: ${num1}`) 
    :num2 < num1 && num2 < num3? (document.getElementById("resultado").innerText = `El número menor es el: ${num2}`)
    :(document.getElementById("resultado").innerText = `El número menor es el: ${num3}`);

    num1 == num2 || num1 == num3 ? (document.getElementById("igual").innerText = `El número que se repite es el: ${num1}`)
    : num2 == num1 || num2 == num3? (document.getElementById("igual").innerText = `El número que se repite es el: ${num2}`)
    : num3 == num1 || num3 == num2? (document.getElementById("igual").innerText = `El número que se repite es el: ${num3}`)
    : (document.getElementById("igual").innerText = `No hay numeros repetidos`);
  };