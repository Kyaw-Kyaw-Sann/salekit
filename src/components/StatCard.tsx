import type { ReactNode } from 'react'

type StatCardProps = {
  title: string
  value: string | number
  children: ReactNode
}

function StatCard({ title, value, children }: StatCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-border bg-surface p-5 shadow-sm">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {children}
      </div>

      <div>
        <p className="text-sm text-body">{title}</p>
        <p className="mt-1 text-2xl font-bold text-heading">{value}</p>
      </div>
    </div>
  )
}

export default StatCard
