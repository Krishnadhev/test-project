class Rectangle {
    constructor(length,width) {
      this.length = length
      this.width = width 
    }
    calculate() {
    var area= this.length*this.width
    var perimeter= 2*(this.length+this.width)
    this.area= area
    this.perimeter=perimeter
     
    }
    outputData() {
        console.log(this.area)
        console.log(this.perimeter)

    }

}