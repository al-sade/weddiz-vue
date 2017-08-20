import config from "./config";
const host = config.api.host;
const API = {
    categories: host + "categories",
    suppliersByCategory: (categoryId) => {return host + "suppliers/" + categoryId},
    albums: host + "albums",
    supplierAlbums: (supplierId) => {return host + "albums/" + supplierId }
    
    
};

export default API;