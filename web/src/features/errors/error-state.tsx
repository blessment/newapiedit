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
import type { ReactNode } from 'react'

import { cn } from '@/lib/utils'

type ErrorStateProps = {
  /** HTTP status or short code shown as a muted eyebrow line. */
  code?: number | string
  title: string
  description?: ReactNode
  /** Buttons / links rendered in the footer row. */
  actions?: ReactNode
  /** Secondary note, rendered under the footer rule. */
  footnote?: ReactNode
  className?: string
}

/**
 * Shared shell for every full-page error and empty route.
 * Left-aligned on the page canvas: a muted code, the message, then a single
 * hairline rule with the available actions.
 */
export function ErrorState({
  code,
  title,
  description,
  actions,
  footnote,
  className,
}: ErrorStateProps) {
  return (
    <div
      className={cn(
        'bg-background flex min-h-svh w-full items-center justify-center px-6 py-16',
        className
      )}
    >
      <div className='w-full max-w-[420px]'>
        {code !== undefined && (
          <p className='text-muted-foreground font-mono text-[10.5px] font-medium tracking-[0.18em] uppercase'>
            Error {code}
          </p>
        )}
        <h1 className='text-foreground mt-3 text-[22px] leading-tight font-semibold tracking-[-0.025em]'>
          {title}
        </h1>
        {description && (
          <div className='text-muted-foreground mt-2.5 text-[13px] leading-relaxed'>
            {description}
          </div>
        )}
        {actions && (
          <div className='border-border mt-7 flex flex-wrap items-center gap-2 border-t pt-5'>
            {actions}
          </div>
        )}
        {footnote && (
          <p className='text-muted-foreground/70 mt-4 text-[12px] leading-relaxed'>
            {footnote}
          </p>
        )}
      </div>
    </div>
  )
}