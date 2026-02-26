# Correcciones aplicadas según el reporte de Screaming Frog

Resumen de los cambios realizados para resolver los problemas del `issues_overview_report.csv`.

---

## ✅ Corregido en el proyecto

### 1. Cabeceras de seguridad (9 URLs)
**Problema:** Faltaban X-Content-Type-Options, Content-Security-Policy, Referrer-Policy y X-Frame-Options.

**Solución:** Se añadieron en `netlify.toml` para todas las rutas (`/*`):
- `X-Frame-Options: DENY`
- `X-Content-Type-Options: nosniff`
- `X-XSS-Protection: 1; mode=block`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Content-Security-Policy` permitiendo los orígenes usados (jQuery, GSAP, Swiper, etc.)

### 2. URLs bloqueadas por robots.txt (3 URLs)
**Problema:** Las páginas bajo `/legal/` (Política de Privacidad, Aviso Legal, Cookies) estaban en `Disallow` y no podían ser rastreadas.

**Solución:** Se eliminó `Disallow: /legal/` del `robots.njk`. Las páginas legales pueden ser rastreadas. Para que **no se indexen** (buena práctica SEO) se configuró en cada página legal **meta robots: noindex, follow** (en `src/es/legal/*.md`): así Google rastrea la página y sigue los enlaces, pero no la muestra en resultados de búsqueda.

### 3. Imágenes sin texto ALT (3+ imágenes)
**Solución:** Se añadió o mejoró el atributo `alt` en:
- Logo del header: `alt="Magna Urbis"`
- Hero home y box_img: descripción de Magna Urbis
- Contacta: `alt="Casa de les Punxes, sede de Magna Urbis en Barcelona"`
- Servicios (servicios_1.njk y servicios_slide.njk): `alt="Imagen del servicio {{ nombre }}"`
- Macros (_insert.njk): avatares Google, colaboradores, timeline y proyectos con alt descriptivo

### 4. Imágenes sin atributos de tamaño (width/height)
**Solución:** Se añadieron `width` y `height` en las imágenes de:
- Header (logo), introCta_home, box_img, contacta_5, servicios_1, servicios_slide y macros, para reducir CLS.

### 5. H2 no secuencial
**Problema:** En `benefits_2.njk` el primer encabezado era `<h5>` y el segundo `<h2>`.

**Solución:** Se cambió a `<h2>` y `<h3>` para mantener orden lógico (h1 → h2 → h3).

### 6. Enlaces internos sin texto de anclaje
**Solución:** 
- En `content_foto.njk`: el enlace “Contacta con nosotros” era `<a><button>...</button></a>`. Se reemplazó por `<a class="btn btn-primary">Contacta con nosotros</a>`.
- En `box_img.njk`: mismo patrón; ahora es `<a href="/contacta/" class="btn-black btn">...</a>` (enlace con texto visible).

### 7. Accesibilidad del logo
**Solución:** Al enlace del logo se le añadió `aria-label="Magna Urbis - Inicio"` para lectores de pantalla.

### 8. Estructura de encabezados en content_foto
**Solución:** El segundo `<h4>` era contenido de párrafo. Se dejó el primero como `<h2>` y el texto de descripción como `<p class="p1">`.

---

## ⚠️ Pendiente o dependiente de entorno

### Errores 5xx (5 URLs)
El sitemap ya se corrigió antes (comprobación de `collections.categories`). Si siguen apareciendo 5xx:
- Revisar en Netlify que el build termine bien y que no haya timeouts.
- Comprobar que las URLs que devuelven 5xx respondan 200 en el despliegue actual (puede ser caché o rastreo bajo carga).

### Imágenes de más de 100 KB (4 imágenes)
Screaming Frog marca imágenes >100 KB. Para mejorarlas:
- Usar el plugin `@11ty/eleventy-img` (ya en el proyecto) para generar versiones WebP y tamaños responsive.
- Comprimir JPG/PNG con herramientas como Squoosh o ImageOptim antes de subirlas.
- Revisar en el informe qué rutas exactas son (p. ej. `/assets/static/images/...`) y optimizar esas.

### Contenido de lectura muy difícil (1 página)
Es un tema de redacción (índice Flesch). Recomendación: acortar frases y usar términos más sencillos en esa página. Si identificas la URL en el reporte, se puede reescribir el texto.

---

## Cómo comprobar

1. **Build:** `npm run build`
2. **Despliegue:** Subir a Netlify y comprobar que no haya errores.
3. **Cabeceras:** En DevTools → pestaña Red → cabeceras de respuesta de una página cualquiera.
4. **Screaming Frog:** Volver a rastrear el sitio y comprobar que los avisos corregidos desaparezcan.

Si quieres volver a bloquear las páginas legales en robots, añade de nuevo en `src/templates/robots.njk` la línea `Disallow: /legal/` y usa `noindex` en el front matter de esas páginas si no deben indexarse.
