import { pb, supabase } from "./createClient";

export type Store = {
    id: Number,
    name: String,
    volume_id?: String,
    logo: String
}

export async function getStore(): Promise<Store[]>{
    const { data, error } = await supabase
        .from('store')
        .select('id, name, logo, publisher')
    
    if (error) {
        throw new Error("Can not fecth store" + error.message)
    }

    return data as Store[];
}

export function getUserProfile() {
    const userData = pb.authStore.model;
    console.log(userData)
    return userData
}