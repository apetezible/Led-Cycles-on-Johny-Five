# Led Cycles on Johny-Five

## Abstract
En este específico proyecto, voy a hacer que dos Leds parpadeen como una Barra de Luces de un Carro de Policía. Para programar una placa Arduino con el Firmware Standard Firmata mediante un Servidor creado con Node.js en vez de IDE. Voy a usar la librería Johnny-Five. 

## Introducción
Para completar mi estudio del Curso de Programación Básica, ya con unos conocimiéntos básicos del Modelo Cliente Servidor. Se vuelve necesario, como es costumbre, hacer un proyecto que lleve la Teoría al Plano Material. Resuelvo entonces, hacer un Servidor con Node.js que se comunique con un puerto USB y por medio de el se comunique con una placa Arduino. 

## Métodos
Las placas Arduino tienen en ellas un Firmware por defecto que hace posible una comunicación de un PC con la Placa para programarla. Esto demanda entonces un Firmware distinto que tenga la facultad de recibir instrucciones de un Servidor, Instalaré entonces el Standard Firmata para Arduino desde IDE. Para enviar código JavaScript que pueda interpretar Arduino por medio de un Servidor Node.js es necesario instalar la librería Johnny-Five. 
Hablando puntualmente del código, se crearán dos objetos Led con los parámetros 9 y 13 respectivamente. Hay que aclarar que se debe especificar en el Setup del código el Puerto USB por el que está conectada la placa. En este caso es COM10. Con esto hecho usaré una funcion recursiva que encienda y apague cada uno de los Leds en el momento preciso, este momento se determina usano el método de Board ".wait(ms, function())".
