/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: 'https://raatook.mg', // Remplacez par votre URL
    generateRobotsTxt: true, // génère un fichier robots.txt
    sitemapSize: 5000, // optionnel : nombre d'URLs par sitemap
    changefreq: 'daily', // optionnel : fréquence de changement
    priority: 0.7, // optionnel : priorité des pages
    exclude: [], // optionnel : pages à exclure
}

module.exports = config
