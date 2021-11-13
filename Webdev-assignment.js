class Company {
    constructor(revenue,employeeno,grade){
        this.revenue = revenue;
        this.employeeno = employeeno;
        this.grade = grade;
    }
    //getter
    get revenue() {
        return this.revenue;
    }
    //setter
    set revenue(revenue){
        this.revenue = revenue;
    }
    

    //method
    hiring() {
        if(grade>50){
        return true ;
        }
        else{
            return false;
        }

    }

}
class Google extends Company {
    constructor()
}
class Microsoft extends Company {
    constructor(mainstream){
        this.mainstream = mainstream;
    }
    //method
    release(){
        console.log(`version alpha released of ${mainstream}`)

    }

}