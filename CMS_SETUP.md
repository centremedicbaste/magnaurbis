# Configuración del CMS de Netlify

Este proyecto está configurado para usar Decap CMS (anteriormente Netlify CMS) para gestionar el contenido del sitio web.

## Configuración Inicial

### 1. Configurar Cloudinary (Opcional pero recomendado)

Para gestionar imágenes desde el CMS, necesitas configurar Cloudinary:

1. Crea una cuenta en [Cloudinary](https://cloudinary.com)
2. Obtén tu `cloud_name` y `api_key`
3. Actualiza los valores en:
   - `cms/config/index.js` (líneas 20-22)
   - `public/admin/config.yml` (líneas 4-6)

### 2. Configurar Netlify Identity

1. En tu panel de Netlify, ve a **Site settings** > **Identity**
2. Habilita **Identity**
3. En **Registration preferences**, selecciona **Invite only** o **Open**
4. En **External providers**, puedes configurar Google, GitHub, etc.

### 3. Configurar Git Gateway

1. En tu panel de Netlify, ve a **Site settings** > **Identity** > **Services**
2. Habilita **Git Gateway**
3. Esto permitirá que el CMS haga commits directamente al repositorio

## Estructura del CMS

### Colecciones Configuradas

1. **Configuración del Sitio** (`site-config`)
   - Datos globales del sitio
   - Redes sociales
   - Configuración SEO
   - Archivo: `src/_data/site.json`

2. **Páginas** (`pages`)
   - Páginas principales del sitio
   - Incluye secciones como hero, contacto, etc.
   - Carpeta: `src/pages`

3. **Servicios** (`servicios`)
   - Páginas de servicios
   - Incluye características, precios, etc.
   - Carpeta: `src/servicios`

4. **Blog** (`blog`)
   - Artículos del blog
   - Incluye metadatos SEO
   - Carpeta: `src/es/blog`

## Acceso al CMS

Una vez configurado, puedes acceder al CMS en:
- URL: `https://tu-dominio.com/admin/`
- Usa tu cuenta de Netlify Identity para iniciar sesión

## Desarrollo Local

Para probar el CMS localmente:

1. Instala las dependencias:
   ```bash
   npm install
   ```

2. Inicia el servidor de desarrollo:
   ```bash
   npm run start
   ```

3. Accede a `http://localhost:8080/admin/`

## Personalización

### Agregar Nuevas Colecciones

1. Crea un nuevo archivo en `cms/config/collections/`
2. Importa la colección en `cms/config/index.js`
3. Agrega la colección al array `collections`

### Modificar Campos

Edita los archivos de configuración de las colecciones para:
- Agregar nuevos campos
- Cambiar tipos de widgets
- Modificar validaciones
- Ajustar valores por defecto

## Widgets Disponibles

- `string`: Campo de texto simple
- `text`: Área de texto multilínea
- `markdown`: Editor de Markdown
- `image`: Selector de imágenes
- `datetime`: Selector de fecha y hora
- `number`: Campo numérico
- `list`: Lista de elementos
- `object`: Objeto con subcampos
- `select`: Lista desplegable
- `boolean`: Checkbox

## Solución de Problemas

### Error de Autenticación
- Verifica que Netlify Identity esté habilitado
- Asegúrate de que Git Gateway esté configurado

### Error de Cloudinary
- Verifica las credenciales de Cloudinary
- Asegúrate de que la cuenta esté activa

### Error de Build
- Verifica que todos los archivos de configuración estén correctos
- Revisa la consola del navegador para errores JavaScript
