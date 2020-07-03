# Headless Drupal + React (Basic Demo)

_Proyecto realizado en el taller impartido por Josué Jaramillo para Ingeniería de Software UDLA, contempla aspectos básicos de Headless Drupal y React._

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._


### Pre-requisitos 📋

_- Un servidor php local y base de datos MySQL, recomendado [XAMPP](https://www.apachefriends.org/es/index.html)._

_- [Node.js](https://nodejs.org/es/)._



### Instalación 🔧

_En primer lugar, la instancia de Drupal se encuentra en el siguiente enlace de Google Drive, deberán [descargarlo](https://drive.google.com/file/d/1Pa8Ob_5dVkf_Zw-ElpIwrRr0tyJDasps/view?usp=sharing)._

_Luego descomprimirlo y colocarlo en la carpeta htdocs, si están usando Xampp en Windows, la ruta es:_

```
C:\xampp\htdocs\
```

_Después, importar la base de datos MySQL correspondiente a la instancia de Drupal, descarga el script [aquí](https://drive.google.com/file/d/1sc1rnuhbc-o-G3L4n96hhJccsxEaCVCs/view?usp=sharing)._

_En caso de ocurrir algún error durante la importación, tener en cuenta que el tamaño de la base puede superar el límite establecido por defecto, por lo cual se recomienda importar mediante línea de comandos o editar las configuraciones necesarias para hacerlo mediante phpMyAdmin. [Leer...](https://stackoverflow.com/questions/33698579/phpmyadmin-import-error-mysql-server-has-gone-away-unrecognized-keyword)_


_Para React, Clonar el repositorio e instalar las dependencias_

```
git clone https://github.com/josuews303/HeadlessDrupal.git
cd HeadlessDrupal
npm install
npm start
```

_Si el proceso se ha realizado correctamente, la página debería estar funcionando, caso contrario revisar los posibles errores de comunicación mediante la consola en el inspector del navegador._

## Configuraciones adicionales ⚙️

_Trusted Host está activado como ejemplo de seguridad, actualmente se tiene las configuraciones óptimas para XAMPP establecidas, leer la [documentación](https://www.drupal.org/docs/installing-drupal/trusted-host-settings) en caso de requerir cambios._

_La base de datos está con la configuración por defecto de XAMPP, en caso de necesitar otro usuario, contraseña, o importar la base con otro nombre, estos cambios se deben realizar en el siguiente archivo:_

```
C:\xampp\htdocs\drupal\sites\default\settings.php
```

_De igual manera, los permisos otorgados son los usados en el ejemplo, cualquier caso de problemas relacionados con CORS se puede resolver especificando los permisos necesarios en el siguiente archivo:_

```
C:\xampp\htdocs\drupal\core\core.services.yml
```

_Finalmente, cuando se realizan ciertos cambios, Drupal suele necesitar que se limpie la caché, lo cual se puede realizar facilmente con el botón Clear all caches. Lo podemos encontrar en nuestro proyecto en la url:_

```
http://localhost/drupal/admin/config/development/performance
```

## Construido con 🛠️

_Menciona las herramientas que utilizaste para crear tu proyecto_

* [Drupal](https://www.drupal.org/) - CMS utilizado.
* [React](https://es.reactjs.org/) - Framework Web usado.


## Autor ✒️

* **Josué Jaramillo** - [josuews303](https://github.com/josuews303)

---
⌨️ con ❤️ por [josuews303](https://github.com/josuews303) 😊
