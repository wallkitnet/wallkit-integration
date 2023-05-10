export const isCrawler = () => {
    return /bot|googlebot|crawler|spider|robot|crawling|facebookexternalhit|facebookcatalog/i.test(navigator.userAgent);
}
