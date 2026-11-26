// The Dark / Light button in the navigation.
export class ThemeToggle {
  private button: HTMLButtonElement;
  private label: HTMLElement;

  constructor(button: HTMLButtonElement, label: HTMLElement) {
    this.button = button;
    this.label = label;
  }

  // Start listening for clicks on the button
  public init(): void {
    this.button.addEventListener('click', () => this.toggle());
    this.updateLabel();
  }

  // Switch between dark and light
  private toggle(): void {
    // The CSS uses other colours when the body has the "dark" class
    document.body.classList.toggle('dark');

    // Remember the choice for the next visit
    const isDark = document.body.classList.contains('dark');
    localStorage.setItem('jsTheme', isDark ? 'dark' : 'light');

    this.updateLabel();
  }

  // The button shows the mode you switch TO
  private updateLabel(): void {
    const isDark = document.body.classList.contains('dark');
    this.label.textContent = isDark ? 'Light' : 'Dark';
  }
}
