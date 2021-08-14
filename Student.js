class Student {
    constructor(a,b,c,d,e) {
      this.a=a
      this.b=b
      this.c=c
      this.d=d
      this.e=e  
    }
 average() {
  var sum= this.a+this.b+this.c+this.d+this.e
  var divide=sum/5
  console.log(divide)
}
}