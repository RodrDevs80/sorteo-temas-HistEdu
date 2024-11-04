# Generador de Temas de Historia Argentina

Este proyecto es una pequeña aplicación web que genera temas de historia argentina de forma aleatoria. Al hacer clic en el botón, el sistema selecciona un tema al azar de una lista predefinida y lo muestra en pantalla. Una vez que se hayan mostrado todos los temas, se reiniciará automáticamente y notificará al usuario.

## Características

- Almacena los temas mostrados en el `localStorage` para evitar repeticiones.
- Ofrece un total de nueve temas relacionados con la historia y la educación en Argentina.
- Muestra una alerta de agotamiento de temas cuando ya se han presentado todos los temas disponibles.
- Muestra una cita motivacional cuando no hay más temas para mostrar.

## Estructura del Código

### Variables y Elementos

- **`numeros`**: Lista de temas ya mostrados, almacenados en el `localStorage`.
- **`numero`**: Almacena el número de tema seleccionado.
- **`generarNumero`**: Botón para generar un tema nuevo.
- **`resultado`**: Elemento HTML para mostrar el tema seleccionado.

### Funciones

- **`generarNumeroRandom(limite)`**:
  - Genera un número aleatorio entre 1 y el límite especificado (en este caso, 10).
  - Comprueba si el número ya se ha mostrado, evitando repeticiones.
  - Alcanza un máximo de nueve temas. Si se supera este límite, se limpia la lista y muestra un mensaje que indica que no hay más temas.
- **`mostrarResultado(elemento, texto, tema)`**:
  - Actualiza el elemento HTML con el tema seleccionado.

### Manejador de Evento

- **Evento de clic en `generarNumero`**:
  - Al hacer clic en el botón, se selecciona un número aleatorio y se utiliza un `switch` para asignar un tema en base al número.
  - Si todos los temas ya han sido mostrados, muestra un mensaje de alerta y una cita motivacional.

## Instrucciones de Uso

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador.
3. Haz clic en el botón de "Generar Número" para obtener un tema.
4. Repite el proceso hasta que todos los temas se hayan agotado.

## Temas Disponibles

1. Cultura y educación en la colonia
2. La formación del sujeto independiente
3. Civilización o barbarie
4. La organización del sistema educativo nacional
5. La fundación del debate pedagógico
6. Del yrigoyenismo a la década infame
7. El peronismo
8. Del golpe de 1955 al golpe de 1976
9. De la dictadura al presente

## Dependencias

- [SweetAlert2](https://sweetalert2.github.io/) para la visualización de alertas al usuario.

## Créditos

Desarrollado por [Tu Nombre].

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
