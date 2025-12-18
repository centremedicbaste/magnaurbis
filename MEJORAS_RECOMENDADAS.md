# 🚀 Mejoras Recomendadas para Magna Urbis

## 📊 Resumen Ejecutivo

Este documento detalla las mejoras recomendadas para optimizar el proyecto Magna Urbis en las áreas de SEO, Performance, UX/UI, Accesibilidad, Código y Funcionalidades.

---

## 🔴 PRIORIDAD ALTA (Impacto inmediato)

### 1. SEO y Datos Estructurados

#### 1.1. Expandir Schema.org JSON-LD
**Problema**: Solo hay un schema básico de `RealEstateAgent` en el layout base.

**Solución**: Agregar schemas específicos por página:
- **Páginas de servicios**: `Service` schema con `areaServed: Barcelona`
- **Página de contacto**: `ContactPage` schema
- **Organización**: Mejorar `Organization` schema con más detalles
- **Breadcrumbs**: Agregar `BreadcrumbList` schema

**Ubicación**: `src/_includes/layout/base.njk` y crear partials por tipo de página

#### 1.2. Mejorar Open Graph
**Problema**: 
- `og:site_name` tiene texto hardcodeado "Check"
- `og:image` es genérica (2.webp)
- Falta `og:image:alt`

**Solución**:
```njk
<meta property="og:site_name" content="{{ global_index.title }}" />
<meta property="og:image" content="{{ global_index.url }}{{ page.data.og_image or '/assets/static/images/og-default.jpg' }}" />
<meta property="og:image:alt" content="{{ metaTitle }}" />
```

#### 1.3. Agregar meta tags faltantes
- `theme-color` para móviles
- `apple-mobile-web-app-capable`
- `format-detection` para teléfonos

---

### 2. Performance

#### 2.1. Optimización de Scripts
**Problema**: Todos los scripts se cargan de forma síncrona al final del body.

**Solución**:
- **Defer/Async**: Agregar `defer` a scripts no críticos
- **Preconnect**: Agregar para CDNs externos
- **Lazy load**: Cargar GSAP, Locomotive Scroll solo cuando se necesiten

```html
<link rel="preconnect" href="https://cdn.jsdelivr.net">
<link rel="preconnect" href="https://cdnjs.cloudflare.com">
<link rel="dns-prefetch" href="https://code.jquery.com">
```

#### 2.2. Optimización de CSS
**Problema**: CSS de Swiper y PhotoSwipe se cargan desde CDN.

**Solución**:
- Descargar y minificar CSS de librerías
- Agregar `preload` para CSS crítico
- Implementar Critical CSS inline

#### 2.3. Optimización de Imágenes
**Problema**: 
- No todas las imágenes tienen `loading="lazy"`
- Falta `width` y `height` en muchas imágenes
- No se usa `srcset` para responsive

**Solución**:
- Usar `@11ty/eleventy-img` plugin (ya instalado pero no usado)
- Agregar `loading="lazy"` a todas las imágenes
- Implementar `srcset` para imágenes responsive

---

### 3. Accesibilidad (A11y)

#### 3.1. Atributos ARIA faltantes
**Problema**: Faltan `aria-label` en varios elementos interactivos.

**Solución**:
- Agregar `aria-label` a botones sin texto
- Agregar `aria-describedby` a formularios
- Mejorar navegación con `aria-current="page"`

#### 3.2. Contraste de colores
**Problema**: No verificado si cumple WCAG AA.

**Solución**: Verificar y ajustar colores según WCAG 2.1 AA

#### 3.3. Navegación por teclado
**Problema**: Menú móvil puede no ser accesible por teclado.

**Solución**: Asegurar `tabindex` y focus visible en todos los elementos interactivos

---

## 🟡 PRIORIDAD MEDIA (Mejoras importantes)

### 4. UX/UI

#### 4.1. Breadcrumbs
**Problema**: No hay breadcrumbs en páginas internas.

**Solución**: Implementar componente de breadcrumbs con schema.org

#### 4.2. Formulario de contacto
**Problema**: 
- Falta validación visual mejorada
- No hay mensaje de éxito/error claro
- Falta indicador de carga

**Solución**: Mejorar UX del formulario con feedback visual

#### 4.3. Enlaces internos
**Problema**: Páginas legales solo tienen enlaces en footer.

**Solución**: 
- Agregar enlaces contextuales en contenido
- Crear sitemap HTML visible
- Agregar "Páginas relacionadas" en servicios

---

### 5. Código y Mantenibilidad

