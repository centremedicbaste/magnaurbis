const paginasGeneralesCollection = {
    label: 'Páginas Generales',
    name: 'paginas-generales',
    folder: 'src/pages',
    create: true,
    slug: '{{slug}}',
    fields: [
        { label: 'Layout', name: 'layout', widget: 'select', options: [
            { label: 'Página por defecto', value: 'pages/_default.njk' },
            { label: 'Página de servicios', value: 'pages/_servicios.njk' },
            { label: 'Página de contacto', value: 'pages/_contacta.njk' },
            { label: 'Página SEO', value: '../templates/_siteseo_titles.njk' }
        ]},
        { label: 'Permalink', name: 'permalink', widget: 'string' },
        { label: 'Meta title', name: 'metaTitle', widget: 'string' },
        { label: 'Meta description', name: 'metaDescription', widget: 'string' },
        { label: 'Meta keywords', name: 'metaKeywords', widget: 'string' },
        { label: 'Meta robots', name: 'metaRobots', widget: 'string', default: 'index, follow' },
        { label: 'Tags', name: 'tags', widget: 'list', default: ['pages'] },
        { label: 'Sección', name: 'seccion', widget: 'string' },
        { label: 'Prioridad', name: 'priority', widget: 'number' },
        
        // Hero section
        { label: 'Hero Description', name: 'hero_description', widget: 'string' },
        { label: 'Hero Title', name: 'hero_title', widget: 'string' },
        { label: 'Hero Button', name: 'hero_btn', widget: 'string' },
        { label: 'Home Image', name: 'home_image', widget: 'image' },
        
        // General content
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'text' },
        { label: 'Image', name: 'image', widget: 'image' },
        
        // Why section
        { label: 'Why Title 1', name: 'whytitle1', widget: 'text' },
        { label: 'Why Title 2', name: 'whytitle2', widget: 'text' },
        { label: 'Why Title 3', name: 'whytitle3', widget: 'text' },
        { label: 'Why Title 1 Subtitle', name: 'whytitle1_subtitle', widget: 'text' },
        { label: 'Why Title 1 Description', name: 'whytitle1_description', widget: 'string' },
        
        // Contact section
        { label: 'Contacta Title', name: 'contacta_title', widget: 'string' },
        { label: 'Contacta Subtitle', name: 'contacta_subtitle', widget: 'string' },
        { label: 'Contacta 5 Title', name: 'contacta_5_title', widget: 'string' },
        { label: 'Contacta 5 Subtitle', name: 'contacta_5_subtitle', widget: 'string' },
        { label: 'Contacta Map', name: 'contacta_map', widget: 'text' },
        { label: 'Banner Button', name: 'banner_button', widget: 'string' },
        { label: 'Dirección', name: 'direction', widget: 'string' },
        { label: 'Teléfono', name: 'telefono', widget: 'string' },
        { label: 'Email', name: 'email', widget: 'string' },
        
        // Content
        { label: 'Body', name: 'body', widget: 'markdown', required: false }
    ],
};

export default paginasGeneralesCollection;
