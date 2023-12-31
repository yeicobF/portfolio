// Update position of background on mouse move.
// Based on Brittany Chiang's website: https://brittanychiang.com/
const updateBackgroundOnMouseMove = (event: MouseEvent): void => {
  // Selecciona el elemento en el que deseas escuchar los eventos de ratón.
  const body = document.body

  // Escucha el evento "mousemove" en el elemento seleccionado.
  // Obtiene las coordenadas del cursor en relación con el elemento.
  const x = (event.pageX / body.clientWidth) * 100
  const y = (event.pageY / body.clientHeight) * 100

  // const ORIGINAL_GRADIENT =
  //   "radial-gradient(800px at 10% 15%, rgba(192, 13, 224, 0.05), transparent 80%)"
  const trackingGradient = `radial-gradient(600px at ${x}% ${y}%, rgba(0, 76, 255, 0.1), transparent 80%)`

  // Actualiza el fondo con las coordenadas calculadas.
  body.style.background = trackingGradient
}

// Escucha el evento "mousemove" en el elemento seleccionado.
document.body.addEventListener("mousemove", updateBackgroundOnMouseMove)
