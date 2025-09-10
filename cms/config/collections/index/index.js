const indexCollection = {
    label: 'Página Principal',
    name: 'index',
    files: [
        {
            label: 'Página Principal',
            name: 'index',
            file: 'src/pages/index.md',
            fields: [
                { label: 'Layout', name: 'layout', widget: 'string', default: 'pages/_index.njk' },
                { label: 'Permalink', name: 'permalink', widget: 'string' },
                { label: 'Meta title', name: 'metaTitle', widget: 'string' },
                { label: 'Meta description', name: 'metaDescription', widget: 'text' },
                { label: 'Meta keywords', name: 'metaKeywords', widget: 'string' },
                { label: 'Meta robots', name: 'metaRobots', widget: 'string', default: 'index, follow' },
                { label: 'Tags', name: 'tags', widget: 'list', default: ['pages'] },
                { label: 'Sección', name: 'seccion', widget: 'string' },
                
                // Hero section
                { label: 'Hero Description', name: 'hero_description', widget: 'string' },
                { label: 'Hero Title', name: 'hero_title', widget: 'string' },
                { label: 'Hero Button', name: 'hero_btn', widget: 'string' },
                { label: 'Home Image', name: 'home_image', widget: 'image' },
                { label: 'Home Video', name: 'home_video', widget: 'string' },
                
                // CSS class
                { label: 'Intro Benefits Class', name: 'introbenefits_class', widget: 'string', default: 'bg-dark' },
                
                // Intro benefits section
                { label: 'Intro Benefits Subtitle', name: 'introbenefits2_subtitle', widget: 'string' },
                { label: 'Intro Benefits Content', name: 'introbenefits2_content', widget: 'text' },
                { label: 'Intro Benefits Subcontent', name: 'introbenefits2_subcontent', widget: 'text' },
                { label: 'Intro Benefits Title', name: 'introbenefits_title', widget: 'string' },
                { label: 'Intro Benefits Subtitle 2', name: 'introbenefits_subtitle', widget: 'string' },
                
                // Services section
                { label: 'Servicios Title', name: 'servicios', widget: 'string' },
                { label: 'Servicios Description', name: 'servicios_description', widget: 'string' },
                
                // Services items (6 services for index)
                { label: 'Servicio 1 Title', name: 'servicio1_title', widget: 'string' },
                { label: 'Servicio 1 Content', name: 'servicio1_content', widget: 'text' },
                { label: 'Servicio 2 Title', name: 'servicio2_title', widget: 'string' },
                { label: 'Servicio 2 Content', name: 'servicio2_content', widget: 'text' },
                { label: 'Servicio 3 Title', name: 'servicio3_title', widget: 'string' },
                { label: 'Servicio 3 Content', name: 'servicio3_content', widget: 'text' },
                { label: 'Servicio 4 Title', name: 'servicio4_title', widget: 'string' },
                { label: 'Servicio 4 Content', name: 'servicio4_content', widget: 'text' },
                { label: 'Servicio 5 Title', name: 'servicio5_title', widget: 'string' },
                { label: 'Servicio 5 Content', name: 'servicio5_content', widget: 'text' },
                { label: 'Servicio 6 Title', name: 'servicio6_title', widget: 'string' },
                { label: 'Servicio 6 Content', name: 'servicio6_content', widget: 'text' },
                
                // Box section
                { label: 'Box Img Img', name: 'box_img_img', widget: 'image' },
                
                // Hero description 2
                { label: 'Hero Description 2', name: 'hero_description2', widget: 'string' },
                
                // Values section
                { label: 'Intro Benefits Title 2', name: 'introbenefits_title', widget: 'string' },
                { label: 'Intro Benefits Subtitle 3', name: 'introbenefits_subtitle', widget: 'string' },
                
                // Values items (3 values for index)
                { label: 'Benefit 1 Title', name: 'introbenefits_1title', widget: 'string' },
                { label: 'Benefit 1 Description', name: 'introbenefits_1description', widget: 'text' },
                { label: 'Benefit 2 Title', name: 'introbenefits_2title', widget: 'string' },
                { label: 'Benefit 2 Description', name: 'introbenefits_2description', widget: 'text' },
                { label: 'Benefit 3 Title', name: 'introbenefits_3title', widget: 'string' },
                { label: 'Benefit 3 Description', name: 'introbenefits_3description', widget: 'text' },
                
                // Hook frase
                { label: 'Hook Frase', name: 'hookfrase', widget: 'string' },
                
                // Who we are section
                { label: 'Why Title 1 Title', name: 'whytitle1_title', widget: 'string' },
                { label: 'Why Title 1 Subtitle', name: 'whytitle1_subtitle', widget: 'string' },
                { label: 'Why Title 1 Description', name: 'whytitle1_description', widget: 'text' },
                { label: 'Why Title 1 Description 2', name: 'whytitle1_description2', widget: 'text' },
                
                // Box section 2
                { label: 'Box Img Title', name: 'box_img_title', widget: 'text' },
                { label: 'Box Img Description', name: 'box_img_description', widget: 'text' },
                { label: 'Box Img Description 2', name: 'box_img_description2', widget: 'text' },
                
                // Why choose us section
                { label: 'Why Title 2 Title', name: 'whytitle2_title', widget: 'string' },
                { label: 'Why Title 2 Subtitle', name: 'whytitle2_subtitle', widget: 'string' },
                { label: 'Why Title 2 Description', name: 'whytitle2_description', widget: 'text' },
                
                // Best ally section
                { label: 'Why Title 3 Title', name: 'whytitle3_title', widget: 'string' },
                { label: 'Why Title 3 Subtitle', name: 'whytitle3_subtitle', widget: 'string' },
                { label: 'Why Title 3 Description', name: 'whytitle3_description', widget: 'text' },
                
                // Hook frase imagen
                { label: 'Hook Frase Imagen', name: 'hookfraseimagen', widget: 'string' },
                
                // Content text sections
                { label: 'Content Text Title 1', name: 'content_text_title1', widget: 'string' },
                { label: 'Content Text Subtitle 1', name: 'content_text_subtitle1', widget: 'string' },
                { label: 'Content Text Text 1', name: 'content_text_text1', widget: 'text' },
                { label: 'Content Text Title 2', name: 'content_text_title2', widget: 'string' },
                { label: 'Content Text Subtitle 2', name: 'content_text_subtitle2', widget: 'string' },
                { label: 'Content Text Text 2', name: 'content_text_text2', widget: 'text' },
                
                // General content
                { label: 'Subtitle', name: 'subtitle', widget: 'string' },
                { label: 'Image', name: 'image', widget: 'image' },
                { label: 'Content 2', name: 'content_2', widget: 'text' },
                
                // Team section
                { label: 'Team 1 Title', name: 'team1_title', widget: 'string' },
                { label: 'Team 1 Subtitle', name: 'team1_subtitle', widget: 'string' },
                { label: 'Team 1 Descripción', name: 'team1_descripción', widget: 'text' },
                
                // Contact section
                { label: 'Contacta 4 Title', name: 'contacta_4_title', widget: 'string' },
                { label: 'Contacta 4 Subtitle', name: 'contacta_4_subtitle', widget: 'string' },
                { label: 'Contacta 5 Title', name: 'contacta_5_title', widget: 'string' },
                { label: 'Contacta 5 Subtitle', name: 'contacta_5_subtitle', widget: 'string' },
                { label: 'Contacta Map', name: 'contacta_map', widget: 'text' },
                { label: 'Banner Button', name: 'banner_button', widget: 'string' },
                { label: 'Dirección', name: 'direction', widget: 'string' },
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
