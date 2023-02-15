
#  ADD TO CART INFO
El componente  add-to-cart-info es una ventana emergente que se muestra cada vez que se agrega un producto al carrito en la pagina de detalle del producto.


![image](https://user-images.githubusercontent.com/107804493/219093229-0076b651-d548-48d3-ae25-df0359dcb6af.png)


## Configuración
 ### Paso 1 - Configuración Básica 
- verificar en el package.json en la carpeta raiz y en la carpeta react
- name: debe tener el nombre del componente a usar
- version: 0.01
- ![image](https://user-images.githubusercontent.com/107804493/219093587-77b5fe4c-b257-48c3-b827-da87a01a12a1.png)


### Paso 2 - Clonación del repositorio
- Clona el repositorio a tu maquina local
- ![image](https://user-images.githubusercontent.com/107804493/219094687-315319d2-86e4-4eb2-bd82-b0afe1f9930c.png)

### Paso 3 - Editar el Manifest.json 
- Deberas editar el campo vendor que se refiere al  cliente que se este trabajando y en name el nombre del componente  custom
- ![image](https://user-images.githubusercontent.com/107804493/219093750-72571476-1658-42c3-9c0c-dbb2e25feaa3.png)


### Paso 4 - Instalar apps necesarias
 Nos Ubicamos en la carpeta react
```bash
cd react
```
Se ejecuta yarn para que se instalen las dependencias necesarias para que react funcione correctamente
```bash
yarn
```



### Paso 5 - Desinstalar el store-theme predeterminado
Al entrar por primera vez a la tienda, se tendra un store-theme inicial que debera ser desinstalado
- Ejecutamos vtex list para ver las apps instaladas
- identificamos  vtex.store-theme@0.0.1 y copiamos
- Ejecutamos 
```bash
vtex unistall vtex.store-theme@0.0.1
 ```
### Paso 6 - Ejecute un preview de la tienda
- Una vez ya hayas hecho login y hayas creado tu workspace para ejecutar tu tienda, deberas ejecutar vtex link en el workspace donde quieras usar tu componente custom
```bash
vtex link
```
Este permitira sincronizar los archivos de tu computadora con una direccion web que te permitira visualizar la pagina en el navegador.
- Luego ejecutaras 
```bash
vtex browse
```
Este comando sirve para abrir el navegador en la url destinada para visualizar tu tienda


### Dependencies
- manifest.json
- ![image](https://user-images.githubusercontent.com/107804493/219094102-446e17a7-7539-4191-8f6f-29f854734bf5.png)
- package.json en la carpeta raiz
```bash
 "dependencies": {
    "vtex.checkout-resources": "0.x",
    "vtex.order-manager": "0.x",
    "vtex.product-context": "0.x",
    "vtex.css-handles": "0.x"
  },
```
- package.json en la carpeta react
```bash
"dependencies": {
    "@vtex/css-handles": "^1.1.3",
    "apollo-client": "^2.6.8",
    "react": "^16.12.0",
    "react-apollo": "^3.1.3",
    "react-dom": "^16.12.0",
    "react-intl": "^3.12.0"
  },
  "devDependencies": {
    "@apollo/react-testing": "^3.1.3",
    "@types/jest": "^25.1.4",
    "@types/node": "^13.9.8",
    "@types/react": "^16.9.31",
    "@vtex/test-tools": "^3.3.2",
    "@vtex/tsconfig": "^0.4.4",
    "apollo-cache-inmemory": "^1.6.5",
    "graphql": "^14.6.0",
    "typescript": "3.9.7"
  }
  ```



### Contributors
1. MAICOL ALEXIZ ORITZ ADD TO CART INFO
2. Desde forma indirecta con sus consejos y recomendaciones, mis tutores Luis Felipe Cerero García, David Mosquera y Julio César Arroyaadd-to-cart-info ve 
