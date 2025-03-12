import {
    ChangeDetectionStrategy,
    Component,
    input,
    output,
    signal,
} from '@angular/core';
import { Character } from '../../../../interfaces/character.interface';

@Component({
    selector: 'app-dragonball-character-add',
    templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {
    name = signal('');
    power = signal(0);
    addNewCharacter = output<Character>();

    addCharacter() {
        const newCharacter: Character = {
            id: 0,
            name: this.name(),
            power: this.power(),
        };

        this.addNewCharacter.emit(newCharacter);
        this.resetFields();
    }

    resetFields() {
        this.name.set('');
        this.power.set(0);

    }
}
