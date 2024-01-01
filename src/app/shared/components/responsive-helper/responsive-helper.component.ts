import { Component } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-responsive-helper',
  standalone: true,
  imports: [NgIf],
  templateUrl: './responsive-helper.component.html',
  styleUrl: './responsive-helper.component.css'
})
export class ResponsiveHelperComponent {

  public env: any = environment;

  constructor() {}

  ngOnInit(): void {}

}
