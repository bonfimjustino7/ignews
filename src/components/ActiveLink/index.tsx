import { ReactElement, cloneElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  children: ReactElement
  activeClassName: string
}

export function ActiveLink({
  children,
  activeClassName,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  // para rotas filhas
  const rotaPai = rest.href.toString().replace('/', '')
  const rotaFilha = asPath.split('/').filter((r) => r !== '')

  const className =
    asPath === rest.href || rotaFilha.includes(rotaPai) ? activeClassName : ''

  return (
    <Link {...rest}>
      {cloneElement(children, {
        className,
      })}
    </Link>
  )
}
