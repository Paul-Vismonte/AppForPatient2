import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { DashboardContent } from 'src/layouts/dashboard';
import { AppPrescriptions } from 'src/sections/overview/app/app-prescriptions';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Prescriptions - ${CONFIG.appName}` };

export default function Page() {
  return (
    <DashboardContent>
      <AppPrescriptions />
    </DashboardContent>
  );
}
