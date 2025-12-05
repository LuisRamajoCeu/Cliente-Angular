export interface Usuario{
    id:number;
    name:string;
    username:string;
    email:string;
    phone:string;
    address: {
        street:string;
    }
}