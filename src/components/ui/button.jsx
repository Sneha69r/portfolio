import * as React from 'react'
import { cn } from '@/lib/utils'

export function Button({ className, asChild = false, children, ...props }) {
  const classes = cn(
    'inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-600 bg-gray-800 text-sm font-medium text-white transition-colors hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400',
    className
  )

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ...children.props,
      ...props,
      className: cn(classes, children.props.className, props.className),
    })
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
