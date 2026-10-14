import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from './skills/skills';
import { Contact } from './contact/contact';
import { Footer } from './footer/footer';
import { Projects } from './projects/projects';

@Component({
  imports: [RouterOutlet, Navbar, Hero, About, Skills, Contact, Footer, Projects],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('portafolio');
}
