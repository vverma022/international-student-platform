import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Support from '@/components/support/Support';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.support' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function SupportPage() {
  return <Support />;
}

