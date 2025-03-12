import { Component, inject } from '@angular/core';
import { CharacterListComponent } from '../../components/dragonball/character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../../components/dragonball/character-add/dragonball-character-add/dragonball-character-add.component';
import { DragonballService } from '../../services/dragonball.service';

@Component({
    templateUrl: './dragonball-super-page.component.html',
    selector: 'dragonball-super',
    imports: [CharacterListComponent, DragonballCharacterAddComponent],
})
export class DragonballSuperPageComponent {
    dragonballService = inject(DragonballService);
}
