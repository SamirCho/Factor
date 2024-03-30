let a=6
let b=11
let c=-10

//[coef of x , value of x-int]
let x1=[1,(-b+Math.sqrt(b**2-4*a*c))/(2*a)]
let x2=[1,(-b-Math.sqrt(b**2-4*a*c))/(2*a)]
let addedCoef=false
let extraCoef=1

if(a==1){
    addedCoef=true
    x1[1]=addSign(x1[1])
    x2[1]=addSign(x2[1])
    if(x1[1]==x2[1]){
        console.log(`(x${x1[1]})^2`)
    }else{
        console.log(`(x${x1[1]})(x${x2[1]})`)
    }
}else{
    if(isPrime(a)){
        addedCoef=true
        if(!isInt(x1[1])&&isInt(a*x1[1])){
            x1[0]*=a
            x1[1]*=a
        }else if(!isInt(x2[1])&&isInt(a*x2[1])){
            x2[0]*=a
            x2[1]*=a
        }
    }else{
        let factorsArray=factors(a)
        for (let i = 0; i < factorsArray.length; i++) {
            if(isInt(factorsArray[i]*x1[1])){
                x1[0]*=factorsArray[i]
                x1[1]*=factorsArray[i]
                x2[0]*=factorsArray[factorsArray.length-1-i]
                x2[1]*=factorsArray[factorsArray.length-1-i]
                addedCoef=true
                break
            }
        }
    }
    let gcf1=gcf(x1[0],x1[1])
    if(gcf1!=1){
        extraCoef*=gcf1
        x1[0]/=gcf1
        x1[1]/=gcf1
    }
    let gcf2=gcf(x2[0],x2[1])
    if(gcf2!=1){
        extraCoef*=gcf2
        x2[0]/=gcf2
        x2[1]/=gcf2
    }
    if(x1[0]==1){
        x1[0]=""
    }
    if(x2[0]==1){
        x2[0]=""
    }
    if(extraCoef==1){
        extraCoef=""
    }
    if(extraCoef==-1){
        extraCoef="-"
    }
    x1[1]=addSign(x1[1])
    x2[1]=addSign(x2[1])
    if(addedCoef){
        if(x1[0]==x2[0]&&x1[1]==x2[1]){
            console.log(`${extraCoef}(${x1[0]}x${x1[1]})^2`)
        }else{
            console.log(`${extraCoef}(${x1[0]}x${x1[1]})(${x2[0]}x${x2[1]})`)
        }
    }else{
        console.log(`${a}(${x1[0]}x${x1[1]})(${x2[0]}x${x2[1]})`)
    }
}

function addSign(input){
    if(input>0){
        return "-"+input
    }
    if(input<0){
        return "+"+(-1)*input
    }
}

function isInt(x){
    if(Math.floor(x)==x){
        return true
    }else{
        return false
    }
}

function isPrime(num) {
    num = parseInt(num);
    if (isNaN(num)) {
      return false
    } else {
      if(num<0){
          num*=-1
      }
      let isPrime = true;
        if (num == 1 || num == 0) {
          return false
        } else {
          if (num == 2 || num == 3) {
            return true
          } else {
            for (let i = 2; i < num; i++) {
              if (num % i == 0) {
                isPrime = false;
              }
            }
          }
        }
      if (
        isPrime == true &&
        num != 2 &&
        num != 1 &&
        num != 3 &&
        num != 0 &&
        num > 0
      ) {
            return true
      } else {
        if (num > 0 && num != 1 && num != 2 && num != 3) {
            return false
        }
      }
    }
  }

  function gcf(a,b){
    let gcd=1
    aArray=factors(a)
    bArray=factors(b)
    for (let i = 0; i < aArray.length; i++) {
        for (let j = 0; j < bArray.length; j++) {
            if(aArray[i]==bArray[j]){
                gcd=aArray[i]
            }
        }
    }
    if(a<0&&b<0){
        gcd*=-1
    }
    return gcd
}

function factors(num){
    if(num==0){
        return([0])
    }
    if(num<0){
        num*=-1
    }
    let a=[]
    for (let i = 1; i <= num; i++) {
        if(num%i==0){
            a.push(i)
        }
    }
    return a
}