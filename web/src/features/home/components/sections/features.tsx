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
import {
  Zap,
  Shield,
  Globe,
  Code,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { AnimateInView } from '@/components/animate-in-view'

interface FeaturesProps {
  className?: string
}

export function Features(_props: FeaturesProps) {
  const { t } = useTranslation()

  const features = [
    {
      id: 'fast',
      num: '01',
      title: t('Lightning Fast'),
      desc: t(
        'Optimized network architecture ensures millisecond response times'
      ),
      span: 'md:col-span-2',
      tone: 'bg-muted border border-border',
      icon: <Zap className='size-4 text-foreground/70' />,
      visual: (
        <div className='mt-4 grid grid-cols-3 gap-2'>
          {['OpenAI', 'Claude', 'Gemini', 'DeepSeek', 'Qwen', 'Llama'].map(
            (name) => (
              <div
                key={name}
                className='border-border/70 text-muted-foreground flex items-center justify-center rounded-md border px-3 py-2 font-mono text-[11px]'
              >
                {name}
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'secure',
      num: '02',
      title: t('Secure & Reliable'),
      desc: t(
        'Enterprise-grade security with comprehensive permission management'
      ),
      span: 'md:col-span-1',
      tone: 'bg-muted border border-border',
      icon: <Shield className='size-4 text-foreground/70' />,
      visual: (
        <div className='mt-4 flex items-center justify-center'>
          <div className='relative'>
            <div className='bg-muted/60 flex size-16 items-center justify-center rounded-xl border border-border'>
              <Shield
                className='text-foreground/40 size-7'
                strokeWidth={1.5}
              />
            </div>
            <div className='bg-card absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full border border-border'>
              <svg
                className='text-foreground/60 size-2.5'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={3}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='m4.5 12.75 6 6 9-13.5'
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'global',
      num: '03',
      title: t('Global Coverage'),
      desc: t('Multi-region deployment for stable global access'),
      span: 'md:col-span-1',
      tone: 'bg-muted border border-border',
      icon: <Globe className='size-4 text-foreground/70' />,
      visual: (
        <div className='mt-4 space-y-2'>
          {[t('Load Balancing'), t('Rate Limiting'), t('Cost Tracking')].map(
            (step, i) => (
              <div key={step} className='flex items-center gap-2'>
                <div
                  className={`flex size-6 items-center justify-center rounded-full text-[10px] font-bold ${
                    i === 1
                      ? 'border border-primary/30 bg-primary/10 text-primary'
                      : 'border-border/40 bg-muted text-muted-foreground border'
                  }`}
                >
                  {i + 1}
                </div>
                <div className='bg-border/40 h-px flex-1' />
                <span className='text-muted-foreground text-xs'>{step}</span>
              </div>
            )
          )}
        </div>
      ),
    },
    {
      id: 'developer',
      num: '04',
      title: t('Developer Friendly'),
      desc: t('Compatible API routes for common AI application workflows'),
      span: 'md:col-span-2',
      tone: 'bg-muted border border-border',
      icon: <Code className='size-4 text-foreground/70' />,
      visual: (
        <div className='mt-4 flex items-center gap-3'>
          <div className='flex -space-x-2'>
            {['API', 'SDK', 'CLI', 'Docs'].map((n) => (
              <div
                key={n}
                className='ring-background from-muted to-muted/60 text-muted-foreground flex size-8 items-center justify-center rounded-full bg-gradient-to-br ring-2 text-[9px] font-bold'
              >
                {n}
              </div>
            ))}
          </div>
          <div className='text-muted-foreground flex items-center gap-1.5 text-xs'>
            <Code className='size-3.5 text-muted-foreground' />
            {t('Multi-protocol Compatible')}
          </div>
        </div>
      ),
    },
  ]


  return (
    <section className='relative z-10 px-6 py-24 md:py-32'>
      <div className='mx-auto max-w-6xl'>
        <AnimateInView className='mb-12 max-w-xl'>
          <p className='text-muted-foreground mb-3 font-mono text-[10.5px] font-medium tracking-[0.18em] uppercase'>
            {t('Core Features')}
          </p>
          <h2 className='text-[26px] leading-[1.2] font-semibold tracking-[-0.03em] md:text-[30px]'>
            {t('Built for developers,')}
            <br />
            <span className='text-muted-foreground/70'>
              {t('designed for scale')}
            </span>
          </h2>
        </AnimateInView>

        {/* Flat bento: hairlines instead of shadows, one neutral icon per card. */}
        <div className='grid gap-4 md:grid-cols-3'>
          {features.map((f, i) => (
            <AnimateInView
              key={f.id}
              delay={i * 100}
              animation='scale-in'
              className={`bg-card group relative rounded-lg border border-border p-6 transition-colors duration-200 hover:border-foreground/20 md:p-7 ${f.span}`}
            >
              <span className='text-muted-foreground/40 absolute top-6 right-6 font-mono text-[10px] font-medium tabular-nums'>
                {f.num}
              </span>
              <div className='mb-4 flex items-center gap-3'>
                <span
                  className={`flex size-9 items-center justify-center rounded-md ${f.tone}`}
                >
                  {f.icon}
                </span>
                <h3 className='text-[13.5px] font-semibold tracking-[-0.005em]'>
                  {f.title}
                </h3>
              </div>
              <p className='text-muted-foreground max-w-[46ch] text-[13px] leading-relaxed'>
                {f.desc}
              </p>
              {f.visual}
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
