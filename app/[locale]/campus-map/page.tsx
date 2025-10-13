import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CampusMap from '@/components/map/CampusMap';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.campusMap' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default function CampusMapPage() {
  return <CampusMap />;
}

