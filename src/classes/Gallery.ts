import type { Screenshot } from '../data/content';

// A row of screenshots you can slide through with two buttons.
export class Gallery {
  private container: HTMLElement;
  private screenshots: Screenshot[];

  constructor(container: HTMLElement, screenshots: Screenshot[]) {
    this.container = container;
    this.screenshots = screenshots;
  }

  // Build the HTML for the gallery and connect the buttons
  public render(): void {
    // Turn every screenshot into a <figure>
    let figures = '';
    for (const shot of this.screenshots) {
      figures += `
        <figure>
          <div class="shot" data-c="${shot.caption}">
            <div class="bar"><i></i><i></i><i></i><span>${shot.caption}</span></div>
            <img src="img/${shot.file}.webp" alt="${shot.caption}" loading="lazy">
          </div>
          <figcaption>${shot.caption}</figcaption>
        </figure>`;
    }

    this.container.innerHTML = `
      <div class="track">${figures}</div>
      <div class="galnav">
        <button type="button" class="prev" aria-label="Previous">
          <svg viewBox="0 0 24 24"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>
        </button>
        <button type="button" class="next" aria-label="Next">
          <svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </button>
      </div>`;

    const previousButton = this.container.querySelector('.prev') as HTMLButtonElement;
    const nextButton = this.container.querySelector('.next') as HTMLButtonElement;
    previousButton.addEventListener('click', () => this.slide(-1));
    nextButton.addEventListener('click', () => this.slide(1));
  }

  // Slide left (-1) or right (1)
  private slide(direction: number): void {
    const track = this.container.querySelector('.track') as HTMLElement;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
  }
}
