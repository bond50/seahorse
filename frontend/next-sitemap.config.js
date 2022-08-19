const siteUrl = "https://seahorsenergy.com";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    sitemapSize: 7000,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: "*",
                disallow: ["/admin", "/admin/*", "/user", "/user/*", "/auth", "/auth/", "/signin"]
            },
            {userAgent: "*", allow: "/"},
        ],
        additionalSitemaps: [
            `${siteUrl}/services.xml`,
            `${siteUrl}/categories-sitemap.xml`,
            `${siteUrl}/tags-sitemap.xml`,
            `${siteUrl}/blogs-sitemap.xml`,
        ],
    },
    exclude: [
        "/services.xml",
        "/categories-sitemap.xml",
        "/tags-sitemap.xml",
        "/admin",
        "/admin/*",
        "/signin",
        "/signin/*",
        "/auth",
        "/auth/*",
        "/user",
        "/user/*",
        "/profile",
        "/profile/*",
        "/blogs-sitemap.xml"
    ],
};
