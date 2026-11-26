// The screenshots for each gallery on the page.

/** One screenshot: the file name (without extension) and its caption. */
export interface Screenshot {
  file: string;
  caption: string;
}

/** Screenshots for each gallery slider, keyed by the data-g attribute in the HTML. */
export const galleries: Record<string, Screenshot[]> = {
  xml: [
    { file: 'shopify-theme-editor', caption: 'Customising a Shopify theme' },
    { file: 'shopify-productpagina', caption: 'A product page in the webshop' },
    { file: 'product-listing-varianten', caption: 'Setting up a product with variants' },
    { file: 'vakantiewebsite-spanjeparadores', caption: 'Travel website SpanjeParadores.nl' },
    { file: 'php-adminpaneel-pagina-overzicht', caption: 'The PHP admin panel' },
  ],
  webshop: [
    { file: 'winkelwagen-verwijderen-bevestigen', caption: 'A confirmation before removing a game' },
    { file: 'winkelwagen-item-verwijderd', caption: 'A message with the updated total' },
    { file: 'verwijderen-ontwerp', caption: 'My sketch of removing an item' },
    { file: 'webshop-homepage', caption: 'The homepage (built by the team)' },
    { file: 'webshop-browse', caption: 'Browsing games (built by the team)' },
  ],
  dokkie: [
    { file: '1-dokkie-homepage', caption: 'The homepage' },
    { file: '4-evenement-detail', caption: 'An event with participants, expenses and payments' },
    { file: '6-deelnemers-overzicht', caption: 'Participants with their share and whether they’ve paid' },
    { file: '8-betalingen-overzicht', caption: 'The payments overview' },
  ],
};
