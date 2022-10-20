# Workshop Interficie Q3 2022: Pruebas de Maquetación

## Descripción Global de las Pruebas de Maquetación

El objetivo de esta prueba es la maquetación de una página sencilla para la cual se provee todo el código menos el módulo de SCSS que se aplicará
a la página principal. El objetivo es crear una SCSS que replique la maquetación y el comportamiento ilustrados en los ejemplos. Cada una de las
pruebas de Maquetación se centrará en algunos aspectos concretos de la misma, y por tanto la forma de evaluar las diferentes pruebas variará ligeramente
según la prueba.

Todas las pruebas asumen lo siguiente:

- Se evaluarán en una versión actualizada de Firefox en Linux
- La resolución en la que se evaluarán será de 1440x1090. No se evaluará el responsiveness excepto en las pruebas que lo requieran explícitamente
- El único archivo que se podrá modificar es la hoja de estilos: un único módulo SaSS que se importará desde el archivo principal de la aplicación

Todas las pruebas se evaluarán según 5 criterios de evaluación, con un valor total de 2 puntos cada uno. El equipo que más puntos tenga en la suma
de todas las pruebas ganará el reto.

Todos los proyectos son aplicaciones de Create-React-App, que se pueden ejecutar con los siguientes comandos desde la raíz:

```
yarn
yarn start
```

## Metodología de las pruebas

Para la realización de las pruebas:

1. En primer lugar se proveerá a todos los miembros del equipo con una copia del proyecto inicial para cada una de las pruebas, y
   a continuación se realizará una descripción breve de cada una de ellas.
2. A continuación, el equipo se dividirá en subequipos, cada uno asignado a una de las pruebas. No se aceptarán más que una entrega
   por cada equipo. Una vez creados los subequipos, la comunicación estará restringida a los miembros del propio subequipo.
3. Cada equipo tendrá 45min para entregar un módulo SCSS correspondiente a cada una de las pruebas. Estos módulos tendrán que tener el
   nombre \*prueba-<numPrueba>-equipo-<numEquipo>.module.scss". Al finalizar el tiempo las pruebas no entregadas contarán como 0 puntos.
4. Las pruebas se evaluarán manualmente por el equipo del workshop, valorándolas según los criterios de entrega de cada una
5. Una vez valoradas, se pondrán en común las valoraciones, y se explicarán los puntos en los que la gente haya fallado más

## Evaluación general de las pruebas

Cada una de las pruebas se puntuará de 0 a 10 basándose en los criterios establecidos en cada prueba. Las puntuaciones total se obtendrá haciendo la media de las tres pruebas.

Todas las pruebas contienen dos criterios comunes:

- **Limpieza del código**: este criterio evaluará el uso de las herramientas que proporciona SaSS para evitar la duplicación de código, constantes, etc, así como la sencillez de las soluciones propuestas.
- **Maquetación general de la página**: en este punto se evaluará hasta qué punto la hoja de estilos proporcionada reproduce fielmente a nivel visual las ayudas visuales que se hayan proporcionado para la prueba (en este punto no se mirarán las distancias exactas en pixels, o colores concretos, sino la apariencia general, i.e.: que estén todos los elementos, colocados donde deben estar, etc...)

## Prueba 1: Blockblog

### Criterios de Evaluación

En esta prueba se evaluarán los siguientes objetivos:

- 3p - Posicionamiento y estructura general de la página
- 5p - Estructura de los elementos de las tarjetas
- 1p - Limpieza del código
- 1p - Maquetación general de la página

## Prueba 2: ROBOTS

### Criterios de Evaluación

En esta primera prueba se evaluarán los siguientes objetivos:

- Ajuste de sombras y bordes
- Superposiciones de elementos
- Transparencias y efectos
- Limpieza del código
- Maquetación general de la página

## Prueba 3: Trivial

### Criterios de Evaluación

En esta prueba se evaluarán los siguientes objetivos:

- Transformaciones de elementos
- Limpieza del código
- Maquetación general de la página
