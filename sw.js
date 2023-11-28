const nombreCache = "PWAPW"
const archivosCache =[
    "/",
    "/index.html",
    "/css/estilos.css",
    "/CV/CV NATALIA AVILA HERNANDEZ.pdf",
    "/js/app.js",
    "/js/main.js",
    "/img/img-Naty.jpeg",
]

self.addEventListener('install', e =>{
    console.log('El service worker se instalo', e)
    e.waitUntil(
            caches.open(nombreCache).then((cache)=>{
            console.log("Cache guardada correctamente")
            cache.addAll(archivosCache);
        })
    )
})

self.addEventListener('activate', e =>{
    console.log('Service Worker activo',e)
})

self.addEventListener('fetch', e=> {
    console.log('Fetch.. ', e)
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache =>{
            return respuestaCache
    })
    )
})