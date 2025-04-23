# Prueba Frontend - Aplicación de Razas de Perros

Este proyecto es una aplicación web desarrollada con Vue.js que permite consultar información sobre diferentes razas de perros y sus propósitos de crianza utilizando The Dog API.

## Contenido

- Características
- Arquitectura del Proyecto
- Tecnologías Utilizadas
- Requisitos Previos
- Instalación
- Configuración del archivo .env
- Ejecución
- Testing
- Decisiones Técnicas

## Características

- Consulta de diferentes razas de perros
- Información detallada sobre cada raza
- Filtrado y búsqueda de razas
- Visualización de imágenes de razas


# Arquitectura del Proyecto

La aplicación sigue una arquitectura de componentes organizada y modular:

```js
prueba-frontend/
├── node_modules/
├── public/
├── src/
│   ├── assets/         
│   ├── components/     
│   ├── router/         
│   ├── tests/          
│   ├── views/          
│   ├── App.vue         
│   ├── main.js         
│   └── style.css      
├── .env       
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js    
```


## Justificación de la estructura

- assets/: Contiene recursos estáticos como imágenes y SVGs que se utilizan en la aplicación.
- components/: Alberga componentes Vue reutilizables que son utilizados en múltiples vistas.
- detailsContent.vue: Muestra información detallada de una raza específica.
- favoriteBreeds.vue: Gestiona las razas marcadas como favoritas.
- HelloWorld.vue: Componente básico de bienvenida.
- middle.vue: Componente intermedio para estructurar la UI.
- navbar.vue: Barra de navegación común a todas las vistas.

- router/: Contiene la configuración de enrutamiento de la aplicación.

- router.js y routes.js: Definen las rutas y su comportamiento.


- tests/: Contiene los archivos de pruebas unitarias y de integración.
- views/: Contiene componentes principales asociados a rutas específicas.

- details.vue: Vista detallada de una raza de perro.
- home.vue: Página principal con listado de razas.


## Tecnologías Utilizadas

- Vue.js 3: Framework progresivo para construir interfaces de usuario.
- Vue Router 4: Sistema de enrutamiento oficial para Vue.js.
- Vite: Herramienta de compilación rápida para desarrollo moderno.
- Axios: Cliente HTTP basado en promesas para realizar peticiones a la API.
- Vitest: Framework de testing para Vue.js.
- Happy-DOM: Implementación DOM para entornos de prueba.

## Requisitos Previos

- Node.js (v16 o superior)
- npm (v7 o superior)
- Clave API de The Dog API

# Instalación

### Clona este repositorio:

```js
git clone https://github.com/Jhon-GG/prueba-frontend.git 
```

cd prueba-frontend

#### Instala las dependencias:
```js
npm install
```


# Configuración del archivo .env


### Crea un archivo .env en la raíz del proyecto:

```js
.env
```

#### Regístrate en The Dog API para obtener una API key:

- Visita https://thedogapi.com/
- Navega a "Sign Up for Free" o "Get API Key"
- Completa el registro para recibir tu API key por correo electrónico


- Añade la API key al archivo .env:
- VITE_DOG_API_KEY= tu_clave_api_aquí
- VITE_API_BASE_URL=https://api.thedogapi.com/v1


# Ejecución

### Para iniciar el servidor de desarrollo:

```js
npm run dev
```

### Esto iniciará el servidor de desarrollo Vite. Abre tu navegador y visita http://localhost:5173 (o el puerto que indique la consola).

### Para compilar para producción:

```js
npm run build
```

### Para previsualizar la versión de producción:

```js
npm run preview
```

## Testing
### Para ejecutar los tests:

```js
npm run test
```

### Para generar informe de cobertura:

```js
npm run test:coverage
```
## Decisiones Técnicas

### Vue.js 3 + Vite

- Se eligió Vue.js 3 con la Composition API por su flexibilidad, rendimiento y mejor soporte para TypeScript. Vite fue seleccionado como herramienta de compilación por su rapidez en el desarrollo gracias a su servidor de desarrollo con HMR (Hot Module Replacement) extremadamente rápido.

### Estructura de Componentes

- La aplicación sigue el principio de componentes atómicos, donde cada componente tiene una única responsabilidad. Esto mejora la mantenibilidad y facilita las pruebas unitarias.

### Vue Router
- Se implementó Vue Router para manejar la navegación entre vistas, permitiendo una experiencia de usuario fluida y sin recargas de página completa.

### Llamadas a API
- Las peticiones a The Dog API se manejan mediante Axios por su facilidad de uso y capacidades avanzadas como interceptores de solicitudes y respuestas.

### Testing
- Se usa Vitest junto con Vue Test Utils para proporcionar una sólida cobertura de pruebas. Happy-DOM se utiliza como entorno para simular el DOM durante las pruebas.

### Estilos
- Se ha optado por utilizar CSS estándar para mantener la simplicidad del proyecto y facilitar su comprensión. Los estilos específicos de componentes están encapsulados dentro de los propios componentes.