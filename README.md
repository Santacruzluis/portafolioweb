# Proyecto Web 

Proyecto desarrollado con **React/Next.js** para el frontend y **NestJS con Express** para el backend.

## Estructura del Proyecto

```
Pagina Web/
├── frontend/          # Aplicación Next.js con React
├── backend/           # API NestJS con Express
└── README.md         # Este archivo
```

## Tecnologías Utilizadas

### Frontend
- **Next.js 15** - Framework React con SSR/SSG
- **React** - Biblioteca para interfaces de usuario
- **TypeScript** - Superset de JavaScript con tipos
- **Tailwind CSS** - Framework CSS utilitario
- **ESLint** - Linter para código JavaScript/TypeScript

### Backend
- **NestJS** - Framework Node.js escalable
- **Express** - Framework web para Node.js
- **TypeScript** - Superset de JavaScript con tipos
- **Swagger** - Documentación automática de API
- **Helmet** - Middleware de seguridad
- **CORS** - Cross-Origin Resource Sharing
- **Compression** - Compresión de respuestas HTTP

## Configuración e Instalación

### Prerrequisitos
- Node.js (v18 o superior)
- npm o yarn

### Instalación

1. **Clonar el repositorio** (si está en un repositorio)
   ```bash
   git clone <url-del-repositorio>
   cd "Pagina Web"
   ```

2. **Instalar dependencias del frontend**
   ```bash
   cd frontend
   npm install
   ```

3. **Instalar dependencias del backend**
   ```bash
   cd ../backend
   npm install
   ```

### Ejecución en Desarrollo

#### Backend (Puerto 3001)
```bash
cd backend
npm run start:dev
```

#### Frontend (Puerto 3000)
```bash
cd frontend
npm run dev
```

### URLs de Desarrollo
- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3001/api
- **Documentación API**: http://localhost:3001/api/docs

## Scripts Disponibles

### Frontend
- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia la aplicación en modo producción
- `npm run lint` - Ejecuta ESLint

### Backend
- `npm run start` - Inicia la aplicación
- `npm run start:dev` - Inicia en modo desarrollo con hot-reload
- `npm run start:debug` - Inicia en modo debug
- `npm run build` - Construye la aplicación
- `npm run test` - Ejecuta las pruebas
- `npm run test:e2e` - Ejecuta las pruebas end-to-end

## Configuración del Backend

El backend incluye las siguientes configuraciones:

- **Puerto**: 3001 (configurable via `PORT` en .env)
- **CORS**: Configurado para permitir requests desde localhost:3000
- **Swagger**: Documentación automática en `/api/docs`
- **Validación**: Pipes globales para validación de DTOs
- **Seguridad**: Helmet para headers de seguridad
- **Compresión**: Middleware de compresión habilitado

## Variables de Entorno

Crea un archivo `.env` en la carpeta `backend/` con las siguientes variables:

```env
NODE_ENV=development
PORT=3001
CORS_ORIGIN=http://localhost:3000

# Agregar configuración de base de datos
# DATABASE_URL=
# DB_HOST=localhost
# DB_PORT=5432
# DB_USERNAME=
# DB_PASSWORD=
# DB_NAME=

# JWT para autenticación (opcional)
# JWT_SECRET=your-jwt-secret
# JWT_EXPIRES_IN=24h
```

## Próximos Pasos

1. **Configurar Base de Datos** (PostgreSQL, MongoDB, etc.)
2. **Implementar Autenticación** (JWT, OAuth, etc.)
3. **Crear Módulos y Controladores** específicos del proyecto
4. **Configurar Estado Global** en el frontend (Redux, Zustand, etc.)
5. **Implementar Testing** (Jest, Cypress, etc.)
6. **Configurar CI/CD** para despliegue

## Estructura Recomendada para Desarrollo

### Backend (src/)
```
src/
├── modules/          # Módulos de la aplicación
├── common/           # Código compartido
├── config/           # Configuraciones
├── guards/           # Guards de autenticación
├── interceptors/     # Interceptores
├── pipes/            # Pipes personalizados
└── utils/            # Utilidades
```

### Frontend (src/)
```
src/
├── app/              # App Router de Next.js
├── components/       # Componentes reutilizables
├── hooks/            # Custom hooks
├── lib/              # Librerías y configuraciones
├── types/            # Tipos de TypeScript
└── utils/            # Funciones utilitarias
```

---

**¡Tu proyecto está listo para comenzar el desarrollo!** 🚀

