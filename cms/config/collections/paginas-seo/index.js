const paginasSeoCollection = {
    label: 'Páginas SEO',
    name: 'paginas-seo',
    folder: 'src/pages',
    create: false,
    slug: '{{slug}}',
    filter: {
        field: 'layout',
        value: '../templates/_siteseo_titles.njk'
    },
    fields: [
        { label: 'Layout', name: 'layout', widget: 'string', default: '../templates/_siteseo_titles.njk' },
        { label: 'Permalink', name: 'permalink', widget: 'string' },
        { label: 'Title', name: 'title', widget: 'string' },
        { label: 'Subtitle', name: 'subtitle', widget: 'text' },
        { label: 'Image', name: 'image', widget: 'image' },
        
        // Why section
        { label: 'Why Title 1', name: 'whytitle1', widget: 'text' },
        { label: 'Why Title 2', name: 'whytitle2', widget: 'text' },
        { label: 'Why Title 3', name: 'whytitle3', widget: 'text' },
        
        // SEO fields
        { label: 'Meta Title', name: 'metaTitle', widget: 'string' },
        { label: 'Meta Description', name: 'metaDescription', widget: 'text' },
        { label: 'Meta Keywords', name: 'metaKeywords', widget: 'string' },
        { label: 'Meta Robots', name: 'metaRobots', widget: 'string', default: 'index, follow' }
    ],
};

export default paginasSeoCollection;
