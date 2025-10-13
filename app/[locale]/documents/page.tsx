import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Documents from '@/components/documents/Documents';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.documents' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function DocumentsPage() {
  return <Documents />;
}