#### 5.1. Limpieza de datos
**Problema**: `global_index.json` tiene valores placeholder:
- `"legal_nif_titular": "número de identificación fiscal"`
- `"legal_direccion_titular": "dirección del titular"`
- `"empresa_corto": "nombre comercial"`
- `"seo_title": "título seo"`
- `"seo_description": "descripción seo"`

**Solución**: Completar todos los valores reales

#### 5.2. Variables no usadas
**Problema**: Variables como `bg_white`, `padding_global` definidas pero no usadas.

**Solución**: Eliminar o implementar

#### 5.3. Consistencia en nombres
**Problema**: Mezcla de `global_index` y `site` para datos similares.

**Solución**: Unificar en `global_index` o crear estructura clara

---

### 6. Funcionalidades

#### 6.1. Blog funcional
**Problema**: El blog tiene contenido de ejemplo.

**Solución**: 
- Crear estructura real de blog
- Agregar categorías y tags
- Implementar paginación
- Agregar RSS feed

#### 6.2. Búsqueda
**Problema**: No hay funcionalidad de búsqueda.

**Solución**: Implementar búsqueda simple con Eleventy o Algolia

#### 6.3. WhatsApp
**Problema**: Campo `whatsapp` vacío en `global_index.json`.

**Solución**: Agregar número de WhatsApp si está disponible

---

## 🟢 PRIORIDAD BAJA (Mejoras opcionales)

### 7. SEO Avanzado

#### 7.1. Hreflang
**Solución**: Si planeas versiones en otros idiomas, agregar `hreflang`

#### 7.2. Rich Snippets
**Solución**: Agregar `AggregateRating` si hay reseñas

#### 7.3. FAQ Schema
**Solución**: Si agregas FAQ, implementar `FAQPage` schema

---

### 8. Performance Avanzado

#### 8.1. Service Worker
**Solución**: Implementar PWA con service worker para offline

#### 8.2. Image CDN
**Solución**: Mover imágenes a CDN (Cloudinary ya configurado)

#### 8.3. Font Optimization
**Solución**: 
- Subset de fuentes
- `font-display: swap`
- Preload de fuentes críticas

---

### 9. Analytics y Tracking

#### 9.1. Google Analytics 4
**Problema**: Campo `tag_manager` vacío.

**Solución**: Configurar GA4 o GTM

#### 9.2. Eventos personalizados
**Solución**: Trackear clicks en CTA, formularios, enlaces de servicios

---

### 10. Seguridad

#### 10.1. Headers de seguridad
**Solución**: Agregar en `netlify.toml`:
```toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
    Referrer-Policy = "strict-origin-when-cross-origin"
```

#### 10.2. CSP (Content Security Policy)
**Solución**: Implementar CSP básico

---

## 📋 Checklist de Implementación

### Fase 1 (1-2 semanas)
- [ ] Completar datos en `global_index.json`
- [ ] Agregar `loading="lazy"` a todas las imágenes
- [ ] Implementar breadcrumbs
- [ ] Mejorar Open Graph tags
- [ ] Agregar preconnect para CDNs
- [ ] Completar atributos ARIA faltantes

### Fase 2 (2-3 semanas)
- [ ] Expandir Schema.org JSON-LD
- [ ] Optimizar carga de scripts (defer/async)
- [ ] Implementar Critical CSS
- [ ] Mejorar formulario de contacto
- [ ] Agregar enlaces internos contextuales
- [ ] Configurar Google Analytics

### Fase 3 (1 mes+)
- [ ] Implementar blog funcional
- [ ] Agregar funcionalidad de búsqueda
- [ ] Optimizar imágenes con Eleventy Image
- [ ] Implementar Service Worker (PWA)
- [ ] Agregar headers de seguridad

---

## 🎯 Métricas de Éxito

### SEO
- **Objetivo**: Mejorar Core Web Vitals
  - LCP < 2.5s
  - FID < 100ms
  - CLS < 0.1

### Performance
- **Objetivo**: Lighthouse Score > 90
- **Objetivo**: Tiempo de carga < 3s

### Accesibilidad
- **Objetivo**: Lighthouse A11y Score > 95
- **Objetivo**: WCAG 2.1 AA compliance

---

## 📝 Notas Adicionales

1. **Priorizar según impacto**: Empezar con mejoras de SEO y Performance que tienen impacto directo en conversiones.

2. **Testing**: Después de cada mejora, verificar:
   - Build sin errores
   - Funcionalidad en navegadores principales
   - Lighthouse scores
   - Validación HTML/W3C

3. **Documentación**: Mantener este documento actualizado con el progreso.

---

**Última actualización**: {{ fecha }}
**Versión del documento**: 1.0

