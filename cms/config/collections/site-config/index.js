const siteConfigCollection = {
    label: 'Configuración del Sitio',
    name: 'site-config',
    files: [
        {
            label: 'Configuración General',
            name: 'general',
            file: 'src/_data/site.json',
            fields: [
                { label: 'Nombre del Sitio', name: 'name', widget: 'string' },
                { label: 'Descripción', name: 'description', widget: 'text' },
                { label: 'URL', name: 'url', widget: 'string' },
                { label: 'Email de Contacto', name: 'email', widget: 'string' },
                { label: 'Teléfono', name: 'phone', widget: 'string' },
                { label: 'Dirección', name: 'address', widget: 'text' },
                { label: 'Logo', name: 'logo', widget: 'image' },
                { label: 'Favicon', name: 'favicon', widget: 'image' },
                { label: 'Redes Sociales', name: 'social', widget: 'object', fields: [
                    { label: 'Facebook', name: 'facebook', widget: 'string' },
                    { label: 'Twitter', name: 'twitter', widget: 'string' },
                    { label: 'LinkedIn', name: 'linkedin', widget: 'string' },
                    { label: 'Instagram', name: 'instagram', widget: 'string' },
                    { label: 'YouTube', name: 'youtube', widget: 'string' }
                ]},
                { label: 'SEO', name: 'seo', widget: 'object', fields: [
                    { label: 'Google Analytics', name: 'googleAnalytics', widget: 'string' },
                    { label: 'Google Tag Manager', name: 'googleTagManager', widget: 'string' },
                    { label: 'Meta Keywords', name: 'metaKeywords', widget: 'string' },
                    { label: 'Meta Description', name: 'metaDescription', widget: 'text' }
                ]}
            ]
        }
    ]
};

export default siteConfigCollection;
