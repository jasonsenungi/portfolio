// Highlights the link of the section you are looking at while you scroll.
// Every link has a data-section attribute with the id of its section.
export class ScrollTracker {
  private links: HTMLAnchorElement[];

  constructor(links: HTMLAnchorElement[]) {
    this.links = links;
  }

  // Check again every time you scroll
  public init(): void {
    window.addEventListener('scroll', () => this.update());
    this.update();
  }

  private update(): void {
    // A section counts as "current" once its top passes 40% of the screen height
    const line = window.innerHeight * 0.4;
    let currentId = '';

    for (const link of this.links) {
      const id = link.dataset.section ?? '';
      const section = document.getElementById(id);
      if (section && section.getBoundingClientRect().top <= line) {
        currentId = id;
      }
    }

    // Give the current link the "on" class and remove it from the others
    for (const link of this.links) {
      link.classList.toggle('on', link.dataset.section === currentId);
    }
  }
}
