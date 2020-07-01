

import {Pipe} from '@angular/core'

@Pipe({
    name: 'myChk'
  })

export class myChk {

       transform(input:number,param:any):boolean{
          if(param === "Prime"){
            for (let i=2 ;i <input/2;i++){
                if(input%i===0){
                  return false;
                }
                else {
                  return true;
                }
              }
           
          } 
          if (param==="Even"){
              if(input %2==0)
                 return true;
              else
                 return false;
          }     
          if (param==="Odd"){
              if(input%2!=0)
                return true;
              else 
                return false;
          }
          if (param==="Perfect"){
                let sum =0;
                for (let i=1;i<input;i++){
                    if(input%i==0)
                       sum=sum+i
                }
                if (sum===input)
                  return true ;
                else 
                  return false;
          }
     
       }

}