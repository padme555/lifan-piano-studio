import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import type { Student } from '@/lib/content'
import { Avatar } from '@/components/avatar'
import { cn } from '@/lib/utils'

export function StudentCard({ student, index }: { student: Student; index: number }) {
  const [expanded, setExpanded] = useState(false)
  const [lang, setLang] = useState<'zh' | 'en'>('zh')

  return (
    <div className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-start gap-4">
        <Avatar name={student.nameEn} seed={index} className="h-20 w-20 shrink-0" />
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-semibold text-stone-900">
            {student.name}
            <span className="ml-2 text-sm font-normal text-stone-500">
              {student.nameEn}
            </span>
          </h3>
          <p className="text-sm text-stone-500">
            {lang === 'zh' ? student.grade : student.gradeEn}
          </p>
          <p className="mt-1 text-xs font-medium uppercase tracking-wide text-amber-700">
            {lang === 'zh' ? student.highlight : student.highlightEn}
          </p>
        </div>
      </div>

      <p
        className={cn(
          'mt-4 flex-1 text-sm leading-relaxed text-stone-600',
          !expanded && 'line-clamp-3',
        )}
      >
        {lang === 'zh' ? student.bioZh : student.bioEn}
      </p>

      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors"
        >
          {expanded ? (lang === 'zh' ? '收起' : 'See less') : lang === 'zh' ? '查看更多' : 'See more'}
          <ChevronDown
            size={14}
            className={cn('transition-transform duration-200', expanded && 'rotate-180')}
          />
        </button>
        <button
          type="button"
          onClick={() => setLang((l) => (l === 'zh' ? 'en' : 'zh'))}
          className="rounded-full border border-stone-300 px-3 py-1 text-xs font-medium text-stone-600 hover:border-amber-400 hover:text-amber-700 transition-colors"
        >
          {lang === 'zh' ? 'English' : '中文'}
        </button>
      </div>
    </div>
  )
}
