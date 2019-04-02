export class Employee {

    constructor(_id='', name='', position='', office='', salary=0){
        
        this._id=_id;
        this.name= name;
        this.position= position;
        this.salary= salary;
        this.office=office;

    }
    _id:string;
    name:string;
    position:string;
    office:string;
    salary:number;
}
