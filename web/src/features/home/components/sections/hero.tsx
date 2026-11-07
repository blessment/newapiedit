import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

// Minimal single-column hero: one headline, one line of support, two actions.
// The previous 12-column layout stacked a terminal demo, a gateway card and a
// supported-apps strip next to the copy — every element competed for the same
// first screen. This version lets the page breathe and routes directly to the
// console or sign-up, which is what visitors actually came for.
export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const renderDocsButton = () => {
    const isExternal = docsUrl.startsWith('http')
    if (isExternal) {
      return (
        <Button
          variant='outline'
          className='group border-border/50 hover:border-border hover:bg-muted/50 inline-flex h-11 items-center gap-1.5 rounded-lg px-5 text-sm font-medium'
          render={
            <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
          }
        >
          <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
          <span>{t('Docs')}</span>
        </Button>
      )
    }
    return (
      <Button
        variant='outline'
        className='group border-border/50 hover:border-border hover:bg-muted/50 inline-flex h-11 items-center gap-1.5 rounded-lg px-5 text-sm font-medium'
        render={<Link to={docsUrl} />}
      >
        <BookOpen className='text-muted-foreground/80 group-hover:text-foreground size-4 transition-colors duration-200' />
        <span>{t('Docs')}</span>
      </Button>
    )
  }

  return (
    <section className='relative z-10 overflow-hidden px-6 pt-28 pb-20 md:pt-40 md:pb-28'>
      {/* Soft ambient glow only — no grid pattern, no terminal, no props. */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-30 dark:opacity-[0.15]'
        style={{
          background:
            'radial-gradient(ellipse 55% 45% at 50% 0%, oklch(0.72 0.16 250 / 70%) 0%, transparent 75%)',
        }}
      />

      <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
        <div
          className='landing-animate-fade-up mb-6 inline-flex items-center gap-1.5 rounded-full border border-info/20 bg-info/5 px-3 py-1.5 text-[11px] font-medium text-info opacity-0 shadow-xs dark:border-info/20 dark:bg-info/5 dark:text-info'
          style={{ animationDelay: '0ms' }}
        >
          <span className='relative flex size-1.5'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-info opacity-75' />
            <span className='relative inline-flex size-1.5 rounded-full bg-info dark:bg-info' />
          </span>
          <span>{t('AI Application Infrastructure Foundation')}</span>
        </div>

        <h1
          className='landing-animate-fade-up text-[clamp(2.25rem,5vw,3.5rem)] leading-[1.12] font-bold tracking-tight opacity-0'
          style={{ animationDelay: '60ms' }}
        >
          {t('Unified API Gateway for')}{' '}
          <span className='text-info'>{t('Vast Range of AI Models')}</span>
        </h1>

        <p
          className='landing-animate-fade-up text-muted-foreground/80 mt-6 max-w-xl text-base leading-relaxed opacity-0 md:text-[15px]'
          style={{ animationDelay: '120ms' }}
        >
          {t(
            'Access a vast selection of models via a standard, unified API protocol. Power AI applications, manage digital assets, and connect the Future.'
          )}
        </p>

        <div
          className='landing-animate-fade-up mt-9 flex flex-wrap items-center justify-center gap-3 opacity-0'
          style={{ animationDelay: '180ms' }}
        >
          {props.isAuthenticated ? (
            <>
              <Button
                className='group h-11 rounded-lg px-5 text-sm font-medium'
                render={<Link to='/dashboard' />}
              >
                {t('Go to Dashboard')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              {renderDocsButton()}
            </>
          ) : (
            <>
              <Button
                className='group h-11 rounded-lg px-5 text-sm font-medium'
                render={<Link to='/sign-up' />}
              >
                {t('Get Started')}
                <ArrowRight className='ml-1.5 size-4 transition-transform duration-200 group-hover:translate-x-0.5' />
              </Button>
              {renderDocsButton()}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
