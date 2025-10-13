import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.virtualTours' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

import VirtualTours from '@/components/panorama/VirtualTours';

export default function PanoramaPage() {
  return <VirtualTours />;
}

