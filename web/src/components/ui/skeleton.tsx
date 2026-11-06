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
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot='skeleton'
      className={cn(
        // Shimmer sweep: gradient highlight translating across, purely
        // transform-based so it never triggers layout. The keyframes are
        // defined in index.css and honour prefers-reduced-motion globally.
        'relative overflow-hidden bg-muted rounded-md',
        'before:absolute before:inset-0 before:-translate-x-full before:content-[""]',
        'before:bg-gradient-to-r before:from-transparent',
        'before:via-foreground/5 dark:before:via-foreground/10',
        'before:to-transparent',
        'before:animate-[shimmer_1.4s_ease-in-out_infinite]',
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
