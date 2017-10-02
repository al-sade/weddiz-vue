import config from './config'
const host = config.api.host
const API = {
  categories: host + 'categories',
  suppliersByCategory: (categoryId) => { return host + 'suppliers/' + categoryId },
  albums: host + 'albums',
  supplierAlbums: (supplierId) => { return host + 'albums/' + supplierId },
  supplier: host + 'supplier',
  supplierById: (supplierId) => { return host + 'supplier/' + supplierId }
}

export default API
