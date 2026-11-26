// Starting point of the site: creates an object of every class and starts it.
import { galleries } from './data/content';
import { ThemeToggle } from './classes/ThemeToggle';
import { Gallery } from './classes/Gallery';
import { Lightbox } from './classes/Lightbox';
import { ScrollTracker } from './classes/ScrollTracker';

// 1. The Dark / Light button
const themeButton = document.querySelector('#theme') as HTMLButtonElement;
const themeLabel = document.querySelector('#tlabel') as HTMLElement;
new ThemeToggle(themeButton, themeLabel).init();

// 2. A gallery for every <div class="gal" data-g="...">
const galleryDivs = document.querySelectorAll<HTMLElement>('.gal');
for (const div of galleryDivs) {
  const name = div.dataset.g ?? '';
  new Gallery(div, galleries[name]).render();
}

// 3. Click a screenshot to see it big
const zoomDialog = document.querySelector('#zoom') as HTMLDialogElement;
new Lightbox(zoomDialog).init();

// 4. Highlight where you are: in the route card on the left and in the navigation
const railLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.rail a'));
new ScrollTracker(railLinks).init();

const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.nav .links a'));
new ScrollTracker(navLinks).init();
