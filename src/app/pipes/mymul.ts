
import {Pipe} from '@angular/core'

@Pipe({
    name: 'myMul'
  })

export class myMul {

        transform(a:number,b:number){
            return a*b;
        }

}