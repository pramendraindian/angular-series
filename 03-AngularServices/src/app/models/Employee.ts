import { User } from "./User";

export interface Employee extends User
{
    // userId:number;
    // fullName:string;
    // city:string;
    departmentId:number;
    firstName:string;
    lastName:string;
    nameCaption:string;
    isSelected:boolean;
}