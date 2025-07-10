
import Me from '@/components/me';

import { getCurrentUser } from '@/lib/actions/auth.action'



async function page() {
    const user=await getCurrentUser();
  return (
      <Me username={user?.name} useremail={user?.email}/> 
  )
}

export default page