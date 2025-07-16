import { Button } from '@/components/Button'
import clsx from 'clsx'

export function CallToAction({ className, text, buttonText, size, clickUrl }) {
  const router =
    typeof window !== 'undefined' ? require('next/router').useRouter() : null

  const theSize = size ?? 'medium'

  const sizes = {
    small: {
      titleClassName: 'text-3xl sm:text-4xl',
      buttonClassName: 'h-14 px-10',
    },
    medium: {
      titleClassName: 'text-4xl sm:text-5xl',
      buttonClassName: 'h-16 w-52',
    },
  }

  return (
    <div
      className={clsx(
        className,
        'mt-28 lg:flex lg:items-center lg:justify-between'
      )}
    >
      <h2
        className={clsx(
          sizes[theSize].titleClassName,
          'my-0 max-w-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100'
        )}
      >
        {text}
      </h2>
      <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
        <Button
          className={clsx(sizes[theSize].buttonClassName, '!rounded-full')}
          onClick={() => router.push(clickUrl)}
        >
          {buttonText}
        </Button>
      </div>
    </div>
  )
}
