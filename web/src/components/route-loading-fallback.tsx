import { useTranslation } from 'react-i18next'

import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'

/**
 * Route-level pending fallback.
 *
 * Replaces the blank frame users see while route guards resolve and
 * code-split chunks load. Mirrors the reference design's `PageSkeleton`:
 * a 4-tile stat row + one wide pane, so the incoming page's silhouette is
 * visible from the first paint instead of an empty container.
 */
export function RouteLoadingFallback({ className }: { className?: string }) {
  const { t } = useTranslation()

  return (
    <div
      role='status'
      aria-label={t('Loading...')}
      className={cn('flex min-h-0 flex-1 flex-col p-4 sm:p-6', className)}
    >
      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-4'>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className='bg-card rounded-xl border p-4 shadow-xs'
          >
            <Skeleton className='h-3.5 w-2/5' />
            <Skeleton className='mt-3 h-7 w-3/5' />
          </div>
        ))}
      </div>
      <div className='bg-card mt-4 flex-1 rounded-xl border p-4 shadow-xs'>
        <Skeleton className='h-4 w-1/4' />
        <div className='mt-4 flex flex-col gap-3'>
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className='h-8 w-full' />
          ))}
        </div>
      </div>
    </div>
  )
}
