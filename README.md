# Owwny Strategic Dashboard

Dashboard estratégico para visualizar el análisis de posición competitiva de Owwny en el sector PropTech LATAM.

## Características

- **Resumen Ejecutivo**: Visión general de la posición estratégica
- **Análisis VRIO**: Evaluación de recursos y capacidades
- **Cinco Fuerzas de Porter**: Análisis del entorno competitivo
- **Roadmap Tecnológico**: Planificación estratégica a 5 años
- **Tendencias**: Tecnologías emergentes relevantes
- **KPIs**: Indicadores clave de rendimiento
- **Recomendaciones**: Acciones estratégicas prioritarias

## Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```

## Tecnologías

- React 18
- Vite
- Tailwind CSS
- JavaScript (ES6+)

## Estructura del Proyecto

```
src/
├── App.jsx          # Componente principal del dashboard
├── main.jsx         # Punto de entrada de React
index.html           # Plantilla HTML
package.json         # Dependencias y scripts
vite.config.js       # Configuración de Vite
```

## Desarrollo

El proyecto utiliza Vite como bundler para desarrollo rápido. Tailwind CSS se carga via CDN para simplicidad.

Para ejecutar el proyecto:

1. Clona el repositorio
2. Ejecuta `npm install`
3. Ejecuta `npm run dev`
4. Abre tu navegador en `http://localhost:3000`

## API

El dashboard está configurado para conectar con una API en `localhost:3001`. Los endpoints están definidos en `API_CONFIG` dentro de `App.jsx`.

## Licencia

MIT
