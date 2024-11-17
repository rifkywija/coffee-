import { createClient } from "contentful";

const client= createClient({
    space: process.env.NEXT_PUBLIC_CONTENFUL_SPACE_ID!,
    environment: process.env.NEXT_PUBLIC_CONTENFUL_ENVIRONMENT_ID!,
    accessToken: process.env.NEXT_PUBLIC_CONTENFUL_ACCESS_TOKEN!,
});

export const getEntries= async () => {
    try{
        const response = await client.getEntries();
        return response
    }catch(error){
        console.log(error);
    }
};