import {Component} from '@angular/core';
import {Employee} from './models/employee.model'

@Component({
    selector:'app-comp',
    templateUrl:'./app.component.html'
})

export class AppComponent{
    languages=["AngularJs","ReactJs","VueJs","D3Js"];

    model = new Employee("Angular","React",0,true,"female","AngularJs")

    firstToUpper(value:string){
        if(value.length>0)
            this.model.firstName= value.charAt(0).toUpperCase()+value.slice(1)
        else
            this.model.firstName= value
    }
}


/*
    ng-untouched  ng-pristine ng-valid
    ng-touched    ng-dirty    ng-invalid
*/