import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-sample1',
    template: `
        <p>sample1 component {{ text }} </p>
        <button (click)="click()">자식의 버튼</button>
        `,
    styles: [
        `
            p {
                color: red;
            }
        `
    ]
})
export class Sample1Component {
    @Input() text;
    @Input() click;
}
