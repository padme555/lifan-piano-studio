import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import { Mail, MapPin, Music2, Phone, Youtube } from 'lucide-react'
import { teacher, students, concerts } from '@/lib/content'
import { Avatar } from '@/components/avatar'
import { ExpandableParagraphs } from '@/components/expandable-paragraphs'
import { StudentCard } from '@/components/student-card'

export const Route = createFileRoute('/')({
  component: HomePage,
})

const NAV = [
  { id: 'teacher', zh: '关于老师', en: 'Teacher' },
  { id: 'students', zh: '钢琴少年', en: 'Students' },
  { id: 'concerts', zh: '音乐会', en: 'Concerts' },
  { id: 'contact', zh: '联系我们', en: 'Contact' },
]

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <SiteHeader />
      <Hero />
      <TeacherSection />
      <StudentsSection />
      <ConcertsSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-serif text-lg font-semibold">
          <Music2 size={20} className="text-amber-700" />
          Li Fan Piano Studio
        </a>
        <nav className="hidden gap-6 text-sm font-medium text-stone-600 sm:flex">
          {NAV.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="hover:text-amber-700 transition-colors">
              {item.zh} · {item.en}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-amber-100/60 via-stone-50 to-stone-50" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-amber-700">
          Piano · Performance · Education
        </p>
        <h1 className="font-serif text-4xl font-semibold leading-tight sm:text-6xl">
          李帆钢琴工作室
          <span className="mt-2 block text-2xl font-normal text-stone-500 sm:text-3xl">
            Li Fan Piano Studio
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-stone-600 sm:text-lg">
          卡内基音乐厅独奏钢琴家 · 斯坦威顶级音乐教师
          <br className="hidden sm:block" />
          Carnegie Hall recitalist &amp; Steinway Top Teacher, cultivating the next generation of pianists
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#teacher"
            className="rounded-full bg-stone-900 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-stone-700"
          >
            认识李帆老师 Meet the Teacher
          </a>
          <a
            href="#students"
            className="rounded-full border border-stone-300 px-6 py-3 text-sm font-medium text-stone-700 transition-colors hover:border-amber-400 hover:text-amber-700"
          >
            钢琴少年 Young Pianists
          </a>
        </div>
      </div>
    </section>
  )
}

