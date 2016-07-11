import {Component} from '@angular/core';
import {InputText} from 'primeng/primeng';
import {TabView} from 'primeng/primeng';
import {TabPanel} from 'primeng/primeng';
import {Dialog} from 'primeng/primeng';
import {Button} from 'primeng/primeng';

@Component({
    selector: 'my-app',
    templateUrl: 'app.html',
    directives: [InputText, TabView, TabPanel, Dialog, Button]
})

export class AppComponent {
    display: boolean = false;

    showDialog() {
        this.display = true;
    }
}