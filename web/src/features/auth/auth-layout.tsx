/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Link } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/ui/skeleton'
import { useSystemConfig } from '@/hooks/use-system-config'

type AuthLayoutProps = {
  children: React.ReactNode
}

const PROVIDERS = ['OpenAI', 'Anthropic', 'Gemini', 'DeepSeek', 'Qwen']

const SNIPPET = `curl $NEW_API/v1/chat/completions \\
  -H "Authorization: Bearer $KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4o",
    "messages": [{"role":"user","content":"hi"}]
  }'`

/**
 * Split auth shell.
 *
 * Left: a narrow, typographically quiet form column pinned to the optical
 * centre of the viewport. Right: a fixed dark proof panel that shows what the
 * product actually is — one endpoint, many upstreams — instead of decorative
 * gradients. The panel is deliberately theme-independent: it is the brand
 * surface and stays dark in both modes.
 */
export function AuthLayout({ children }: AuthLayoutProps) {
  const { t } = useTranslation()
  const { systemName, logo, loading } = useSystemConfig()

  return (
    <div className='grid min-h-svh grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,44%)]'>
      <div className='flex min-h-svh flex-col px-6 pt-8 pb-8 sm:px-10'>
        <Link
          to='/'
          className='inline-flex w-fit items-center gap-2.5 transition-opacity hover:opacity-70'
        >
          <div className='relative size-7'>
            {loading ? (
              <Skeleton className='absolute inset-0 rounded-md' />
            ) : (
              <img
                src={logo}
                alt={t('Logo')}
                className='size-7 rounded-md object-cover'
              />
            )}
          </div>
          {loading ? (
            <Skeleton className='h-5 w-24' />
          ) : (
            <span className='text-[15px] font-semibold tracking-[-0.01em]'>
              {systemName}
            </span>
          )}
        </Link>

        <div className='flex flex-1 items-center justify-center py-12'>
          <div className='w-full max-w-[340px]'>{children}</div>
        </div>

        <p className='text-muted-foreground/70 text-[11px] tracking-wide'>
          {systemName} · {t('All rights reserved')}
        </p>
      </div>

      <aside
        aria-hidden
        className='relative hidden overflow-hidden border-l border-border bg-[oklch(0.185_0.007_265)] lg:flex lg:flex-col lg:justify-center lg:px-14'
      >
        {/* One indigo bloom, one hairline grid. Nothing else. */}
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            background:
              'radial-gradient(120% 80% at 15% 0%, oklch(0.52 0.165 277 / 0.35) 0%, transparent 55%)',
          }}
        />
        <div
          className='pointer-events-none absolute inset-0 opacity-[0.06]'
          style={{
            backgroundImage:
              'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
            backgroundSize: '56px 56px',
            maskImage:
              'radial-gradient(100% 70% at 50% 30%, #000 0%, transparent 90%)',
          }}
        />

        <div className='relative'>
          <p className='font-mono text-[11px] tracking-[0.2em] text-white/40 uppercase'>
            {t('AI Gateway')}
          </p>
          <h2 className='mt-5 text-[32px] leading-[1.15] font-semibold tracking-[-0.035em] text-white'>
            {t('One endpoint.')}
            <br />
            <span className='text-white/45'>{t('Every model you trust.')}</span>
          </h2>
          <p className='mt-5 max-w-[38ch] text-[13.5px] leading-relaxed text-white/55'>
            {t(
              'Route, meter and govern every request across your upstream providers — from a single, standard API.'
            )}
          </p>

          <div className='mt-9 overflow-hidden rounded-lg border border-white/10 bg-black/40'>
            <div className='flex items-center gap-1.5 border-b border-white/10 px-3.5 py-2'>
              <span className='size-2 rounded-full bg-white/15' />
              <span className='size-2 rounded-full bg-white/15' />
              <span className='size-2 rounded-full bg-white/15' />
              <span className='ml-2 font-mono text-[10.5px] tracking-wide text-white/35'>
                request.sh
              </span>
            </div>
            <pre className='overflow-x-auto px-3.5 py-3.5 font-mono text-[11.5px] leading-[1.8] text-white/70'>
              {SNIPPET}
            </pre>
          </div>

          <div className='mt-8 flex flex-wrap gap-x-5 gap-y-2'>
            {PROVIDERS.map((provider) => (
              <span
                key={provider}
                className='font-mono text-[11px] tracking-wide text-white/35'
              >
                {provider}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  )
}