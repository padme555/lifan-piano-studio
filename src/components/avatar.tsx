import { cn } from '@/lib/utils'

const PALETTES = [
  'from-amber-200 via-amber-100 to-stone-200 text-amber-900',
  'from-stone-300 via-stone-200 to-amber-100 text-stone-800',
  'from-amber-100 via-stone-100 to-stone-200 text-stone-800',
]

export function Avatar({
  name,
  seed = 0,
  className,
}: {
  name: string
  seed?: number
  className?: string
}) {
  const initials = name.slice(0, 1)
  const palette = PALETTES[seed % PALETTES.length]

  return (
    <div
      className={cn(
        'relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br',
        palette,
        className,
      )}
    >
      <span className="font-serif text-4xl font-semibold tracking-tight opacity-80">
        {initials}
      </span>
      <svg
        viewBox="0 0 24 24"
        className="absolute -bottom-2 -right-2 h-16 w-16 opacity-15"
        fill="currentColor"
      >
        <path d="M12 3v10.55A4 4 0 1 0 14 17V7h4V3h-6z" />
      </svg>
    </div>
  )
}
