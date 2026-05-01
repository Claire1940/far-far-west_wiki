import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import { Link } from '@/i18n/navigation'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://far-far-west.wiki'
  const path = '/privacy-policy'

  return {
    title: 'Privacy Policy - Far Far West',
    description:
      'Privacy Policy for Far Far West Wiki. Learn how we collect, use, and protect data when you use this fan-made guide website.',
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
      title: 'Privacy Policy - Far Far West',
      description: 'How Far Far West Wiki handles privacy and data usage.',
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
      title: 'Privacy Policy - Far Far West',
      description: 'How Far Far West Wiki handles privacy and data usage.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-300 text-lg mb-2">How we collect, use, and protect your information</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Who We Are</h2>
            <p>
              Far Far West Wiki is an unofficial fan-made resource website focused on the game Far Far West. This
              policy explains how we handle data when you browse the website.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li><strong>Basic technical data:</strong> browser type, device type, approximate region, and referrer.</li>
              <li><strong>Usage data:</strong> pages viewed, session duration, and navigation behavior.</li>
              <li><strong>Local preferences:</strong> language and theme settings saved in your browser.</li>
            </ul>

            <h2>3. How We Use Information</h2>
            <ul>
              <li>Improve content quality and site performance.</li>
              <li>Understand which guides are most useful for players.</li>
              <li>Detect technical issues, abuse, or suspicious traffic patterns.</li>
            </ul>

            <h2>4. Cookies and Analytics</h2>
            <p>
              We may use analytics and advertising technologies that rely on cookies or similar local storage mechanisms.
              You can control cookies in your browser settings.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
              Our pages include links to external platforms such as Steam, YouTube, Discord, Reddit, and X. Their data
              practices are governed by their own privacy policies.
            </p>

            <h2>6. Data Security and Retention</h2>
            <p>
              We apply reasonable safeguards, but no online service can guarantee absolute security. Data is retained
              only for operational, analytics, and legal needs.
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              This site is intended for a general audience. We do not knowingly collect personal information from children
              under 13.
            </p>

            <h2>8. Disclaimer</h2>
            <p>
              Far Far West Wiki is unofficial and is not affiliated with Evil Raptor, Fireshine Games, Valve, or Steam.
              All trademarks and game assets belong to their respective owners.
            </p>

            <h2>9. Contact</h2>
            <p>
              For privacy-related questions, contact:
              {' '}
              <a href="mailto:privacy@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                privacy@far-far-west.wiki
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
