// pages/api/sitemap.xml.js
import {SitemapStream, streamToPromise} from "sitemap";
import {Readable} from "stream";

export default async (req, res) => {
    // Listado de tus páginas
    const sitemap = [{
        url: "/",
        changefreq: "daily",
        priority: 1.0
    }];
    const sitemapStream = new SitemapStream({
        hostname: 'https://urlshort-dusky.vercel.app'
    });
    res.writeHead(200, {
        "Content-Type": "application/xml"
    });
    const xmlString = await streamToPromise(
        Readable
            .from(sitemap)
            .pipe(sitemapStream)
    ).then(
        (data) => data.toString()
    );
    res.end(xmlString);
};