// Import the configuration of each collection from cms/config/collections

import blogPostsCollection from "./collections/blog-post";
import pagesCollection from "./collections/pages";
import serviciosCollection from "./collections/servicios";
import siteConfigCollection from "./collections/site-config";
import paginasServiciosCollection from "./collections/paginas-servicios";
import paginasContactoCollection from "./collections/paginas-contacto";
import paginasSeoCollection from "./collections/paginas-seo";
import paginasGeneralesCollection from "./collections/paginas-generales";

// Build the Netlify JS configuration object
const config = {
  locale: 'es',
  backend: {
    name: "git-gateway",
    branch: "main"
  },
  // It is not required to set `load_config_file` if the `config.yml` file is
  // missing, but will improve performance and avoid a load error.
  // For now we also load the yaml file and decap will merge the values
  load_config_file: true,
  media_library: {
    name: "cloudinary",
    config: {
      cloud_name: "XXXX",
      api_key: "XXXX"
    }
  },
  collections: [
    // Include the collections imported from cms/config/collections
    siteConfigCollection,
    paginasServiciosCollection,
    paginasContactoCollection,
    paginasSeoCollection,
    paginasGeneralesCollection,
    pagesCollection,
    serviciosCollection,
    blogPostsCollection,
  ],
};

export default config;
