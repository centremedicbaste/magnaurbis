# Informe de Revisión del Proyecto Magna Urbis

**Fecha:** 10 de abril de 2026  
**Alcance:** Revisión completa del código fuente, configuración, SEO, tracking y dependencias.

---

## ERRORES Y BUGS

### 1. Favicon 96x96 referenciado en Schema pero no existe
**Archivo:** `src/_includes/layout/base.njk` (línea 89)  
**Problema:** El Schema JSON-LD referencia `favicon-96x96.png` pero ese archivo no existe en `src/assets/static/favicons/`. Solo hay 16x16, 32x32, 192x192 y 512x512.  
**Impacto:** Google puede marcar el logo del Schema como inválido.  
**Solución:** Cambiar a un favicon que sí exista, por ejemplo `android-chrome-192x192.png`.

### 2. Variable JSON mal nombrada: `"padding-"` sin nombre
**Archivo:** `src/_data/global_index.json` (línea 14)  
**Problema:** La clave es `"padding-": "16px"` — tiene un guión colgante, parece que falta el sufijo (¿`padding_global`?). No se usa en ningún sitio porque la variable CSS usa `padding_global`.  
**Impacto:** Variable muerta / confusa. La variable CSS `--padding-global` se declara en base.njk usando `global_index.padding_global` pero esa clave no existe en el JSON.  
**Solución:** Renombrar `"padding-"` a `"padding_global"` o eliminarla y añadir la clave correcta.

### 3. Web Manifest referencia icono que no existe
**Archivo:** `src/templates/site.webmanifest.njk` (línea 9)  
**Problema:** Referencia `android-icon-192x192.png` pero el archivo real se llama `android-chrome-192x192.png`.  
**Impacto:** El manifest está roto — el icono no se carga para PWA/install.  
**Solución:** Cambiar a `android-chrome-192x192.png`.

### 4. Web Manifest usa variable inexistente
**Archivo:** `src/templates/site.webmanifest.njk` (línea 7)  
**Problema:** Usa `global_index.empresa` pero esa clave no existe en `global_index.json`. Las claves reales son `empresa_legal`, `empresa_corto`, etc.  
**Impacto:** El campo `short_name` del manifest queda vacío.  
**Solución:** Cambiar a `global_index.empresa_corto`.

### 5. Web Manifest: `name` usa la URL en vez del nombre
**Archivo:** `src/templates/site.webmanifest.njk` (línea 6)  
**Problema:** `"name": "{{global_index.url}}"` genera `"name": "https://magnaurbis.com"`. Debería ser el nombre de la empresa.  
**Solución:** Cambiar a `global_index.title` o `global_index.empresa_corto`.

### 6. Script de build:sass con doble barra
**Archivo:** `package.json` (línea 10)  
**Problema:** `"build:sass": "sass --no-source-map --style=compressed src//assets/sass:src//assets/css"` — tiene doble `//`.  
**Impacto:** Puede fallar en algunos sistemas operativos.  
**Solución:** Cambiar `src//assets` a `src/assets`.

### 7. Sitemap no incluye la página de política de privacidad (indexable)
**Archivo:** `public/sitemap.xml`  
**Problema:** La política de privacidad (`/legal/politica-de-privacidad/`) no aparece en el sitemap porque `politicas.md` tiene `metaRobots: "noindex, follow"`. Si quieres que Google la indexe, debe ser `index, follow`.  
**Nota:** Esto puede ser intencional, pero es inusual que una política de privacidad sea noindex.

### 8. Redes sociales con URLs genéricas
**Archivo:** `src/_data/global_index.json` y `src/_data/site.json`  
**Problema:** Las URLs de redes sociales son genéricas (`https://www.linkedin.com/`, `https://www.instagram.com/`, `https://www.youtube.com/`) — no apuntan a los perfiles reales de Magna Urbis.  
**Impacto:** El Schema `sameAs` envía señales incorrectas a Google. Los enlaces de redes en el footer llevan a las homepages de LinkedIn/Instagram/YouTube.  
**Solución:** Actualizar con las URLs reales de los perfiles o eliminar si no existen.

---

## MEJORAS SEO

### 9. Falta etiqueta `hreflang`
**Problema:** No hay etiquetas `hreflang` en ninguna página. Aunque el sitio parece ser solo en español, declararlas explícitamente ayuda a Google a entender el público objetivo.  
**Solución:** Añadir `<link rel="alternate" hreflang="es-ES" href="...">` y `<link rel="alternate" hreflang="x-default" href="...">` en base.njk.

