export interface HealthWelcomeProps {
  title: string;
  description: string;
  img: React.ReactNode;
  action: React.ReactNode;
}

export interface HealthLatestAnnouncementsProps {
  list: Array<{
    id: number;
    title: string;
    date: string;
    content: string;
  }>;
}

export interface HealthWidgetSummaryProps {
  title: string;
  percent: number;
  total: number;
  chart: {
    categories: string[];
    series: number[];
    colors?: string[];
  };
}

export interface HealthPatientStatsProps {
  title: string;
  chart: {
    labels: string[];
    datasets: Array<{
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }>;
  };
}
