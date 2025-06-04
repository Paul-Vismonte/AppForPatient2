export const _healthLatestAnnouncements = [
  {
    id: 1,
    title: 'New Health Guidelines Released',
    date: '2025-06-01T10:00:00.000Z',
    content: 'The latest health guidelines have been updated with new recommendations.',
  },
  {
    id: 2,
    title: 'Emergency Response Training',
    date: '2025-06-02T14:00:00.000Z',
    content: 'Upcoming emergency response training session for all staff members.',
  },
  {
    id: 3,
    title: 'Vaccination Drive',
    date: '2025-06-03T09:00:00.000Z',
    content: 'Community vaccination drive scheduled for next week.',
  },
];

export const _healthClinicPartners = [
  {
    id: 'partner-1',
    name: 'MediCare Clinic',
    address: '123 Health Street, Metro Manila',
    description: 'Leading healthcare provider with specialized services.',
    rating: 4.8,
    reviews: 125,
    logo: '/assets/images/health/partners/medicare.png',
  },
  {
    id: 'partner-2',
    name: 'Wellness Hub',
    address: '456 Wellness Avenue, Metro Manila',
    description: 'Integrated wellness center offering comprehensive care.',
    rating: 4.9,
    reviews: 98,
    logo: '/assets/images/health/partners/wellness-hub.png',
  },
  {
    id: 'partner-3',
    name: 'HealthFirst Center',
    address: '789 Medical Road, Metro Manila',
    description: 'Advanced medical center with state-of-the-art facilities.',
    rating: 4.7,
    reviews: 156,
    logo: '/assets/images/health/partners/healthfirst.png',
  },
];

export const _healthLatestAppointments = [
  {
    id: 'appointment-1',
    patientName: 'John Smith',
    appointmentDate: '2025-06-05T14:00:00.000Z',
    time: '10:00 AM',
    doctor: 'Dr. Sarah Johnson',
    department: 'Cardiology',
    status: 'Scheduled',
    notes: 'Follow-up appointment for heart check-up.',
  },
  {
    id: 'appointment-2',
    patientName: 'Emily Davis',
    appointmentDate: '2025-06-06T16:30:00.000Z',
    time: '2:30 PM',
    doctor: 'Dr. Michael Chen',
    department: 'Dermatology',
    status: 'Scheduled',
    notes: 'Initial consultation for skin condition.',
  },
  {
    id: 'appointment-3',
    patientName: 'Robert Wilson',
    appointmentDate: '2025-06-07T16:15:00.000Z',
    time: '4:15 PM',
    doctor: 'Dr. Lisa Martinez',
    department: 'Orthopedics',
    status: 'Scheduled',
    notes: 'Post-surgery follow-up appointment.',
  },
];

export const _healthPatientStats = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] as string[],
  datasets: [
    {
      label: 'New Patients',
      data: [12, 19, 3, 5, 2, 3] as number[],
      backgroundColor: '#00ab55',
      borderColor: '#00ab55',
      borderWidth: 1,
    },
    {
      label: 'Returning Patients',
      data: [6, 11, 8, 12, 15, 10] as number[],
      backgroundColor: '#00d2ff',
      borderColor: '#00d2ff',
      borderWidth: 1,
    },
  ] as {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[]
} as {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
  }[];
};
