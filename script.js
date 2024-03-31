function factor(){
    let a=document.getElementById('a').value
    let b=document.getElementById('b').value
    let c=document.getElementById('c').value

    let extraCoef=1

    if(a=="-"){
        a=-1
    }
    if(b=="-"){
        b=-1
    }
    if(a==""){
        a=1
    }
    if(b==""){
        b=1
    }
    if(c==""){
        c=0
    }
    let commonFactor=gcf([a,b,c])

    if(commonFactor!=0){
        a/=commonFactor
        b/=commonFactor
        c/=commonFactor
        extraCoef*=commonFactor
    }
    
    if(a==0&&c==0&&b!=0){
        if(b==1){
            b=""
        }
        if(b==-1){
            b="-"
        }
        document.getElementById('container').innerHTML=b+"x"
    }else if(b==0&&c==0){
        if(a==0){
            document.getElementById("container").innerHTML=0
        }else{
            if(a==1){
                a=""
            }
            if(a==-1){
                a="-"
            }
            document.getElementById('container').innerHTML=a+"x²"
        }
    }else if(b==0&&b**2-4*a*c<0){
        let e=gcf([a,c])
        extraCoef*=e
        a/=e
        c/=e
        if(c>0){
            c="+"+c
        }
        if(extraCoef==1){
            extraCoef=""
        }
        if(extraCoef==-1){
            extraCoef="-"
        }
        if(a==1){
            a=""
        }
        if(a==-1){
            a="-"
        }
        document.getElementById('container').innerHTML=(`${extraCoef}(${a}x²${c})`)
    }else if(a==0&&b==0){
        document.getElementById('container').innerHTML=c
    }else if(b**2-4*a*c<0){
        if(b>0){
            b="+"+b
        }
        if(c>0){
            c="+"+c
        }
        if(a==1){
            a=""
        }
        if(b==1){
            b="+"
        }
        if(a==-1){
            a="-"
        }
        if(b==-1){
            b="-"
        }
        if(extraCoef==1){
            extraCoef=""
        }
        if(extraCoef==-1){
            extraCoef="-"
        }
        document.getElementById('container').innerHTML=(`${extraCoef}(${a}x²${b}x${c})`)
    }else{

        //[coef of x , value of x-int]
        let x1=[1,(-b+Math.sqrt(b**2-4*a*c))/(2*a)]
        let x2=[1,(-b-Math.sqrt(b**2-4*a*c))/(2*a)]
        let addedCoef=false

        if(c==0){
            let e=gcf([a,b])
            a/=e
            b/=e
            if(e==1){
                e=""
            }
            if(e==-1){
                e="-"
            }
            if(a==1){
                a=""
            }
            if(a==-1){
                a="-"
            }
            if(b>0){
                b="+"+b
            }
            document.getElementById('container').innerHTML=(`${e}x(${a}x${b})`)
        }else if(a==0){
            let e=gcf([b,c])
            b/=e
            c/=e
            if(e==1){
                e=""
            }
            if(e==-1){
                e="-"
            }
            if(b==1){
                b=""
            }
            if(b==-1){
                b="-"
            }
            if(c>0){
                c="+"+c
            }
            document.getElementById('container').innerHTML=(`${e}(${b}x${c})`)
        }else if(a==1&&a!=0){
            addedCoef=true
            if(extraCoef==1){
                extraCoef=""
            }
            if(extraCoef==-1){
                extraCoef="-"
            }
            x1[1]=addSign(x1[1])
            x2[1]=addSign(x2[1])
            if(x1[1]==x2[1]){
                document.getElementById('container').innerHTML=(`${extraCoef}(x${x1[1]})²`)
            }else{
                document.getElementById('container').innerHTML=(`${extraCoef}(x${x1[1]})(x${x2[1]})`)
            }
        }else{
            if(isPrime(a)){
                addedCoef=true
                if(!isInt(x1[1])&&isInt(a*x1[1])){
                    x1[0]*=a
                    x1[1]*=a
                }else{
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
            x1[1]=addSign(x1[1])
            x2[1]=addSign(x2[1])
            let gcf1=gcf([x1[0],x1[1]])
            if(gcf1!=1){
                extraCoef*=gcf1
                x1[0]/=gcf1
                x1[1]/=gcf1
            }
            let gcf2=gcf([x2[0],x2[1]])
            if(gcf2!=1){
                extraCoef*=gcf2
                x2[0]/=gcf2
                x2[1]/=gcf2
            }
            if(a<0&&extraCoef>0&&x1[0]>0&&x2[0]>0){
                extraCoef*=-1
            }
            if(x1[0]==1){
                x1[0]=""
            }
            if(x2[0]==1){
                x2[0]=""
            }
            if(x1[0]==-1){
                x1[0]="-"
            }
            if(x2[0]==-1){
                x2[0]="-"
            }
            if(extraCoef==1){
                extraCoef=""
            }
            if(extraCoef==-1){
                extraCoef="-"
            }
            if(x1[1]>0){
                x1[1]=parseFloat(x1[1])
                x1[1]="+"+x1[1]
            }
            if(x2[1]>0){
                x2[1]=parseFloat(x2[1])
                x2[1]="+"+x2[1]
            }
            if(addedCoef){
                if(x1[0]==x2[0]&&x1[1]==x2[1]){
                    document.getElementById('container').innerHTML=(`${extraCoef}(${x1[0]}x${x1[1]})²`)
                }else{
                    document.getElementById('container').innerHTML=(`${extraCoef}(${x1[0]}x${x1[1]})(${x2[0]}x${x2[1]})`)
                }
            }else{
                document.getElementById('container').innerHTML=(`${a}(${x1[0]}x${x1[1]})(${x2[0]}x${x2[1]})`)
            }
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

    function isPrime(num){
        if(isNaN(num)){
            return false
        }
        if(Math.floor(num)!=num){
            return isPrime(Math.floor(num))
        }
        if(num<0){
            return isPrime(-num)
        }
        if(num==0||num==1){
            return false
        }
        if(isNaN(num)){
            return false
        }else{
            for (let i = 2; i < num; i++) {
                if(num%i==0){
                    return false
                }
            }
            return true
        }
    }

    function gcf(array){
        if(array.length==0){
            return 0
        }
        if(array.length==1){
            return parseFloat(array.toString())
        }
        if(array.length>2){
            let a1=array.shift()
            let a2=array.shift()
            let a3=array.shift()
            return gcf([gcf([a1,a2]),a3])
        }
        let gcd=1
        aArray=factors(array[0])
        bArray=factors(array[1])
        for (let i = 0; i < aArray.length; i++) {
            for (let j = 0; j < bArray.length; j++) {
                if(aArray[i]==bArray[j]){
                    gcd=aArray[i]
                }
            }
        }
        if(array[0]<0&&array[1]<0){
            gcd*=-1
        }
        return gcd
    }

    function factors(num){
        if(num==0){
            return([0])
        }
        if(num<0){
            return factors(-num)
        }
        let a=[]
        for (let i = 1; i <= num; i++) {
            if(num%i==0){
                a.push(i)
            }
        }
        return a
    }
}