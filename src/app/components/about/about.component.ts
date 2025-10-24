import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  values = [
    {
      icon: 'shield',
      title: 'Integridad',
      description: 'Formamos personas íntegras con valores sólidos y principios éticos.'
    },
    {
      icon: 'heart',
      title: 'Pasión por Aprender',
      description: 'Cultivamos el amor por el conocimiento y la curiosidad natural.'
    },
    {
      icon: 'target',
      title: 'Excelencia',
      description: 'Buscamos la excelencia en cada aspecto de la educación.'
    },
    {
      icon: 'lightbulb',
      title: 'Innovación',
      description: 'Implementamos métodos educativos modernos y efectivos.'
    }
  ];
}
