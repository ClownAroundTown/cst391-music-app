  "use client"
  import { useSession } from "next-auth/react";
  import React from "react";
  import Link from "next/link";
  import { Button } from "react-bootstrap";
  
export const Actions = () => {
    const {data:session} = useSession();
  const isAdmin=session?.user?.role === "admin";

  if (isAdmin){
    return(
        <>
            <Link href="/playlist/new">
               <Button>Create New Playlist</Button>
            </Link>
        </>
    )
  }
  else{
    return <p>Please sign in to make and edit playlists!</p>
  }
}