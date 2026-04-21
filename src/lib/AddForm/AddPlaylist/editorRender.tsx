"use client"
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation"

export const RoleCheck = () => {
        const { data:session } = useSession();
        const ROLE = session?.user?.role
        if (ROLE==undefined){
            redirect('/api/auth/signin')
        }
        else{
            return <></>
        }
}