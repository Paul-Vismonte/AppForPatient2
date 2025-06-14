import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { DashboardContent } from 'src/layouts/dashboard';
import { AppOrders } from 'src/sections/overview/app/app-prescriptions';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Orders - ${CONFIG.appName}` };

export default function Page() {
  return (
    <DashboardContent>
      <AppOrders />
    </DashboardContent>
  );
}
