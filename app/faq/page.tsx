import FAQ from '@/components/faq/FAQ';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - MUJ International Student Platform',
  description: 'Frequently asked questions about studying at Manipal University Jaipur as an international student.',
};

export default function FAQPage() {
  return <FAQ />;
}
