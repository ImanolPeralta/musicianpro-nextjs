'use client';

import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user === null) {
      router.push('/login'); // redirige si no hay usuario
    }
  }, [user]);

  if (!user) return null; // mientras carga

  return <>{children}</>;
}