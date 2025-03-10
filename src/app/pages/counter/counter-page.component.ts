import {
    ChangeDetectionStrategy,
    Component,
    signal,
    WritableSignal,
} from '@angular/core';

@Component({
    templateUrl: './counter-page.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterPageComponent {
    counter: number = 10;
    counterSignal: WritableSignal<number> = signal(10);

    increaseCounterBy(value: number) {
        this.counter += value;
        this.counterSignal.update((currentValue) => currentValue + value);
    }

    resetCounter() {
        this.counter = 0;
        this.counterSignal.set(0);
    }
}
