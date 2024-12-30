# 🏢 Sistemas-de-Gestion-empresarial-ERP-CRM
Proyecto creado en clase 

# 💼 Proyecto ERP

Este repositorio alberga los ejercicios desarrollados en clase para la creación de un ERP. Cada carpeta representa una tarea y contiene los archivos correspondientes.

## 📊 Tarea 2: Modelo E/R para la BD del ERP

**Enunciado:**

Comenzamos con nuestro proyecto de ERP, enfocado a nuestra empresa en el que vamos a aportar el modelo de la BD en formato Entidad/Relación, reflejando las entidades y relaciones implicados en los procesos de compras, ventas y de gestión de almacén.

Este modelo lo vamos a realizar de una empresa informática que se dedica a vender equipos informáticos y a dar servicios varios (programación, redes, ...).

Antes de comenzar el ERP tenemos que desarrollar el modelo entidad/relación que refleje la estructura de la base de datos. Para ello debemos contemplar los procesos de compra de materiales a los proveedores, la fabricación de equipos (este apartado lo dejaremos para más adelante) y la venta de materiales y servicios a los clientes. Hay que considerar que debemos contemplar el control de los proveedores, clientes y productos/servicios.

De cada cliente y proveedor, reflejar los datos mínimos (código, nombre, NIF, dirección, población, teléfono, mail). Si estimáis necesario alguno más, se puede añadir.

De un producto y/o servicio, el código, nombre, precio de compra, precio de venta, IVA y lo que estimes necesario.

De las compras y ventas, como mínimo las facturas con la cabecera y el detalle o líneas (podéis ver en la grabación la explicación).

También hay que gestionar a los empleados de la empresa, con su código de empleado, nombre, correo electrónico, teléfono. Estos empleados son los que realizan las facturas, de forma que un empleado puede gestionar muchas facturas diferentes, pero una factura sólo puede ser gestionada por un empleado.

### 📝 Datos a considerar:
- 👥 **Clientes/Proveedores:**
 * Código
 * Nombre 
 * NIF
 * Dirección
 * Población
 * Teléfono 
 * Email

- 📦 **Productos/Servicios:**
 * Código
 * Nombre
 * Precio compra
 * Precio venta
 * IVA

- 👨‍💼 **Empleados:**
 * Código empleado
 * Nombre
 * Email
 * Teléfono

## 🏭 Tarea 3: Modelo E/R (almacenes)

**Enunciado:**
Seguimos con nuestro proyecto de ERP, al que vamos a añadir un nuevo elemento, los almacenes, de los que necesitamos disponer de un código de almacén, nombre de almacén y la ubicación en la que se encuentra. Y estos almacenes hay que reflejarlos en las facturas de compras y de ventas, para saber adónde hemos llevado los productos que hemos comprado o de qué almacén hemos enviado los productos vendidos.


### 📍 Datos de Almacenes:
- Código de almacén
- Nombre de almacén
- Ubicación

## 🖥️ Tarea 4: Diseño de interfaces

### 🎨 Interfaces a diseñar:
* 🔐 Interfaz de acceso (login) 
* 📱 Interfaz principal del ERP (menú principal)
* 📋 Interfaz para tablas maestras:
     - Clientes
     - Proveedores
     - Personal
     - Productos
* 💰 Interfaz para operaciones:
     - Ventas
     - Compras
     - Pedidos

## 📁 Contenido de la carpeta: 
* 📊 **tarea2.drawio**
* 📊 **tarea3.drawio**
* 🖼️ **Login.png**

## 🛠️ Herramientas utilizadas 
* 📐 **Draw.io** - _Diseño de diagramas_
* 🎨 **Figma** - _Diseño de interfaces_









