# goi

> Job test

## Comandos

``` bash
# Instalar dependecias
$> npm install

# Servir en modo desarrollo 8000
$> npm run dev

# Construir release
$> npm run build

# Construir release con informe de peso
$> npm run build --report

# Ejecutar test unitarios
$> npm run unit

# Desplegar release en local 5000
$> npm run build
$> npm run depoy

# Ejecutar test de comportamiento
$> npm run build
$> npm run depoy
$> npm run e2e
```

## Caracteristicas
- Listado de pedidos
- Filtrado de pedidos. Se realiza usando un input de texto libre que buscan coincidencias en todos los campos de cada pedido
  SI : se desea buscar por estado se escribe: 'shipped', 'error', 'delivered', 'pending'
- Paginado
- Detalle del pedido. Permite modificar los datos de pedido en local
