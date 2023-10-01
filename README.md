## Ejecución del parcial
Para la ejecución de este parcial primero debe instalar las librerías necesarias para poder ejecutar la aplicación de manera correcta haciendo uso del comando <code>npm install</code>. Una vez se terminen de instalar las librerías, para poder visualizar la aplicación, se debe ejecutar el comando <code>npm run start</code>, esto abrirá su navegador y mostrará la aplicación. Los comandos anteriores se deben de ejecutar en una terminal estando dentro de la carpeta del proyecto (parcial1).

## Librerías
Se usaron las siguientes librerías para el desarrollo de esta aplicación

- <code>React</code>: integra html, JS y CSS para facilitar el desarrollo.
- <code>react-bootstrap</code> y <code>bootstrap</code>: facilita y mejora la parte visual de la aplicación.
- <code>react-router-dom</code>: enrrutamiento de las páginas.
- <code>i18n</code> para la traducción de texto (internacionalización).

## Desarrollo
La aplicación fue desarrollada usando react por su facilidad de uso. Se decidó, en consecuencia, hacer uso de bootstrap para mejorar el aspecto visual de la aplicación, además de que es igualmente fácil de usar. Sin embargo, también se usaron cosas de CSS puro para embellecer más la aplicación. Para lograr la internacionalización se optó por el uso de la librería i18n para la traducción de texto (español-inglés).

La aplicación cuenta con un *Log In* que realiza verificaciones sobre el email y la contraseña del usuario. Una vez logueado, se muestran un listado de partes de diferentes carros. Al hacer click en alguna "card" se despliega el detalle de la parte selccionada. 

Para cambiar el idioma entre español e inglés se debe hacer click en el botón ubicado en la parte superior derecha donde se muestra una bandera.
