const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

routes.add('index', '/')
routes.add('about', '/about')
routes.add('contact', '/contact-us')
routes.add('services', '/services/:slug')
routes.add('products', '/products/:slug')