function TeacherSection() {
  const [lang, setLang] = useState<'zh' | 'en'>('zh')

  return (
    <section id="teacher" className="border-t border-stone-200 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading zh="认识李帆老师" en="Meet the Teacher" />

        <div className="mt-12 grid gap-10 sm:grid-cols-[240px_1fr]">
          <div className="mx-auto sm:mx-0">
            <Avatar name={teacher.nameEn} seed={9} className="h-56 w-full sm:h-64" />
            <p className="mt-3 text-center text-xs text-stone-400 sm:text-left">
              照片待补充 · Photo coming soon
            </p>
          </div>

          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="font-serif text-2xl font-semibold">
                  {teacher.name}
                  <span className="ml-2 text-base font-normal text-stone-500">
                    {teacher.nameEn}
                  </span>
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-700">
                  {lang === 'zh' ? teacher.role : teacher.roleEn}
                </p>
              </div>
              <LangToggle lang={lang} setLang={setLang} />
            </div>

            <ExpandableParagraphs
              className="mt-6 text-stone-700"
              paragraphs={lang === 'zh' ? teacher.paragraphsZh : teacher.paragraphsEn}
              collapsedCount={2}
              seeMoreLabel={lang === 'zh' ? '查看完整简历 ⌄' : 'See more ⌄'}
              seeLessLabel={lang === 'zh' ? '收起' : 'See less'}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function LangToggle({
  lang,
  setLang,
}: {
  lang: 'zh' | 'en'
  setLang: (l: 'zh' | 'en') => void
}) {
  return (
    <div className="inline-flex rounded-full border border-stone-300 p-0.5 text-xs font-medium">
      <button
        type="button"
        onClick={() => setLang('zh')}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'zh' ? 'bg-stone-900 text-white' : 'text-stone-600'
        }`}
      >
        中文
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        className={`rounded-full px-3 py-1 transition-colors ${
          lang === 'en' ? 'bg-stone-900 text-white' : 'text-stone-600'
        }`}
      >
        English
      </button>
    </div>
  )
}

function StudentsSection() {
  return (
    <section id="students" className="border-t border-stone-200 bg-stone-50 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading zh="钢琴少年" en="Young Pianists" />
        <p className="mx-auto mt-4 max-w-2xl text-center text-stone-600">
          自2003年起，李帆老师的学生系列音乐会《钢琴少年》每年推出优秀高中生登台演奏高难度经典曲目。以下是工作室部分学生代表（学生资料及照片待补充为真实信息）。
        </p>
        <p className="mx-auto mt-1 max-w-2xl text-center text-sm text-stone-400">
          Since 2003, the Young Pianists concert series has featured outstanding high school students performing demanding classical repertoire. (Student details and photos below are placeholders — replace with real profiles.)
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {students.map((student, i) => (
            <StudentCard key={student.nameEn} student={student} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ConcertsSection() {
  return (
    <section id="concerts" className="border-t border-stone-200 bg-white py-20">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading zh="音乐会" en="Concerts" />

        <div className="mt-12 space-y-8">
          {concerts.map((c) => (
            <div
              key={c.titleEn}
              className="rounded-2xl border border-stone-200 bg-stone-50 p-8"
            >
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                {c.titleZh}
                <span className="ml-2 text-base font-normal text-stone-500">
                  {c.titleEn}
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-stone-700">{c.descriptionZh}</p>
              <p className="mt-2 leading-relaxed text-stone-500">{c.descriptionEn}</p>
            </div>
          ))}
        </div>

        <a
          href="https://www.youtube.com/results?search_query=Li+Fan+plays+piano"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-900 transition-colors"
        >
          <Youtube size={18} />
          在 YouTube 搜索 “Li Fan plays” 观看演出实况 · Watch performances on YouTube
        </a>
      </div>
    </section>
  )
}

function ContactSection() {
  const [fields, setFields] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFields({ ...fields, [e.target.name]: e.target.value })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...fields }),
    })
    setSubmitted(true)
  }

  return (
    <section id="contact" className="border-t border-stone-200 bg-stone-900 py-20 text-stone-100">
      <div className="mx-auto grid max-w-5xl gap-12 px-6 sm:grid-cols-2">
        <div>
          <SectionHeading zh="联系我们" en="Contact" light />
          <p className="mt-6 leading-relaxed text-stone-300">
            欢迎咨询钢琴课程、音乐会演出或工作室相关事宜。
          </p>
          <p className="mt-2 leading-relaxed text-stone-400">
            For inquiries about lessons, performances, or the studio, please reach out.
          </p>

          <div className="mt-8 space-y-3 text-sm text-stone-300">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" /> Boston, Massachusetts
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-amber-400" /> studio@lifanpiano.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={16} className="text-amber-400" /> (待补充电话 · phone TBD)
            </div>
          </div>
        </div>

        <div>
          {submitted ? (
            <div className="rounded-2xl border border-stone-700 bg-stone-800 p-8 text-center">
              <p className="font-medium text-white">感谢您的留言！我们会尽快回复。</p>
              <p className="mt-1 text-sm text-stone-400">Thanks for reaching out — we'll be in touch soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <label htmlFor="name" className="mb-1 block text-sm text-stone-300">
                  姓名 Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  value={fields.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-2 text-white outline-none transition-colors focus:border-amber-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm text-stone-300">
                  邮箱 Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  value={fields.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-stone-700 bg-stone-800 px-4 py-2 text-white outline-none transition-colors focus:border-amber-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-1 block text-sm text-stone-300">
                  留言 Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={fields.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-stone-700 bg-stone-800 px-4 py-2 text-white outline-none transition-colors focus:border-amber-400"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-amber-500 px-6 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-amber-400"
              >
                发送 Send
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50 py-8 text-center text-xs text-stone-400">
      © {new Date().getFullYear()} Li Fan Piano Studio. All rights reserved.
    </footer>
  )
}

function SectionHeading({ zh, en, light }: { zh: string; en: string; light?: boolean }) {
  return (
    <div className="text-center">
      <h2
        className={`font-serif text-3xl font-semibold sm:text-4xl ${
          light ? 'text-white' : 'text-stone-900'
        }`}
      >
        {zh}
        <span className={`ml-3 text-xl font-normal ${light ? 'text-stone-400' : 'text-stone-500'}`}>
          {en}
        </span>
      </h2>
      <div className="mx-auto mt-4 h-px w-16 bg-amber-500" />
    </div>
  )
}
