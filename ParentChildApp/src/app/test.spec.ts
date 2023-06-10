describe ('first-test',()=>{
    let data:any;
    let a:number;
    let b:number;
    let str:string;

function factorial(n:number){
    let fact=1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}

let arr: number[] = [];
arr.push(10);
arr.push(15);
arr.push(5);
arr.push(22);
arr.sort((a,b)=> a-b);
function locate(num:number,arr:number[]){
    let j=0;
    let loc=0;
    arr.forEach((i)=>{
        
        if(num===i){
            loc=j;
        }
        j++;
    
    })
    return loc;
}


    beforeEach(()=>{
        console.log('from before');
        data={};
    });
    // it('fail test',()=>{

    // });
it('dummy test',()=>{}
);
  
    it('it should return true if flag is true',()=>{
    
        data.flag=false;
        data.flag=true;
        expect(data.flag).toBe(true);
    });

    it('it should add(10,10) and give 20',
    ()=>{
        a=10;
        b=10;
        expect(a+b).toBe(20);
    });

    it('it should subtract(20,10) and give 10',
    ()=>{
        a=20;
        b=10;
        expect(a-b).toBe(10);
    });

    it('it should multiply(20,10) and give 200',
    ()=>{
        a=20;
        b=10;
        expect(a*b).toBe(200);
    });

    it('factorial of a number',()=>
    {
        expect(factorial(2)).toBe(2);
        
    });
    it('locating a number',()=>{
        expect(locate(5,arr)).toBe(0);
    });
});