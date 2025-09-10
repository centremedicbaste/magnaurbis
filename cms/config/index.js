// Import the configuration of each collection from cms/config/collections

import administracionCollection from "./collections/administracion";
import contactaCollection from "./collections/contacta";
import asesoriaCollection from "./collections/asesoria";
import gestioncomercialCollection from "./collections/gestioncomercial";
import indexCollection from "./collections/index";
import patrimoniosCollection from "./collections/patrimonios";

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
  previewStyles: [
    {
      label: 'Estilos principales',
      url: '/assets/css/style.css'
    }
  ],
  collections: [
    // Include the collections imported from cms/config/collections
    administracionCollection,
    contactaCollection,
    asesoriaCollection,
    gestioncomercialCollection,
    indexCollection,
    patrimoniosCollection,
  ],
};

export default config;
