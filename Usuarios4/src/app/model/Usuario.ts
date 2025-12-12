export interface Usuario{
    id:number,
    name:string,
    username:string,
    email:string,
    company:Company[],
    address:Address[]
};
export interface Company{
    name:string,
    catchPhrase:string,
    bs:string
}
export interface Address{
    street:string,
    suite:string,
    city:string
}