window.addEventListener("load",()=>{
    var botonAgregar = document.getElementById("btnAgregar");
    var tabla = document.getElementById("miTabla");
    var miSelect = document.getElementById("selectProducto");
    var inputCantidad = document.getElementById("inputCantidad");
    var inputPU = document.getElementById("inputPrecio");
    var inputTotal = document.getElementById("inputTotal");

    botonAgregar.addEventListener("click",()=>{
        console.log(miSelect.options[miSelect.selectedIndex]);
        console.log(inputCantidad.value);
        console.log(inputPU.value);

        var fila = document.createElement("tr");
        var columnaProducto = document.createElement("td");
        var columnaCantidad = document.createElement("td");
        var columnaPU = document.createElement("td");
        var columnaTotal = document.createElement("td");

        columnaProducto.innerHTML = miSelect.options[miSelect.selectedIndex].innerHTML;
        columnaCantidad.innerText = inputCantidad.value;
        columnaPU.innerHTML = inputPU.value;
        columnaTotal.innerHTML = parseFloat(inputCantidad.value)*parseFloat(inputPU.value);
        
        inputTotal.value = parseFloat(inputCantidad.value)*parseFloat(inputPU.value);
        console.log(columnaTotal.innerHTML);

        //Insertar
        fila.append(columnaProducto);
        fila.append(columnaCantidad);
        fila.append(columnaPU);
        fila.append(columnaTotal);
        tabla.append(fila);
    });

    inputCantidad.addEventListener("keyup",()=>{
        inputTotal.value = parseFloat(inputCantidad.value)*parseFloat(inputPU.value);
    });
    
    inputPU.addEventListener("keyup",()=>{
        inputTotal.value = parseFloat(inputCantidad.value)*parseFloat(inputPU.value);
    });
});
