import { ImageResponse } from 'next/og'
import { getDictionary } from '@/dictionaries'
import { isLocale, defaultLocale } from '@/lib/i18n'

export const alt = 'Wescaleup'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage({ params }: { params: { lang: string } }) {
  const lang = isLocale(params.lang) ? params.lang : defaultLocale
  const { meta } = getDictionary(lang).common

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0B1020 0%, #111827 60%, #1E1B4B 100%)',
          color: '#FFFFFF',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            width: '96px',
            height: '96px',
            borderRadius: '24px',
            background: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '56px',
            fontWeight: 700,
            marginBottom: '56px',
          }}
        >
          W
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', fontSize: '64px', fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.03em' }}>
          <span>{meta.ogImageTitle}</span>
          <span style={{ color: '#A5B4FC' }}>{meta.ogImageSubtitle}</span>
        </div>
      </div>
    ),
    size,
  )
}
