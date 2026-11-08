import { Link } from '@tanstack/react-router'
import { ArrowRight, BookOpen, Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Button } from '@/components/ui/button'
import { useStatus } from '@/hooks/use-status'

interface HeroProps {
  className?: string
  isAuthenticated?: boolean
}

/** Deterministic bar heights — a static preview, not live data. */
const BARS = [34, 52, 41, 66, 58, 79, 47, 88, 62, 73, 55, 91, 68, 76]

const REQUESTS = [
  { model: 'gpt-4o', tokens: '12.4k', cost: '$0.031', ok: true },
  { model: 'claude-sonnet-4', tokens: '8.1k', cost: '$0.024', ok: true },
  { model: 'deepseek-v3', tokens: '31.7k', cost: '$0.004', ok: true },
  { model: 'gemini-2.5-pro', tokens: '5.9k', cost: '$0.011', ok: 'slow' },
]

/**
 * Landing hero.
 *
 * The copy is deliberately short and the proof is the product itself: a static
 * console preview sits right under the headline so the first screen answers
 * "what does this look like inside" instead of floating in whitespace.
 */
export function Hero(props: HeroProps) {
  const { t } = useTranslation()
  const { status } = useStatus()
  const docsUrl =
    (status?.docs_link as string | undefined) || 'https://docs.newapi.pro'

  const docsTarget = docsUrl.startsWith('http') ? (
    <a href={docsUrl} target='_blank' rel='noopener noreferrer' />
  ) : (
    <Link to={docsUrl} />
  )

  return (
    <section className='relative overflow-hidden px-5 pt-20 pb-14 sm:px-8 md:pt-28'>
      {/* A single hairline grid, faded out at the edges. It gives the empty
          upper region structure without adding decoration. */}
      <div
        aria-hidden
        className='pointer-events-none absolute inset-0 -z-10 opacity-40 dark:opacity-60'
        style={{
          backgroundImage:
            'linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
          maskImage:
            'radial-gradient(75% 55% at 50% 0%, #000 0%, transparent 78%)',
        }}
      />

      <div className='mx-auto flex max-w-3xl flex-col items-center text-center'>
        <div className='landing-animate-fade-up mb-7 inline-flex items-center gap-2 rounded-full border border-border bg-card px-2.5 py-1 text-[11px] font-medium opacity-0'>
          <span className='bg-success size-1.5 rounded-full' />
          <span className='text-muted-foreground'>
            {t('AI Application Infrastructure Foundation')}
          </span>
        </div>

        <h1
          className='landing-animate-fade-up text-[clamp(2.1rem,4.6vw,3.4rem)] leading-[1.08] font-semibold tracking-[-0.035em] text-balance opacity-0'
          style={{ animationDelay: '60ms' }}
        >
          {t('Unified API Gateway for')}
          <br />
          <span className='text-primary'>{t('Vast Range of AI Models')}</span>
        </h1>

        <p
          className='landing-animate-fade-up text-muted-foreground mt-5 max-w-[54ch] text-[14.5px] leading-relaxed text-pretty opacity-0'
          style={{ animationDelay: '120ms' }}
        >
          {t(
            'One endpoint, one key, one bill. Route any request to the upstream you trust, and watch every token, cost and failure in one console.'
          )}
        </p>

        <div
          className='landing-animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-2.5 opacity-0'
          style={{ animationDelay: '180ms' }}
        >
          <Button
            className='group h-10 gap-1.5 rounded-lg px-4 text-[13px] font-medium'
            render={
              <Link to={props.isAuthenticated ? '/dashboard' : '/sign-up'} />
            }
          >
            {props.isAuthenticated ? t('Go to Dashboard') : t('Get Started')}
            <ArrowRight className='size-3.5 transition-transform duration-200 group-hover:translate-x-0.5' />
          </Button>
          <Button
            variant='outline'
            className='h-10 gap-2 rounded-lg px-4 text-[13px] font-medium'
            render={docsTarget}
          >
            <BookOpen className='text-muted-foreground size-3.5' />
            <span>{t('Read the docs')}</span>
          </Button>
        </div>

        <p
          className='landing-animate-fade-up text-muted-foreground/80 mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-mono text-[11px] opacity-0'
          style={{ animationDelay: '240ms' }}
        >
          {['Self-hosted', 'OpenAI-compatible', 'AGPL-3.0'].map((item) => (
            <span key={item} className='inline-flex items-center gap-1'>
              <Check className='size-3' />
              {item}
            </span>
          ))}
        </p>
      </div>

      {/* Product proof: a static console preview. */}
      <div
        className='landing-animate-fade-up relative mx-auto mt-12 w-full max-w-[980px] opacity-0 md:mt-14'
        style={{ animationDelay: '300ms' }}
      >
        <div className='bg-card overflow-hidden rounded-lg border border-border shadow-[0_24px_60px_-24px_rgb(0_0_0/0.22)]'>
          {/* Window chrome */}
          <div className='border-border bg-muted/40 flex h-9 items-center gap-2 border-b px-3.5'>
            <span className='bg-foreground/10 size-2 rounded-full' />
            <span className='bg-foreground/10 size-2 rounded-full' />
            <span className='bg-foreground/10 size-2 rounded-full' />
            <span className='border-border bg-card text-muted-foreground/80 mx-auto hidden rounded-md border px-3 py-0.5 font-mono text-[10px] sm:block'>
              console · overview
            </span>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-[168px_minmax(0,1fr)]'>
            {/* Rail */}
            <div className='border-border bg-muted/25 hidden flex-col gap-0.5 border-r p-2.5 sm:flex'>
              {[
                'Overview',
                'Channels',
                'API Keys',
                'Usage Logs',
                'Models',
                'Settings',
              ].map((item, index) => (
                <div
                  key={item}
                  className={
                    index === 0
                      ? 'bg-card flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px] font-medium shadow-[inset_0_0_0_1px_var(--border)]'
                      : 'text-muted-foreground flex items-center gap-2 rounded-md px-2 py-1.5 text-[11px]'
                  }
                >
                  <span
                    className={
                      index === 0
                        ? 'bg-primary size-1.5 rounded-full'
                        : 'bg-foreground/15 size-1.5 rounded-full'
                    }
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* Content */}
            <div className='p-3.5 sm:p-4'>
              <div className='grid grid-cols-3 gap-2.5'>
                {[
                  { label: 'Requests / 24h', value: '18,422', delta: '+12.4%' },
                  { label: 'Tokens', value: '4.21M', delta: '+8.1%' },
                  { label: 'Spend', value: '$142.08', delta: '-3.2%' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className='border-border bg-card rounded-md border px-2.5 py-2 text-left'
                  >
                    <p className='text-muted-foreground truncate text-[9.5px] tracking-wide uppercase'>
                      {stat.label}
                    </p>
                    <p className='mt-1 font-mono text-[15px] leading-none font-medium tabular-nums'>
                      {stat.value}
                    </p>
                    <p className='text-muted-foreground/70 mt-1 font-mono text-[9.5px]'>
                      {stat.delta}
                    </p>
                  </div>
                ))}
              </div>

              <div className='border-border mt-2.5 rounded-md border p-2.5'>
                <div className='flex items-end justify-between gap-1.5'>
                  {BARS.map((height, index) => (
                    <div
                      key={index}
                      className={
                        index > 10
                          ? 'bg-primary/85 w-full rounded-[2px]'
                          : 'bg-primary/20 w-full rounded-[2px]'
                      }
                      style={{ height: `${height * 0.62}px` }}
                    />
                  ))}
                </div>
              </div>

              <div className='border-border mt-2.5 overflow-hidden rounded-md border'>
                {REQUESTS.map((row) => (
                  <div
                    key={row.model}
                    className='border-border/70 grid grid-cols-[minmax(0,1fr)_auto_auto] items-center gap-3 border-b px-2.5 py-1.5 last:border-b-0'
                  >
                    <span className='truncate font-mono text-[10.5px]'>
                      {row.model}
                    </span>
                    <span className='text-muted-foreground font-mono text-[10.5px] tabular-nums'>
                      {row.tokens}
                    </span>
                    <span className='flex items-center gap-2 font-mono text-[10.5px] tabular-nums'>
                      {row.cost}
                      <span
                        className={
                          row.ok === 'slow'
                            ? 'bg-warning size-1.5 rounded-full'
                            : 'bg-success size-1.5 rounded-full'
                        }
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Ground shadow instead of a blurry glow. */}
        <div
          aria-hidden
          className='bg-foreground/8 mx-auto mt-3 h-6 w-[85%] rounded-[50%] blur-xl'
        />
      </div>
    </section>
  )
}