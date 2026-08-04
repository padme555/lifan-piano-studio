import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ExpandableParagraphs({
  paragraphs,
  collapsedCount = 1,
  seeMoreLabel = 'See more',
  seeLessLabel = 'See less',
  className,
}: {
  paragraphs: Array<string>
  collapsedCount?: number
  seeMoreLabel?: string
  seeLessLabel?: string
  className?: string
}) {
  const [expanded, setExpanded] = useState(false)
  const hasMore = paragraphs.length > collapsedCount
  const visible = expanded ? paragraphs : paragraphs.slice(0, collapsedCount)

  return (
    <div className={className}>
      <div className="space-y-4">
        {visible.map((p, i) => (
          <p key={i} className="leading-relaxed">
            {p}
          </p>
        ))}
      </div>
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors"
        >
          {expanded ? seeLessLabel : seeMoreLabel}
          <ChevronDown
            size={16}
            className={cn(
              'transition-transform duration-200',
              expanded && 'rotate-180',
            )}
          />
        </button>
      )}
    </div>
  )
}
