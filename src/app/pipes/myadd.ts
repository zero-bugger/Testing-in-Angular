import { pipe } from "rxjs";

import {Pipe} from '@angular/core'

@Pipe({
    name: 'myAdd'
  })

export class myAdd {

        transform(a:number,b:number){
            return a+b;
        }

}