import {Component, OnInit} from '@angular/core';
import {DataService} from '../services/data/data.service';
import {Data} from '../models/app.models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
    names: any;
    selectedAll: any;
    data: Data;

    constructor(private dataService: DataService) {
        this.names = [
            {name: 'Prashobh', selected: false},
            {name: 'Abraham', selected: false},
            {name: 'Anil', selected: false},
            {name: 'Sam', selected: false},
            {name: 'Natasha', selected: false},
            {name: 'Marry', selected: false},
            {name: 'Zian', selected: false},
            {name: 'karan', selected: false},
        ]
    }

    ngOnInit(): void {
        this.dataService.getData().subscribe( (arrivedData) => {this.data = arrivedData; } );
    }

    selectAll() {
        for (let i = 0; i < this.names.length; i++) {
            this.names[i].selected = this.selectedAll;
        }
    }

    checkIfAllSelected() {
        this.selectedAll = this.names.every(function (item: any) {
            return item.selected === true;
        })
    }
}
