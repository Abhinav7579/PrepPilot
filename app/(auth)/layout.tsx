
import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import { ReactNode } from 'react';

export default async function AuthLayout({ children }: { children: ReactNode }) {
  const isUserAuth = await isAuthenticated();

  if (isUserAuth) {
    redirect('/home'); 
  }

  return <div className="auth-layout">{children}</div>;
}
