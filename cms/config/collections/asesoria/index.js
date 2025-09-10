const asesoriaCollection = {
    label: 'Asesoría Jurídica',
    name: 'asesoria',
    files: [
        {
            label: 'Página de Asesoría',
            name: 'asesoria',
            file: 'src/pages/asesoria.md',
            fields: [
                { label: 'Permalink', name: 'permalink', widget: 'string' },
                { label: 'Meta title', name: 'metaTitle', widget: 'string' },
                { label: 'Meta description', name: 'metaDescription', widget: 'text' },
                { label: 'Meta keywords', name: 'metaKeywords', widget: 'string' },
                { label: 'Meta robots', name: 'metaRobots', widget: 'string', default: 'index, follow' },
                { label: 'Sección', name: 'seccion', widget: 'string' },
                
                // Hero section
                { label: 'Hero Description', name: 'hero_description', widget: 'string' },
                { label: 'Hero Title', name: 'hero_title', widget: 'string' },
                { label: 'Hero Button', name: 'hero_btn', widget: 'string' },
                { label: 'Home Image', name: 'home_image', widget: 'image' },
                
                // Intro benefits section
                { label: 'Intro Benefits Class', name: 'introbenefits_class', widget: 'string' },
                { label: 'Intro Benefits 2 Subtitle', name: 'introbenefits2_subtitle', widget: 'string' },
                { label: 'Intro Benefits 2 Content', name: 'introbenefits2_content', widget: 'text' },
                { label: 'Intro Benefits Title', name: 'introbenefits_title', widget: 'string' },
                { label: 'Intro Benefits Subtitle', name: 'introbenefits_subtitle', widget: 'string' },
                
                // Box section
                { label: 'Box Img Title', name: 'box_img_title', widget: 'string' },
                { label: 'Box Img Description', name: 'box_img_description', widget: 'text' },
                { label: 'Box Img Img', name: 'box_img_img', widget: 'image' },
                
                // Benefits items (7 benefits for asesoria)
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
                
                // Services section
                { label: 'Servicios Title', name: 'servicios', widget: 'string' },
                
                // Contact section
                { label: 'Contacta 4 Title', name: 'contacta_4_title', widget: 'string' },
                { label: 'Contacta 4 Subtitle', name: 'contacta_4_subtitle', widget: 'string' }
            ]
        }
    ]
};

export default asesoriaCollection;