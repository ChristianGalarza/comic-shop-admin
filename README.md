# ZonaCómic Admin - Panel de Administración 🎛️📊

Panel de control administrativo profesional para la gestión completa de la tienda de cómics ZonaCómic. Permite administrar catálogo, inventario, creadores y editoriales desde una interfaz intuitiva y moderna.

## 🚀 Descripción del Proyecto

**Comic Shop Admin** es una aplicación Next.js de administración de e-commerce especializada en la gestión integral de una tienda de cómics. Proporciona herramientas empresariales para:

- **Gestión de Catálogo**: Crear, editar y eliminar cómics con información completa.
- **Administración de Inventario**: Vista en tiempo real del stock disponible.
- **Gestión de Personas**: Creadores, autores y artistas asociados a las obras.
- **Gestión de Editoriales**: Editorial de los cómics y sus detalles.
- **Dashboard**: Resumen visual de datos y operaciones.

## 📋 Estado Actual del Proyecto

### ✅ Funcionalidades Implementadas

1. **Gestión de Cómics**
   - Formulario completo para agregar nuevos cómics
   - Listado de cómics existentes
   - Campos: título, descripción, precio, año de publicación, portada
   - Validación de datos con Zod
   - Integración con API backend

2. **Gestión de Creadores**
   - CRUD de creadores/personas
   - Información: nombre, rol, biografía
   - Formulario con validación
   - Asociación con cómics

3. **Gestión de Editoriales**
   - Creación y edición de editoriales
   - Información editorial: nombre, país, sitio web
   - Validación de datos
   - Listado de editoriales

4. **Inventario**
   - Tabla responsiva con información de stock
   - Vista general de disponibilidad
   - Módulos SCSS personalizados

5. **Componentes Reutilizables**
   - Formularios con React Hook Form
   - Componentes de botones estilizados
   - Select searchable personalizado
   - Navbar y SideBar de navegación

6. **Servicios HTTP**
   - Integración con API backend via Axios
   - Hooks personalizados (useComics, usePerson, usePublishers)
   - Manejo de errores
   - React Query para caché de datos

### 📦 Stack Tecnológico

- **Framework**: Next.js 15.5.4 con Turbopack
- **Librería UI**: React 19.1.0
- **Lenguaje**: TypeScript 5
- **Gestión de Formularios**: React Hook Form 7.64.0
- **Validación**: Zod 4.1.11 + Hook Form Resolvers
- **HTTP Client**: Axios 1.12.2
- **State Management**: React Query (@tanstack/react-query 5.90.2)
- **Estilos**: SCSS + Tailwind CSS v4
- **Linting**: ESLint 9

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18+
- pnpm (recomendado) o npm
- API backend corriendo (comic-store-api)

### Pasos de Instalación

1. **Navegar al directorio del proyecto**

```bash
cd ecommerce-admin/comic-shop-admin
```

2. **Instalar dependencias**

```bash
pnpm install
# o
npm install
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env.local
cat > .env.local << EOF
NEXT_PUBLIC_API_URL=http://localhost:3001
EOF
```

4. **Iniciar el servidor de desarrollo**

```bash
pnpm dev
```

