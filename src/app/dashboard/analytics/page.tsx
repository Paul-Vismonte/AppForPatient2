import type { Metadata } from 'next';

import { CONFIG } from 'src/global-config';
import AnalyticsView from 'src/sections/overview/analytics/analytics-view';

// ----------------------------------------------------------------------

export const metadata: Metadata = { title: `Analytics | Dashboard - ${CONFIG.appName}` };

export default function Page() {
  return <AnalyticsView />;
}