### 10. Meta keywords es irrelevante para SEO
**Archivo:** `src/_includes/layout/base.njk` (línea 12)  
**Problema:** La etiqueta `<meta name="keywords">` no tiene impacto en el ranking de Google desde 2009.  
**Solución:** Se puede mantener por organización interna, pero no invertir tiempo en optimizarla.

### 11. Sitemap sin `<changefreq>` ni `<priority>`
**Archivo:** `src/templates/sitemap.njk`  
**Problema:** Aunque Google dice ignorar estos campos oficialmente, siguen siendo buenas prácticas para otros motores.  
**Mejora recomendada:** Añadir al menos `<changefreq>` para las páginas principales.

### 12. Imágenes con `alt=""` vacío
**Archivos:** `introCta_home.njk`, `introCta_2.njk`, `content_foto.njk`  
**Problema:** Hay al menos 4 instancias de `alt=""` vacíos. Las imágenes decorativas pueden tenerlo, pero si son imágenes de contenido pierden valor SEO.  
**Solución:** Revisar caso a caso y añadir texto descriptivo con keywords relevantes.

### 13. Copyright desactualizado
**Archivo:** `src/_data/global_index.json`  
**Problema:** `"empresa_copyright": " © 2024 Magna Urbis"` — debería ser 2025 o dinámico.  
**Solución:** Actualizarlo o hacerlo dinámico con JavaScript/Nunjucks.

### 14. El footer del JSON tiene copyright 2025 pero el otro dice 2024
**Archivos:** `global_index.json`  
**Problema:** `"footer_3": "MAGNA URBIS BCN, SL © 2025"` vs `"empresa_copyright": " © 2024 Magna Urbis"` — inconsistencia.

---

## MEJORAS DE RENDIMIENTO

### 15. jQuery se carga pero se usa muy poco
**Archivo:** `src/_includes/layout/base.njk` (línea 194)  
**Problema:** Se carga jQuery 3.6.0 (87KB min) pero solo se usa para toggleClass del menú, el vídeo player, accordion y un counter. Todo esto es fácilmente reemplazable con JavaScript vanilla.  
**Impacto:** ~87KB adicionales que bloquean el renderizado.  
**Solución:** Migrar las pocas funciones jQuery a vanilla JS y eliminar la dependencia.

### 16. PhotoSwipe CSS se carga siempre aunque no se use en todas las páginas
**Archivo:** `src/_includes/layout/base.njk` (línea 53)  
**Problema:** Se cargan PhotoSwipe CSS y JS en todas las páginas aunque la galería solo existe en algunas.  
**Solución:** Cargar condicionalmente solo en páginas que usen galería.

### 17. Swiper se carga en todas las páginas
**Problema:** Mismo caso que PhotoSwipe — Swiper CSS y JS se cargan globalmente.  
**Solución:** Carga condicional.

### 18. GSAP duplicado — en package.json y CDN
**Archivo:** `package.json` tiene `"gsap": "3.11.0"` pero `base.njk` carga GSAP 3.12.5 desde CDN.  
**Problema:** Versión en package.json está desactualizada respecto al CDN. La dependencia npm de GSAP probablemente no se usa.  
**Solución:** Eliminar gsap de `package.json` si solo se usa vía CDN, o consolidar.

### 19. Doble handler de scroll
**Archivo:** `src/assets/js/index.js` (línea 17) y `src/assets/js/scroll.js` (línea 23)  
**Problema:** `index.js` usa `document.body.onscroll` para añadir la clase `scrolled` al pasar 50px. `scroll.js` usa Lenis para lo mismo pero al pasar 250px. Son conflictivos.  
**Solución:** Eliminar el handler de `index.js` y dejar solo el de Lenis en `scroll.js`.

---

## MEJORAS DE TRACKING

### 20. No hay tracking de formularios de contacto
**Problema:** Se trackean clics en teléfono y email, pero no se captura el envío del formulario de contacto (que es el CTA principal del sitio).  
**Solución:** Añadir un evento `dataLayer.push` al submit del formulario de contacto (`form_submit` o `generate_lead`).

