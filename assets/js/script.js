
class CustomMatch {
    constructor(num) {
        this.num = num;
    }
    plus(num1) {
        this.num += num1;
        return this;
    }
    minus(num2){
        this.num -= num2;
        return this;
    }
    multiply(num3){
        this.num *= num3;
        return this;
    }
    divide(num4){
        this.num /= num4;
        return this;
    }
}

let result=new CustomMatch(50).plus(6).minus(30).multiply(3).divide(2);
console.log(result);
