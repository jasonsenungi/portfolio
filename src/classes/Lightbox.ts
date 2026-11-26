// Shows a screenshot big in the middle of the screen when you click it.
export class Lightbox {
  private dialog: HTMLDialogElement;
  private image: HTMLImageElement;
  private caption: HTMLElement;

  constructor(dialog: HTMLDialogElement) {
    this.dialog = dialog;
    this.image = dialog.querySelector('img') as HTMLImageElement;
    this.caption = dialog.querySelector('p') as HTMLElement;
  }

  // Start listening for clicks
  public init(): void {
    // A click anywhere on the page: was it on a screenshot?
    document.addEventListener('click', (event) => {
      const shot = (event.target as HTMLElement).closest('.shot') as HTMLElement | null;
      if (shot) {
        this.open(shot);
      }
    });

    // The × button closes it
    const closeButton = this.dialog.querySelector('button') as HTMLButtonElement;
    closeButton.addEventListener('click', () => this.dialog.close());

    // A click on the dark background closes it too
    this.dialog.addEventListener('click', (event) => {
      if (event.target === this.dialog) {
        this.dialog.close();
      }
    });
  }

  // Copy the clicked image into the popup and show it
  private open(shot: HTMLElement): void {
    const clickedImage = shot.querySelector('img') as HTMLImageElement;
    this.image.src = clickedImage.src;
    this.image.alt = clickedImage.alt;
    this.caption.textContent = shot.dataset.c ?? '';

    if (!this.dialog.open) {
      this.dialog.showModal();
    }
  }
}
