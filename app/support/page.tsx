import Support from '@/components/support/Support';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support - MUJ International Student Platform',
  description: 'Get assistance for non-standard situations and special requirements at Manipal University Jaipur.',
};

export default function SupportPage() {
  return <Support />;
}
