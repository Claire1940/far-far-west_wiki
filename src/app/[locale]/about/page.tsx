import Link from 'next/link'
import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://far-far-west.wiki'
  const path = '/about'

  return {
    title: 'About Far Far West Wiki',
    description:
      'About Far Far West Wiki, an unofficial fan-made guide hub for release updates, co-op tips, and gameplay resources.',
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: 'Far Far West',
      title: 'About Far Far West Wiki',
      description: 'Learn about this unofficial Far Far West fan guide website.',
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: 'Far Far West',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Far Far West Wiki',
      description: 'Learn about this unofficial Far Far West fan guide website.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Far Far West Wiki</h1>
          <p className="text-slate-300 text-lg mb-2">Unofficial fan-made resource center for Far Far West players</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What This Site Is</h2>
            <p>
              Far Far West Wiki is a community-driven fan guide website focused on helping players understand the game,
              track updates, and discover useful links across official platforms.
            </p>

            <h2>What We Cover</h2>
            <ul>
              <li>Release and Early Access update tracking</li>
              <li>Co-op and beginner gameplay guidance</li>
              <li>Roadmap, patch highlights, and article navigation</li>
              <li>Community links for Discord, Reddit, X, YouTube, and Steam</li>
            </ul>

            <h2>Editorial Approach</h2>
            <p>
              We aim to keep content practical, concise, and current. Information may change as the game updates during
              Early Access, so pages are revised when new official details become available.
            </p>

            <h2>Independence Disclaimer</h2>
            <p>
              Far Far West Wiki is unofficial and not affiliated with Evil Raptor, Fireshine Games, Valve, or Steam.
              All game trademarks and assets belong to their respective owners.
            </p>

            <h2>Contact</h2>
            <p>
              General inquiries:
              {' '}
              <a href="mailto:contact@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                contact@far-far-west.wiki
              </a>
            </p>
            <p>
              Contribution or correction requests:
              {' '}
              <a href="mailto:support@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                support@far-far-west.wiki
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <Link href="/" className="text-[hsl(var(--nav-theme-light))] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  )
}
