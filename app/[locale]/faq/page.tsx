import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import FAQ from '@/components/faq/FAQ';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.faq' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function FAQPage() {
  return <FAQ />;
}