El panel estará disponible en [http://localhost:3000](http://localhost:3000)

5. **Compilar para producción**

```bash
pnpm build
pnpm start
```

## 📖 Uso de la Aplicación

### Estructura del Proyecto

```
comic-shop-admin/
├── src/
│   ├── app/
│   │   ├── globals.css           # Estilos globales
│   │   ├── layout.tsx             # Layout principal
│   │   ├── page.tsx               # Dashboard
│   │   ├── InventoryTable.tsx     # Tabla de inventario
│   │   ├── providers.tsx           # Providers (React Query)
│   │   ├── addComic/              # Agregar cómics
│   │   │   ├── ComicForm.tsx
│   │   │   └── page.tsx
│   │   ├── creator/               # Gestión de creadores
│   │   │   ├── page.tsx
│   │   │   └── addCreator/
│   │   │       ├── CreatorForm.tsx
│   │   │       └── page.tsx
│   │   ├── publisher/             # Gestión de editoriales
│   │   │   ├── page.tsx
│   │   │   └── addPublisher/
│   │   │       ├── PublisherForm.tsx
│   │   │       └── page.tsx
│   │   └── hooks/                 # Hooks personalizados
│   │       ├── useComics.ts
│   │       ├── usePublishers.ts
│   │       ├── usePerson.ts
│   │       ├── createComic.ts
│   │       ├── createPerson.ts
│   │       └── createPublisher.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── SideBar.tsx
│   │   └── ui/
│   │       ├── SearchableSelect.tsx
│   │       └── buttons/
│   │           └── Button.tsx
│   ├── services/
│   │   ├── API.ts                # Cliente HTTP
│   │   ├── comics/               # Servicio de cómics
│   │   ├── persons/              # Servicio de creadores
│   │   └── publishers/           # Servicio de editoriales
│   ├── types/                    # Tipos TypeScript
│   └── lib/
│       └── data/                 # Utilidades
└── public/                       # Assets estáticos
```

### Navegación Principales

- **Dashboard** (`/`): Vista general del sistema
- **Inventario** (`/inventory`): Tabla de stock y disponibilidad
- **Cómics** (`/addComic`): Crear nuevos cómics
- **Creadores** (`/creator`): Gestión de creadores y añadir nuevos
- **Editoriales** (`/publisher`): Gestión de editoriales

### Formularios Disponibles

#### Formulario de Cómico (`ComicForm.tsx`)

- Título del cómic
- Descripción
- Precio
- Año de publicación
- Validación con Zod
- Selección de editorial
- Selección de creadores

#### Formulario de Creador (`CreatorForm.tsx`)

- Nombre completo
- Rol (autor, ilustrador, etc.)
- Biografía
- Validación de datos

#### Formulario de Editorial (`PublisherForm.tsx`)

- Nombre editorial
- País de origen
- Sitio web
- Información de contacto

## 🔌 Integración con API Backend

El panel se conecta con el backend NestJS (`comic-store-api`). Los endpoints utilizados son:

- `GET /comics` - Obtener lista de cómics
- `POST /comics` - Crear nuevo cómic
- `PUT /comics/:id` - Actualizar cómic
- `DELETE /comics/:id` - Eliminar cómic
- `GET /persons` - Obtener creadores
- `POST /persons` - Crear creador
- `GET /publishers` - Obtener editoriales
- `POST /publishers` - Crear editorial

### Variables de Entorno

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 📋 Comandos Disponibles

```bash
# Desarrollo
pnpm dev              # Inicia servidor con hot-reload y Turbopack

# Build y Producción
pnpm build            # Compila la aplicación con Turbopack
pnpm start            # Inicia el servidor en modo producción

# Linting
pnpm lint             # Verifica errores de ESLint
```

## 🎯 Características Técnicas

### React Hook Form + Zod

- Validación robusta de formularios
- Mensajes de error personalizados
- Integración seamless

### React Query

- Caché automático de datos
- Refetch automático
- Manejo de estados de carga y error

### SCSS Modules

- Estilos encapsulados
- Evita conflictos de clases
- Mantiene CSS organizado

### Axios

- Manejo de errores centralizado
- Interceptores para autenticación (próximamente)
- Timeouts configurables

## 🔄 Flujo de Trabajo

### Para agregar un nuevo cómic:

1. Navega a "Agregar Cómic"
2. Completa el formulario con los detalles
3. Selecciona editorial y creadores
4. Haz clic en "Guardar"
5. El cómic aparecerá en el inventario

### Para gestionar creadores:

1. Ve a la sección "Creadores"
2. Ver lista actual de creadores
3. Haz clic en "Agregar Creador"
4. Completa el formulario

### Para gestionar editoriales:

1. Accede a "Editoriales"
2. Ver editoriales registradas
3. Haz clic en "Agregar Editorial"
4. Ingresa los datos

## 🚀 Próximos Pasos

- [ ] Autenticación y autorización
- [ ] Edición de cómics existentes
- [ ] Eliminación de registros
- [ ] Imágenes de portadas
- [ ] Reportes y estadísticas
- [ ] Exportación de datos
- [ ] Búsqueda y filtros avanzados
- [ ] Paginación en listados
- [ ] Notificaciones de éxito/error mejoradas

## 📝 Notas de Desarrollo

### Rutas del Proyecto

- El proyecto usa App Router de Next.js 15
- Los componentes están en la carpeta `src/`
- Los servicios están centralizados en `services/`

### Estilos

- SCSS módulos para componentes
- Tailwind CSS para utilidades
- Variables CSS globales en `globals.css`

### Hooks Personalizados

Los hooks en la carpeta `hooks/` manejan:

- Fetching de datos
- Creación de nuevos registros
- Caché con React Query

## 🤝 Notas para Colaboradores

- Mantén los componentes pequeños y reutilizables
- Usa TypeScript para tipado fuerte
- Valida datos con Zod en formularios
- Sigue la estructura de carpetas establecida
- Centraliza llamadas API en `services/`

## 📞 Integración con Otros Proyectos

Este proyecto es parte del ecosistema ZonaCómic:

- **Backend**: `ecommerce-api/comic-store-api` (NestJS)
- **Frontend Store**: `ecommerce-store/comic-shop-store` (Next.js/React)

---

**Última actualización**: Abril 7, 2026
**Versión**: 0.1.0 (En Desarrollo)
