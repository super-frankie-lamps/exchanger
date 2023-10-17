import { HTMLProps, PropsWithChildren } from "react"

export const ExternalLink = ({ children, ...props }: PropsWithChildren<HTMLProps<HTMLAnchorElement>>) => {
  return (
	<a target="_blank" {...props}>{children}</a>
  )
}
