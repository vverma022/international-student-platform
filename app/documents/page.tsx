import Documents from '@/components/documents/Documents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Document Guides - MUJ International Student Platform',
  description: 'Step-by-step guides for processing visa, registration, and other important documents for international students.',
};

export default function DocumentsPage() {
  return <Documents />;
}
