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

console.log(gcf([-6,8]))