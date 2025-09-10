const serviciosCollection = {
    label: 'Servicios',
    name: 'servicios',
    folder: 'src/servicios',
    create: true,
    slug: '{{slug}}',
    fields: [
        { label: 'Layout', name: 'layout', widget: 'string', default: 'pages/_servicio.njk' },
        { label: 'Permalink', name: 'permalink', widget: 'string' },
        { label: 'Meta title', name: 'metaTitle', widget: 'string' },
        { label: 'Meta description', name: 'metaDescription', widget: 'string' },
        { label: 'Meta keywords', name: 'metaKeywords', widget: 'string' },
        { label: 'Meta robots', name: 'metaRobots', widget: 'string', default: 'index, follow' },
        { label: 'Tags', name: 'tags', widget: 'list', default: ['servicios'] },
        { label: 'Sección', name: 'seccion', widget: 'string' },
        { label: 'Prioridad', name: 'priority', widget: 'number' },
        
        // Hero section
        { label: 'Hero Description', name: 'hero_description', widget: 'string' },
        { label: 'Hero Title', name: 'hero_title', widget: 'string' },
        { label: 'Hero Button', name: 'hero_btn', widget: 'string' },
        { label: 'Hero Image', name: 'hero_image', widget: 'image' },
        
        // Service details
        { label: 'Título del Servicio', name: 'service_title', widget: 'string' },
        { label: 'Subtítulo del Servicio', name: 'service_subtitle', widget: 'string' },
        { label: 'Descripción Corta', name: 'service_description', widget: 'text' },
        { label: 'Imagen Principal', name: 'service_image', widget: 'image' },
        { label: 'Icono', name: 'service_icon', widget: 'image' },
        
        // Features
        { label: 'Características', name: 'features', widget: 'list', fields: [
            { label: 'Título', name: 'title', widget: 'string' },
            { label: 'Descripción', name: 'description', widget: 'text' },
            { label: 'Icono', name: 'icon', widget: 'image' }
        ]},
        
        // Pricing
        { label: 'Precio', name: 'price', widget: 'string' },
        { label: 'Moneda', name: 'currency', widget: 'string', default: '€' },
        { label: 'Período', name: 'period', widget: 'string', default: 'mes' },
        
        // Content
        { label: 'Contenido', name: 'body', widget: 'markdown' }
    ],
};

export default serviciosCollection;
