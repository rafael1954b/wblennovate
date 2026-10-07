import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

interface Project {
  icon: string;
  bgClass: '' | 'purple-bg' | 'blue-bg';
  category: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('wblennovate');
  protected readonly menuOpen = signal(false);

  // Para agregar un proyecto nuevo, copia un objeto y cambia sus datos.
  // bgClass rota entre '', 'purple-bg' y 'blue-bg' para variar el color de fondo.
  protected readonly projects: Project[] = [
    {
      icon: '🧩',
      bgClass: '',
      category: 'Categoría del proyecto',
      title: 'Nombre del proyecto 1',
      description: 'Describe aquí en una o dos líneas qué hiciste, para quién y qué problema resolviste.'
    },
    {
      icon: '🧩',
      bgClass: 'purple-bg',
      category: 'Categoría del proyecto',
      title: 'Nombre del proyecto 2',
      description: 'Describe aquí en una o dos líneas qué hiciste, para quién y qué problema resolviste.'
    },
    {
      icon: '🧩',
      bgClass: 'blue-bg',
      category: 'Categoría del proyecto',
      title: 'Nombre del proyecto 3',
      description: 'Describe aquí en una o dos líneas qué hiciste, para quién y qué problema resolviste.'
    }
  ];

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
