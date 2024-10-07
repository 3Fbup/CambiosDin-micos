// Seleccionamos los elementos del DOM
// TIP: Usa 'getElementById' para seleccionar los botones y 'querySelectorAll' para seleccionar los divs
const changeColorBtn = document.getElementById('change-color-btn') as HTMLButtonElement;
const changeTextBtn = document.getElementById('change-text-btn') as HTMLButtonElement;
const boxes = document.querySelectorAll('.box') as NodeListOf<HTMLDivElement>;

let estadotexto = true;

/**
 * Función para cambiar el color de las cajas.
 * TIP: Usa un bucle (for o forEach) para recorrer todas las cajas y cambiar su color.
 * Recuerda que puedes modificar el estilo de un elemento accediendo a su propiedad 'style'.
 */
function changeBoxColors(): void {
    console.log('entro');

  // Completa aquí el código para cambiar el color de las cajas.
  // TIP: Puedes usar una condición (if-else) para verificar el color actual y cambiarlo.
  for (let i = 0; i < boxes.length; i++) {

    const box = boxes[i];

    if(!box.style.backgroundColor){
        box.style.backgroundColor = 'lightgray'
    }

    if (box.style.backgroundColor === 'lightgray'){
        box.style.backgroundColor = 'red'
    }
    else{
         box.style.backgroundColor = 'lightgray'
    }
    // TIP: Verifica si el color es 'lightgray', si es así cámbialo a otro color (ej. 'lightblue')
    // Si no, cámbialo de nuevo a 'lightgray'.
  }
}

/**
 * Función para cambiar el texto de las cajas.
 * TIP: Al igual que en la función anterior, recorre todas las cajas y cambia el contenido de texto.
 */
function changeBoxText(): void {
  // Completa aquí el código para cambiar el texto de las cajas.
  // TIP: Usa 'textContent' para cambiar el texto dentro de cada caja.
  for (let i = 0; i < boxes.length; i++) {
    const box = boxes[i];
    // Aquí deberías cambiar el texto de cada caja a algo como 'Nuevo Texto' + el número de caja.
    if(estadotexto){
      box.textContent = 'Box' + i.toString();
    }else{
      box.textContent = 'Caja' + i.toString();
    }
  }

  estadotexto = !estadotexto;

}

// Asignar eventos a los botones
// TIP: Usa 'addEventListener' para asociar las funciones anteriores a los botones.
changeColorBtn.addEventListener('click', changeBoxColors);
changeTextBtn.addEventListener('click', changeBoxText);