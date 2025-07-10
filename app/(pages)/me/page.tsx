
import Me from '@/components/me';

import { getCurrentUser } from '@/lib/actions/auth.action'



async function page() {
    const user=await getCurrentUser();
    if (!user) {
    // Optionally redirect or render a message
    return <div>User not logged in.</div>;
  }
  return (
      <Me username={user?.name} useremail={user?.email}/> 
  )
}

export default page