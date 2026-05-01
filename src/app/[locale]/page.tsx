import { getLatestArticles } from '@/lib/getLatestArticles'
import { buildModuleLinkMap } from '@/lib/buildModuleLinkMap'
import type { Language } from '@/lib/content'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://far-far-west.wiki'
  const heroImageUrl = new URL('/images/hero.webp', siteUrl).toString()
  const localizedPath = locale === 'en' ? '' : `/${locale}`
  const pageUrl = `${siteUrl}${localizedPath}`

  return {
    title: 'Far Far West - Release Date, Guide & Roadmap',
    description:
      'Get Far Far West release updates, beginner guides, roadmap, weapons, spells, bosses, co-op tips, and Steam Early Access info.',
    alternates: buildLanguageAlternates('/', locale as Locale, siteUrl),
    openGraph: {
      type: 'website',
      url: pageUrl,
      siteName: 'Far Far West',
      title: 'Far Far West - Release Date, Guide & Roadmap',
      description:
        'Get Far Far West release updates, beginner guides, roadmap, weapons, spells, bosses, co-op tips, and Steam Early Access info.',
      images: [
        {
          url: heroImageUrl,
          width: 1920,
          height: 1080,
          alt: 'Far Far West - Chaotic Co-op Robot Cowboy Shooter',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Far Far West - Release Date, Guide & Roadmap',
      description:
        'Get Far Far West release updates, beginner guides, roadmap, weapons, spells, bosses, co-op tips, and Steam Early Access info.',
      images: [heroImageUrl],
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://far-far-west.wiki'
  const heroImageUrl = new URL('/images/hero.webp', siteUrl).toString()
  const localizedPath = locale === 'en' ? '' : `/${locale}`
  const pageUrl = `${siteUrl}${localizedPath}`

  const homeStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        "@type": "Organization",
        '@id': `${siteUrl}/#organization`,
        "name": "Far Far West",
        "url": siteUrl,
        "logo": `${siteUrl}/android-chrome-512x512.png`,
        "image": heroImageUrl,
        sameAs: [
          'https://fireshinegames.co.uk/featured/far-far-west/',
          'https://store.steampowered.com/app/3124540/Far_Far_West/',
          'https://discord.com/servers/far-far-west-1377223661685178460',
          'https://www.reddit.com/r/FarFarWest/',
          'https://x.com/FarFarWestGame',
          'https://www.youtube.com/watch?v=af-eJ3Aj97M',
        ],
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Far Far West - Release Date, Guide & Roadmap',
        isPartOf: {
          '@id': `${siteUrl}/#website`,
        },
        about: {
          '@id': `${siteUrl}/#organization`,
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: heroImageUrl,
        },
      },
    ],
  }

  // 服务器端获取最新文章数据
  const latestArticles = await getLatestArticles(locale as Language, 30)
  const moduleLinkMap = await buildModuleLinkMap(locale as Language)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />
      <HomePageClient latestArticles={latestArticles} moduleLinkMap={moduleLinkMap} locale={locale} />
    </>
  )
}
