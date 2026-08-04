import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'


import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Li Fan Piano Studio 李帆钢琴工作室',
      },
      {
        name: 'description',
        content:
          'Li Fan Piano Studio — Carnegie Hall recitalist and Steinway Top Teacher Li Fan, his Young Pianists concert series, and studio students. 李帆钢琴工作室，卡内基音乐厅独奏钢琴家、斯坦威顶级音乐教师李帆的教学与《钢琴少年》系列音乐会。',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
