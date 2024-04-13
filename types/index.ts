import { Employee, Profile } from "@prisma/client";


export type FullTypeEmployees = Employee & {
    profile: Profile
};

