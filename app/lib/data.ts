import { sql } from '@vercel/postgres';
import { Company, Project } from './definition';
export async function fetchCompanies(){
    try {
        const data = await sql<Company>
        `SELECT * FROM companies
        ORDER BY companies.name, companies.position`;

        return data.rows
    }catch (error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch comapny data")
    }
}

export async function fetchCompanyById(id: string | undefined){
    try{
        const data = await sql<Company>
        `SELECT * FROM companies
         WHERE companies.id = ${id}`

         return data.rows
    }catch(error){
        console.error("Database Error:", error)
        throw new Error("Failed to fetch company data by id")
    }
}

export async function fetchProjects(){
    try{
        const data = await sql<Project>
        `SELECT * FROM projects`
        
        return data.rows
    }catch(error){
        console.log("Failed to fetch projects: ", error)
        throw new Error("Failed to fetch projects")
    }
}