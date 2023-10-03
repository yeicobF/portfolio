// Update position of background on mouse move.
// Based on Brittany Chiang's website: https://brittanychiang.com/
const updateBackgroundOnMouseMove = (event: MouseEvent): void => {
  // Selecciona el elemento en el que deseas escuchar los eventos de ratón.
  const body = document.body

  // Escucha el evento "mousemove" en el elemento seleccionado.
  // Obtiene las coordenadas del cursor en relación con el elemento.
  const x = (event.clientX / body.clientWidth) * 100
  const y = (event.clientY / body.clientHeight) * 100

  const ORIGINAL_GRADIENT =
    "radial-gradient(800px at 10% 15%, rgba(192, 13, 224, 0.30), transparent 80%)"
  const trackingGradient = `radial-gradient(600px at ${x}% ${y}%, rgba(192, 13, 224, 0.15), transparent 90%)`

  // Actualiza el fondo con las coordenadas calculadas.
  body.style.background = `${ORIGINAL_GRADIENT}, ${trackingGradient}`
}

// Escucha el evento "mousemove" en el elemento seleccionado.
document.body.addEventListener("mousemove", updateBackgroundOnMouseMove)
