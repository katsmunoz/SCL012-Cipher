![Logo](images\sigilResize.jpg)

# SIGIL

- SIGIL es una app que permite crear y revelar mensajes avocados a diversos tipos de manifestaciones sociales.

## Enlace deploy

[Sigil](https://katsmunoz.github.io/SCL012-Cipher/src/index.html)


## Usuarios:
La app está dirigida a jóvenes entre 15 - 25 años que requieran organizar diversos eventos de índole social (cacerolazos, marchas, manifestaciones) de manera segura y confidencial, evitando exponerse a situaciones de juicio externo que pongan en peligro tanto la integridad de los usuarios como a la realización del evento en sí.

## Desarrollo del producto:

### Prototipo de baja fidelidad
Sin tener una idea clara sobre mi app, hice un sketch sencillo al que agregué interacción de botones utilizando [Invision](https://www.invisionapp.com/). Este sería mi primer prototipo, el cual contenía 3 pantallas: home (donde el usuario decide qué función desea emplear), pantalla de codificado y pantalla de decodificado.

Ver [Prototipo de baja fidelidad](https://katherinemuoz549352.invisionapp.com/overview/Lady-Cipher-ck23jae7q1q72015z9j00yxyw/screens?v=KJ76S766u65cNCfAUIY7aw%3D%3D&linkshare=urlcopied) en Invision

Pantalla Home

![Primera Pantalla: HOME](images\C1.jpg)

Pantalla Cifrado

![Segunda Pantalla: Codificar](images\C2.jpg)

Pantalla Descifrado

![Tercera Pantalla: Decodificar](images\C3.jpg)

### Prototipo de alta fidelidad
Mi primer prototipo de alta fidelidad surge luego de una encuesta llevada a cabo en mis redes sociales, donde pregunté para qué utilizarían una app que cifrara mensajes.

 La mayoría de las respuestas estaban relacionadas con la necesidad de organizar marchas y cacerolazos, ya que estaba el miedo constante de ser expuestos a represalias o prejuicios de parte de sus contactos. A partir de esto, surgen ideas para el tema de mi app, los colores y el diseño. Con las ideas un poco más claras, decidí utilizar [Figma](https://www.figma.com/) para desarrollar mi prototipo. Decidí enfocarme en usuarios jóvenes, con un rango etario entre 15 - 25 años en promedio, por lo que decidí añadir colores vibrantes y botones que fueran más llamativos.

Ver [Prototipo de alta fidelidad](https://www.figma.com/file/8cYLmCGiHazaMmEqbs40z7/SIGIL?node-id=0%3A1) en Figma

Screenshot prototipo 1

![sigil-figma](images\sigilFigma.jpg)

Después de terminar el diseño de mi app e integrar todas las características desde Figma, decidí realizar el primer test de usabilidad con usuarios reales, para comprobar si realmente se ajusta a sus necesidades en términos de diseño, facilidad de uso y navegabilidad.

Después de recibir el feedback correspondiente, decidí cambiar algunos aspectos del diseño de la página. Lo más comentado fue el hecho de que el usuario no entendía la necesidad de ingresar un número, por lo que cambié la descripción del offset "número de desplazamientos" por "clave numérica" (hace más sentido tener una clave para descifrar un mensaje secreto). Además, decidí centrarlo para enfatizar la relevancia del offset (antes pasaba inadvertido), e integré alertas para que no pudieran llevarse a cabo las funciones de cifrado/descifrado si es que no se han completado los campos del `box de texto izquierdo` o del `offset`.

Sumado a esto, decidí cambiar la descripción de la app que aparece debajo del título, ya que "eventos" quedaba poco claro (se confundía con eventos de Facebook). Para ello, decidí integrar ejemplos concretos para que se entendiera de forma clara el objetivo de la app.

Finalmente, logré incorporar estos cambios al diseño final, junto con las `funciones` listas para cifrar mayúsculas, minúsculas y mantener los espacios. También incorporé un logo y un favecon para darle más identidad a la app.

Screenshot diseño final

![SigilFinal](images\SIGIL-desktop.jpg)

## Desarrollado para:
[Laboratoria](http://laboratoria.la)
    
## Tecnología y lenguaje utilizado:
* HTML5
* CSS
* Javascript (ES6)

## Intrucciónes de uso:

### Para codificar un mensaje:

* Establecer `clave númerica` que indicará el número de desplazamiento para cifrar el mensaje(offset).
* Escribir o pegar el mensaje que se desea cifrar en la caja de texto izquierda.
* Hacer click en el botón `Crear`.
* El mensaje aparecerá en la caja de texto derecha, listo para copiar y compartir.
* Para limpiar el mensaje y refrescar la página, hacer click en el botón `Limpiar`.

### Para decodificar un mensaje:

* Establecer `clave númerica` que indicará el número de desplazamiento para revelar el mensaje cifrado (offset).
* Escribir o pegar el mensaje que se desea descifrar en la caja de texto izquierda.
* Hacer click en el botón `Revelar`.
* El mensaje aparecerá en la caja de texto derecha, listo para copiar y compartir.
* Para limpiar el mensaje y refrescar la página, hacer click en el botón `Limpiar`.

## Enlace deploy
[Sigil](https://katsmunoz.github.io/SCL012-Cipher/src/index.html)