const indexCollection = {
    label: 'Página Principal',
    name: 'index',
    files: [
        {
            label: 'Página Principal',
            name: 'index',
            file: 'src/pages/index.md',
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
                { label: 'Home Video', name: 'home_video', widget: 'string' },
                
                // Intro benefits section
                { label: 'Intro Benefits Class', name: 'introbenefits_class', widget: 'string' },
                { label: 'Intro Benefits 2 Subtitle', name: 'introbenefits2_subtitle', widget: 'string' },
                { label: 'Intro Benefits 2 Content', name: 'introbenefits2_content', widget: 'text' },
                { label: 'Intro Benefits 2 Subcontent', name: 'introbenefits2_subcontent', widget: 'text' },
                
                // Services section
                { label: 'Servicios Title', name: 'servicios', widget: 'string' },
                { label: 'Servicios Description', name: 'servicios_description', widget: 'string' },
                
                // Values section
                { label: 'Intro Benefits Title', name: 'introbenefits_title', widget: 'string' },
                { label: 'Intro Benefits Subtitle', name: 'introbenefits_subtitle', widget: 'string' },
                
                // Values items (3 values for index)
                { label: 'Benefit 1 Title', name: 'introbenefits_1title', widget: 'string' },
                { label: 'Benefit 1 Description', name: 'introbenefits_1description', widget: 'text' },
                { label: 'Benefit 2 Title', name: 'introbenefits_2title', widget: 'string' },
                { label: 'Benefit 2 Description', name: 'introbenefits_2description', widget: 'text' },
                { label: 'Benefit 3 Title', name: 'introbenefits_3title', widget: 'string' },
                { label: 'Benefit 3 Description', name: 'introbenefits_3description', widget: 'text' },
                
                // Who we are section
                { label: 'Why Title 1 Title', name: 'whytitle1_title', widget: 'string' },
                { label: 'Why Title 1 Subtitle', name: 'whytitle1_subtitle', widget: 'string' },
                { label: 'Why Title 1 Description', name: 'whytitle1_description', widget: 'text' },
                { label: 'Why Title 1 Description 2', name: 'whytitle1_description2', widget: 'text' },
                
                // Box section
                { label: 'Box Img Img', name: 'box_img_img', widget: 'image' },
                { label: 'Box Img Title', name: 'box_img_title', widget: 'text' },
                { label: 'Box Img Description', name: 'box_img_description', widget: 'text' },
                { label: 'Box Img Description 2', name: 'box_img_description2', widget: 'text' },
                
                // Contact section
                { label: 'Contacta 4 Title', name: 'contacta_4_title', widget: 'string' },
                { label: 'Contacta 4 Subtitle', name: 'contacta_4_subtitle', widget: 'string' },
                { label: 'Contacta 5 Title', name: 'contacta_5_title', widget: 'string' },
                { label: 'Contacta 5 Subtitle', name: 'contacta_5_subtitle', widget: 'string' },
                { label: 'Contacta Map', name: 'contacta_map', widget: 'text' },
                { label: 'Banner Button', name: 'banner_button', widget: 'string' },
                { label: 'Direction', name: 'direction', widget: 'string' },
                { label: 'Teléfono', name: 'telefono', widget: 'string' },
                { label: 'Email', name: 'email', widget: 'string' },
                
                // Footer
                { label: 'Footer 1', name: 'footer_1', widget: 'string' },
                { label: 'Footer 2', name: 'footer_2', widget: 'text' },
                { label: 'Footer 3', name: 'footer_3', widget: 'text' },
                { label: 'Footer 4', name: 'footer_4', widget: 'string' }
            ]
        }
    ]
};

export default indexCollection;