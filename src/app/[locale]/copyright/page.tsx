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
  const path = '/copyright'

  return {
    title: 'Copyright Notice - Far Far West',
    description:
      'Copyright and intellectual property notice for Far Far West Wiki, including fair use and DMCA reporting guidance.',
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
      title: 'Copyright Notice - Far Far West',
      description: 'Copyright and intellectual property notice for Far Far West Wiki.',
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
      title: 'Copyright Notice - Far Far West',
      description: 'Copyright and intellectual property notice for Far Far West Wiki.',
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative py-20 px-4 border-b border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Copyright Notice</h1>
          <p className="text-slate-300 text-lg mb-2">Intellectual property and fair use information</p>
          <p className="text-slate-400 text-sm">Last Updated: May 1, 2026</p>
        </div>
      </section>

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Website Content Ownership</h2>
            <p>
              Unless noted otherwise, original text and compilations on Far Far West Wiki are owned by the site and
              protected by copyright law.
            </p>

            <h2>2. Game IP Ownership</h2>
            <p>
              Far Far West names, logos, game images, and other game assets are property of their respective owners,
              including Evil Raptor and Fireshine Games.
            </p>

            <h2>3. Fair Use Statement</h2>
            <p>
              This site uses limited game-related assets for commentary, education, and informational purposes. We aim to
              minimize usage and avoid replacing official products.
            </p>

            <h2>4. Trademark Notice</h2>
            <p>
              Mentioned trademarks and service marks remain property of their owners. Their appearance here does not imply
              affiliation or endorsement.
            </p>

            <h2>5. DMCA and Takedown Requests</h2>
            <p>
              If you believe content on this site infringes your rights, send a detailed notice including ownership,
              infringing URL, and contact details.
            </p>
            <p>
              <strong>DMCA Contact:</strong>{' '}
              <a href="mailto:dmca@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                dmca@far-far-west.wiki
              </a>
            </p>

            <h2>6. Attribution</h2>
            <p>
              When quoting original Far Far West Wiki material, provide attribution and a direct link to the source page.
            </p>

            <h2>7. General Copyright Inquiries</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:copyright@far-far-west.wiki" className="text-[hsl(var(--nav-theme-light))] hover:underline">
                copyright@far-far-west.wiki
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
