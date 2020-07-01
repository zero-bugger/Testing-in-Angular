import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { myMul } from './pipes/mymul';
import { myAdd } from  './pipes/myadd';
import { myChk } from  './pipes/marvellousChk'
 
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('test app is running!');
  });
  
  it('count capital in string',()=>{
      let val="Joey Tribbiani"
      let obj = new AppComponent();
      expect(obj.countCapital(val)).toEqual(2);

  })
  it ('check the password' , ()=>{
      let val="CHandler@12"
      expect(new AppComponent().checkPassword(val)).toBeTrue();
      
  })
  it ('check array additon', ()=>{
      let a = [1,2,3,4,5];
      expect(new AppComponent().arrayAddition(a))
      .toEqual(15);
  })

  it('add 2 inputs', () => {
    let add = new myAdd();
    expect(add.transform(10,20)).toEqual(30);
  });

  it('multiply 2 inputs', () => {
      let mul = new myMul();
      expect(mul.transform(10,20)).toEqual(200);
    });
    
  it('pipe to check Even',()=>{
      expect(new myChk().transform(8,"Even")).toBeTrue();
  })
  it('pipe to check Prime',()=>{
    expect(new myChk().transform(7,"Prime")).toBeTrue();
  })
  it('pipe to check Perfect',()=>{
    expect(new myChk().transform(28,"Perfect")).toBeTrue();
  })
  it('pipe to check Odd',()=>{
    expect(new myChk().transform(5,"Odd")).toBeTrue();
  });
  


});
