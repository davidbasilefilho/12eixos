import type { ComponentPropsWithoutRef } from 'react'
import { cn } from 'cn'
import type { ColorScheme } from './tokens'

type ArtworkProps = Omit<ComponentPropsWithoutRef<'div'>, 'children'> & { variant: 'books' | 'globe' | 'atlas'; color?: ColorScheme; size?: 'sm' | 'md' | 'lg' }
const positions = { books: 'bg-left', globe: 'bg-center', atlas: 'bg-right' }
const sizes = { sm: 'h-[100px] w-[140px]', md: 'h-[125px] w-[175px]', lg: 'h-[210px] w-[250px]' }
/** Decorative asset generated from the accepted illustration reference after licensed search. */
export function EditorialArtwork({ variant, color = 'mapBlue', size = 'md', className, ...props }: ArtworkProps) {
  return <div aria-hidden="true" data-color={color} className={cn('shrink-0 bg-[url(/assets/editorial/atlas-illustrations.png)] bg-no-repeat bg-[length:300%_100%]', positions[variant], sizes[size], className)} {...props}/>
}
