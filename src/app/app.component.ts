import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';


  countCapital(value:string):number{
    let  count :number =0
      for (let i=0;i<value.length;i++){

        if (value.charCodeAt(i)>=65 && value.charCodeAt(i)<=90){
                count++;
        }
        
      }
      return count;
  }

  checkPassword(input):boolean{
        if(input.match(/(?=.*\d{2})(?=.*[a-z]{3})(?=.*[A-Z]{2})(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}/)){
          return true
        }
        else {
          return false
        }
}
  arrayAddition(a:Array<number>):number{
      let sum=0;
      for(let i=0;i<a.length;i++){
        sum=sum+a[i];
      }
      return sum;
  }

  



}
