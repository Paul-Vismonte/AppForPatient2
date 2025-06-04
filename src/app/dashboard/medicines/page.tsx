import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import { DashboardContent } from 'src/layouts/dashboard';
import { AppMedicines } from 'src/sections/overview/app/app-medicines';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Medicines - ${CONFIG.appName}` };

export default function Page() {
  return (
    <DashboardContent>
      <AppMedicines />
    </DashboardContent>
  );
}
