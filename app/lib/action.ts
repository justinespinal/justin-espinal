"use server";

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';


export async function refreshCompanies(){
    revalidatePath('/home/projects')
    redirect('/home/projects')
}