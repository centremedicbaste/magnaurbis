# Auditoría GTM y Google Analytics - magnaurbis.com

**Fecha:** 29 de marzo de 2026

---

## Resumen ejecutivo

La instalación de Google Tag Manager (GTM-KNP8MB8R) está **correctamente configurada en el código fuente** (template base.njk + global_index.json), pero se detectan **problemas importantes** en el tracking de eventos, la gestión del consentimiento y la configuración de dataLayer. A continuación el detalle.

---

## 1. Google Tag Manager - Instalación

### Lo que está BIEN

- **Contenedor GTM configurado:** `GTM-KNP8MB8R` definido en `src/_data/global_index.json` (línea 43).
- **Script en `<head>`:** El snippet estándar de GTM se inyecta correctamente antes del cierre de `</head>` en `base.njk` (líneas 55-66), con carga asíncrona.
- **Fallback `<noscript>`:** El iframe de GTM para navegadores sin JavaScript está presente en `<body>` (líneas 157-161).
- **Carga condicional:** Ambos bloques usan `{% if global_index.tag_manager %}`, lo que permite activar/desactivar GTM desde el JSON sin tocar código.
- **CSP Headers correctos:** La Content-Security-Policy en `netlify.toml` permite `googletagmanager.com` y `google-analytics.com` tanto en `script-src` como en `connect-src`.

### Lo que hay que REVISAR

- **Build local desactualizado:** El directorio `public/` local muestra los comentarios HTML de GTM pero **sin el código del script**. Esto puede significar que la build local fue generada antes de añadir el `tag_manager` al JSON. Conviene hacer un deploy limpio y verificar.
- **Falta `<link rel="preconnect">`:** No hay preconnect a `https://www.googletagmanager.com`, lo que ralentiza la primera carga de GTM. Actualmente solo hay preconnect a jQuery, jsdelivr y cloudflare.

---

## 2. Google Analytics (GA4) - Configuración

### Lo que está BIEN

- **GA4 gestionado desde GTM:** No hay un script `gtag.js` directo en el HTML, lo que indica que GA4 se configura a través de tags en GTM. Este es el enfoque recomendado.
- **Tienes Analytics abierto** (`analytics.google.com`) con la propiedad activa (ID: a384222472p524251447), lo que confirma que los datos están llegando.

### Lo que hay que REVISAR

- **No puedo verificar la configuración interna de GTM** (tags, triggers, variables) desde el código fuente. Es necesario revisar directamente en [tagmanager.google.com](https://tagmanager.google.com) que:
  - Existe un tag de "GA4 Configuration" con el Measurement ID correcto (G-XXXXXXX).
  - El trigger del tag GA4 sea "All Pages".
  - El tag esté publicado (no solo en borrador).
  - Enhanced Measurement esté activado (scroll, outbound clicks, site search, etc.).

---

## 3. Tracking de eventos y conversiones - PROBLEMA CRÍTICO

### Problema: NO hay eventos personalizados

He revisado todo el código fuente (`src/`) y **no existe ningún `dataLayer.push()`** en todo el proyecto. Esto significa que:

- **Los formularios de contacto NO envían eventos.** Tanto `contacta.njk` como `contacta_4.njk` manejan el envío via `fetch()` pero no comunican nada al dataLayer cuando se envía correctamente.
- **No hay tracking de clics** en CTAs, teléfono, email, WhatsApp ni enlaces externos.
- **No hay tracking de conversiones** configurado desde el código.

### Qué debería implementarse

**a) Evento de formulario de contacto** (en `contacta.njk` y `contacta_4.njk`):
```javascript
// Dentro del .then(response => { if (response.ok) { ... }})
dataLayer.push({
  'event': 'form_submission',
  'form_name': 'contacto',
  'form_location': window.location.pathname
});
```

**b) Evento de clic en teléfono/email:**
```javascript
// En los enlaces tel: y mailto:
dataLayer.push({
  'event': 'contact_click',
  'contact_type': 'phone', // o 'email'
  'contact_value': '+34 93 619 12 16'
});
```

**c) Evento de scroll profundo** (si no está activado en Enhanced Measurement de GA4).

**d) Evento de clic en CTAs principales** (botones "Contáctanos", enlaces a servicios).

---

## 4. Gestión de consentimiento (Consent Mode) - PROBLEMA IMPORTANTE

### Problema: No hay banner de cookies ni Consent Mode

- **No existe ningún banner de consentimiento de cookies** implementado en el sitio.
- **No hay Google Consent Mode v2** configurado, que es **obligatorio en la UE** desde marzo 2024.
- La página de cookies (`/legal/cookies/`) existe como texto informativo, pero no hay ningún mecanismo interactivo para que el usuario acepte o rechace cookies.

### Impacto

- **Incumplimiento del RGPD/LSSI:** En España es obligatorio obtener consentimiento antes de instalar cookies analíticas.
- **Pérdida de datos en GA4:** Sin Consent Mode, Google puede no modelar las conversiones de usuarios que no han dado consentimiento.
- **Riesgo de sanciones** por parte de la AEPD.

### Qué implementar

- Un banner de cookies (CookieBot, CookieYes, o solución propia).
- Google Consent Mode v2 integrado con GTM:
```javascript
// ANTES del script de GTM
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});
```
- Actualizar el estado de consentimiento cuando el usuario acepta:
```javascript
gtag('consent', 'update', {
  'analytics_storage': 'granted'
});
```

---

## 5. Otros problemas detectados

### og:site_name incorrecto
En el HTML compilado, `og:site_name` muestra:
```
"Check - administración de fincas, gestión de patrimonios..."
```
Debería ser simplemente `"Magna Urbis"`. Parece que se está usando el campo de keywords en vez del nombre del sitio.

### twitter:card incorrecto
El valor de `twitter:card` está configurado como el título de la página en vez de `"summary_large_image"`. En el HTML compilado aparece:
```html
<meta name="twitter:card" content="Administradores de fincas en Barcelona - Magna Urbis" />
```
Debería ser:
```html
<meta name="twitter:card" content="summary_large_image" />
```

### twitter:image inconsistente
La imagen de Twitter apunta al favicon (`favicon-96x96.png`) mientras que `og:image` apunta a una imagen real del sitio. Deberían ser consistentes.

---

## 6. Plan de acción prioritario

| Prioridad | Acción | Impacto |
|-----------|--------|---------|
| URGENTE | Implementar banner de cookies + Consent Mode v2 | Legal/RGPD |
| URGENTE | Verificar que GTM carga en producción (hacer build limpia) | Sin tracking = sin datos |
| ALTA | Añadir `dataLayer.push()` en formularios de contacto | Medir conversiones |
| ALTA | Corregir `og:site_name` y `twitter:card` | SEO/Social |
| MEDIA | Añadir tracking de clics en teléfono/email | Medir leads |
| MEDIA | Añadir `<link rel="preconnect">` para GTM | Rendimiento |
| BAJA | Añadir tracking de CTAs y scroll | Análisis de comportamiento |

---

## 7. Verificación recomendada en GTM (tagmanager.google.com)

Revisa en tu contenedor GTM-KNP8MB8R:

1. Que el tag GA4 Configuration exista y esté publicado
2. Que el Measurement ID (G-XXXXXXX) coincida con tu propiedad de Analytics
3. Que Enhanced Measurement esté activo
4. Que no haya tags en borrador sin publicar
5. Que el modo de depuración (`?gtm_debug=...`) muestre los tags disparándose correctamente
