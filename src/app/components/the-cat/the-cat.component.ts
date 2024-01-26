import { Component } from '@angular/core';
import { CatService } from '../../core/services/cat.service';
import { Observable } from 'rxjs';
import { extractFirstWord } from '../../utils/utils';
import { CatFact } from '../../interfaces/cat';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-the-cat',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './the-cat.component.html',
  styleUrl: './the-cat.component.scss'
})

export class TheCatComponent {

  public catFact!: Observable<CatFact>
  public fact!: string
  public catImage!: string

  constructor(private service: CatService) {  }

  ngOnInit(): void {
    this.init()
  }

  public resetCat() {
    this.init()
  }

  private init() {
    this.catFact = this.service.getCatFact();
    this.catFact.subscribe(response => {
      this.fact = response.fact

      this.getImageByFirstWord(extractFirstWord(response.fact))
    });
  }

  private getImageByFirstWord(word: string): void {
    this.catImage = this.service.getCatImageByWord(word)
  }
}
