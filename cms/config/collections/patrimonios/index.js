const patrimoniosCollection = {
    label: 'Patrimonios Inmobiliarios',
    name: 'patrimonios',
    files: [
        {
            label: 'Página de Patrimonios',
            name: 'patrimonios',
            file: 'src/pages/patrimonios.md',
            fields: [
                { label: 'Layout', name: 'layout', widget: 'string', default: 'pages/_servicios.njk' },
                { label: 'Permalink', name: 'permalink', widget: 'string' },
                { label: 'Meta title', name: 'metaTitle', widget: 'string' },
                { label: 'Meta description', name: 'metaDescription', widget: 'text' },
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
                
                // CSS class
                { label: 'Intro Benefits Class', name: 'introbenefits_class', widget: 'string', default: 'bg-dark-2' },
                
                // Intro benefits section
                { label: 'Intro Benefits Subtitle', name: 'introbenefits2_subtitle', widget: 'string' },
                { label: 'Intro Benefits Content', name: 'introbenefits2_content', widget: 'text' },
                { label: 'Intro Benefits Title', name: 'introbenefits_title', widget: 'string' },
                { label: 'Intro Benefits Subtitle 2', name: 'introbenefits_subtitle', widget: 'string' },
                
                // Benefits items (7 benefits for patrimonios)
                { label: 'Benefit 1 Title', name: 'introbenefits_1title', widget: 'string' },
                { label: 'Benefit 1 Description', name: 'introbenefits_1description', widget: 'text' },
                { label: 'Benefit 2 Title', name: 'introbenefits_2title', widget: 'string' },
                { label: 'Benefit 2 Description', name: 'introbenefits_2description', widget: 'text' },
                { label: 'Benefit 3 Title', name: 'introbenefits_3title', widget: 'string' },
                { label: 'Benefit 3 Description', name: 'introbenefits_3description', widget: 'text' },
                { label: 'Benefit 4 Title', name: 'introbenefits_4title', widget: 'string' },
                { label: 'Benefit 4 Description', name: 'introbenefits_4description', widget: 'text' },
                { label: 'Benefit 5 Title', name: 'introbenefits_5title', widget: 'string' },
                { label: 'Benefit 5 Description', name: 'introbenefits_5description', widget: 'text' },
                { label: 'Benefit 6 Title', name: 'introbenefits_6title', widget: 'string' },
                { label: 'Benefit 6 Description', name: 'introbenefits_6description', widget: 'text' },
                { label: 'Benefit 7 Title', name: 'introbenefits_7title', widget: 'string' },
                { label: 'Benefit 7 Description', name: 'introbenefits_7description', widget: 'text' },
                
                // Box section
                { label: 'Box Img Title', name: 'box_img_title', widget: 'text' },
                { label: 'Box Img Description', name: 'box_img_description', widget: 'text' },
                { label: 'Box Img Img', name: 'box_img_img', widget: 'image' },
                
                // Why section
                { label: 'Why Title Subtitle', name: 'whytitle1_subtitle', widget: 'text' },
                { label: 'Why Title Description', name: 'whytitle1_description', widget: 'string' },
                
                // Services section
                { label: 'Servicios Title', name: 'servicios', widget: 'string' },
                { label: 'Servicio 1 Title', name: 'servicio1_title', widget: 'string' },
                { label: 'Servicio 1 Content', name: 'servicio1_content', widget: 'text' },
                { label: 'Servicio 1 Img', name: 'servicio1_img', widget: 'string' },
                { label: 'Servicio 2 Title', name: 'servicio2_title', widget: 'string' },
                { label: 'Servicio 2 Content', name: 'servicio2_content', widget: 'text' },
                { label: 'Servicio 2 Img', name: 'servicio2_img', widget: 'string' },
                { label: 'Servicio 3 Title', name: 'servicio3_title', widget: 'string' },
                { label: 'Servicio 3 Content', name: 'servicio3_content', widget: 'text' },
                { label: 'Servicio 3 Img', name: 'servicio3_img', widget: 'string' },
                { label: 'Servicio 4 Title', name: 'servicio4_title', widget: 'string' },
                { label: 'Servicio 4 Content', name: 'servicio4_content', widget: 'text' },
                { label: 'Servicio 4 Img', name: 'servicio4_img', widget: 'string' },
                
                // Contact section
                { label: 'Contacta 4 Title', name: 'contacta_4_title', widget: 'string' },
                { label: 'Contacta 4 Subtitle', name: 'contacta_4_subtitle', widget: 'string' }
            ]
        }
    ]
};

export default patrimoniosCollection;
