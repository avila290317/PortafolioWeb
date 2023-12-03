const nombreCache = "PWAPW"
const archivosCache =[
    "/",
    "index.html",
    "css/estilos.css",
    "CV/CV NATALIA AVILA HERNANDEZ.pdf",
    "js/app.js",
    "js/main.js",
    "img/img-Naty.jpeg",
    "img/apiRest.jpg",
    "img/pwa.jpg",
    "img/VJ.jpeg"
]

self.addEventListener('install', e => {
    console.log("El SW se instaló", e);
    e.waitUntil(
        caches.open(nombreCache)
        .then((cache) => {
            console.log();
            return cache.addAll(archivosCache);
        })
        .catch(error => {
            console.error('Error durante la instalación del caché:', error);
        })
    );
});

self.addEventListener('fetch', e => {
    console.log("Fetch...", e);
    e.respondWith(
        caches.match(e.request)
        .then(respuestaCache => {
            return respuestaCache || fetch(e.request)
                .then(respuestaRed => {
                    return caches.open(nombreCache)
                        .then(cache => {
                            cache.put(e.request, respuestaRed.clone());
                            return respuestaRed;
                        });
                })
                .catch(error => {
                    console.error('Error al intentar recuperar el recurso:', error);
                });
        })
    );
});

self.addEventListener('activate', e => {
    console.log("El SW está activo", e);
    e.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys.map(key => {
                if (key !== nombreCache) {
                    return caches.delete(key);
                }
            }));
        })
    );
});