### 21. No hay tracking de scroll depth
**Problema:** No se mide hasta dónde hacen scroll los usuarios en cada página.  
**Solución:** Configurar scroll depth tracking en GTM (25%, 50%, 75%, 100%) o implementar un evento personalizado.

### 22. No hay eventos de engagement con el botón de WhatsApp
**Problema:** Si se activa el WhatsApp (configurando la variable), no se trackea el clic.  
**Solución:** Añadir tracking similar al de `tel:` y `mailto:`.

---

## MEJORAS DE SEGURIDAD Y BUENAS PRÁCTICAS

### 23. CSP permite `unsafe-inline` y `unsafe-eval`
**Archivo:** `netlify.toml` (línea 42)  
**Problema:** La Content Security Policy permite `'unsafe-inline'` y `'unsafe-eval'` en scripts, lo que debilita significativamente la protección contra XSS.  
**Solución:** Migrar scripts inline a archivos externos y usar nonces o hashes, eliminando progresivamente `unsafe-inline/eval`.

### 24. jQuery 3.6.0 tiene vulnerabilidades conocidas
**Problema:** jQuery 3.6.0 tiene CVEs conocidos. La versión actual es 3.7.1.  
**Solución:** Actualizar a la última versión o mejor aún, eliminarlo (ver punto 15).

### 25. `.DS_Store` files en el repositorio
**Problema:** Hay múltiples archivos `.DS_Store` (macOS) rastreados por Git.  
**Solución:** Añadir `.DS_Store` al `.gitignore` y limpiar los existentes con `git rm --cached`.

---

## MEJORAS DE CÓDIGO Y MANTENIMIENTO

### 26. Filtros duplicados en `.eleventy.js`
**Archivo:** `.eleventy.js`  
**Problema:** Los filtros `prevInCollection` y `prevInCollectionnext` hacen lo mismo que `prevInCollection1` y `prevInCollection2`. Hay código duplicado innecesario.  
**Solución:** Consolidar en una sola función parametrizada.

### 27. PassthroughCopy de CSS no coincide con la estructura
**Archivo:** `.eleventy.js` (línea 33)  
**Problema:** `addPassthroughCopy("./src/css/style.css")` pero los CSS reales están en `src/assets/css/`. Esta ruta probablemente no copia nada.  
**Solución:** Eliminar esa línea ya que `src/assets` (línea 34) ya copia todo el directorio de assets.

### 28. El `package.json` referencia un repositorio externo
**Archivo:** `package.json`  
**Problema:** `repository.url` y `bugs.url` apuntan a `github.com/Allchorne3/11ty-nunjucks` — que es el boilerplate original, no el repo de Magna Urbis.  
**Solución:** Actualizar con los datos del repositorio real del proyecto.

### 29. `initvideo()` se llama dos veces
**Archivo:** `src/assets/js/index.js` (líneas 75 y 423)  
**Problema:** Hay dos bloques `$(document).ready()` y ambos llaman a `initvideo()`. Esto vincula los event listeners del vídeo dos veces.  
**Solución:** Unificar los bloques `$(document).ready()` en uno solo.

---

## RESUMEN DE PRIORIDADES

| Prioridad | Nº | Descripción |
|-----------|-----|-------------|
| **CRÍTICA** | 1 | Favicon 96x96 no existe (Schema roto) |
| **CRÍTICA** | 3, 4, 5 | Web Manifest roto (3 errores) |
| **CRÍTICA** | 8 | Redes sociales con URLs genéricas (Schema incorrecto) |
| **ALTA** | 2 | Variable padding mal nombrada |
| **ALTA** | 6 | Doble barra en build:sass |
| **ALTA** | 15 | jQuery innecesario (rendimiento) |
| **ALTA** | 19 | Doble handler de scroll (conflicto) |
| **ALTA** | 20 | Sin tracking de formulario de contacto |
| **MEDIA** | 9 | Falta hreflang |
| **MEDIA** | 12 | Imágenes con alt vacío |
| **MEDIA** | 13, 14 | Copyright desactualizado/inconsistente |
| **MEDIA** | 16, 17, 18 | Recursos cargados innecesariamente |
| **MEDIA** | 23 | CSP con unsafe-inline/eval |
| **BAJA** | 10, 11 | Meta keywords / sitemap extras |
| **BAJA** | 25, 26, 27, 28, 29 | Limpieza y mantenimiento de código |
