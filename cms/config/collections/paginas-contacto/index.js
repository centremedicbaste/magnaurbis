const paginasContactoCollection = {
    label: 'Páginas de Contacto',
    name: 'paginas-contacto',
    folder: 'src/pages',
    create: false,
    slug: '{{slug}}',
    filter: {
        field: 'layout',
        value: 'pages/_contacta.njk'
    },
    fields: [
        { label: 'Layout', name: 'layout', widget: 'string', default: 'pages/_contacta.njk' },
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
        
        // Contact section
        { label: 'Contacta Title', name: 'contacta_title', widget: 'string' },
        { label: 'Contacta Subtitle', name: 'contacta_subtitle', widget: 'string' },
        { label: 'Contacta 5 Title', name: 'contacta_5_title', widget: 'string' },
        { label: 'Contacta 5 Subtitle', name: 'contacta_5_subtitle', widget: 'string' },
        { label: 'Contacta Map', name: 'contacta_map', widget: 'text' },
        { label: 'Banner Button', name: 'banner_button', widget: 'string' },
        { label: 'Dirección', name: 'direction', widget: 'string' },
        { label: 'Teléfono', name: 'telefono', widget: 'string' },
        { label: 'Email', name: 'email', widget: 'string' }
    ],
};

export default paginasContactoCollection;
