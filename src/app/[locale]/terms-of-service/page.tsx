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
  const path = '/terms-of-service'

  return {
    title: 'Terms of Service - Far Far West',
    description:
      'Terms of Service for Far Far West Wiki, including usage rules, intellectual property notes, and liability limits.',
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
      title: 'Terms of Service - Far Far West',
      description: 'Terms and conditions for using Far Far West Wiki.',
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
      title: 'Terms of Service - Far Far West',
      description: 'Terms and conditions for using Far Far West Wiki.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-300 text-lg mb-2">Terms and conditions for using this fan-made website</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance</h2>
            <p>
              By accessing Far Far West Wiki, you agree to these Terms of Service. If you do not agree, do not use the
              website.
            </p>

            <h2>2. Website Scope</h2>
            <p>
              Far Far West Wiki is an unofficial fan-made information resource. Content may include gameplay guides,
              patch tracking, roadmap summaries, and community references for Far Far West.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not violate applicable laws.</li>
              <li>Do not attempt unauthorized access to systems, services, or data.</li>
              <li>Do not abuse the website using bots, scraping, or malicious traffic.</li>
              <li>Do not republish site content at scale without attribution and permission.</li>
            </ul>

            <h2>4. Intellectual Property</h2>
            <p>
              Website-original text and layout are owned by Far Far West Wiki unless otherwise stated. Game-related
              trademarks, images, and assets belong to their respective owners, including Evil Raptor and Fireshine Games.
            </p>

            <h2>5. No Official Affiliation</h2>
            <p>
              Far Far West Wiki is not affiliated with, endorsed by, or sponsored by Evil Raptor, Fireshine Games,
              Valve, or Steam.
            </p>

            <h2>6. Disclaimers</h2>
            <p>
              Content is provided "as is" for informational purposes. Game updates can make certain details outdated. We
              do not guarantee completeness, accuracy, or uninterrupted availability.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, we are not liable for indirect or consequential damages resulting
              from use of this website or reliance on its content.
            </p>

            <h2>8. External Links</h2>
            <p>
              The website links to third-party services. We do not control and are not responsible for their content,
              terms, or privacy practices.
            </p>

            <h2>9. Changes</h2>
            <p>
              We may update these Terms at any time. Updates become effective when posted on this page.
            </p>

            <h2>10. Contact</h2>
            <p>
              For legal questions, contact:
              {' '}
              <a href="mailto:legal@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                legal@far-far-west.wiki
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
