// src/components/RoleTitle.tsx
'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';

export const RoleTitle = () => {
  const { data:session } = useSession();
  const role = () => {
    const ROLE = session?.user?.role
    if (ROLE==undefined){
        return "guest"
    }
    else {
        return ROLE
    }
}

  useEffect(() => {
    const roleTitleMap: Record<string, string> = {
      admin: 'Admin | Music App',
      user: 'User | Music App',
      guest: 'Guest | Music App'
    };

    const newTitle = roleTitleMap[role()];
    document.title = newTitle;
  }, [role]);

  return null;
};   