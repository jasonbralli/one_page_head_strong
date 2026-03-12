// 🔥 Carrega o CSS de forma não bloqueante e compatível com CSP
const preloadLink = document.querySelector('link[rel="preload"][as="style"]');
if (preloadLink) {
    preloadLink.rel = 'stylesheet';
}