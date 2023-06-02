
type Mods = Record<string, string | boolean>

export function classNames (cls: string, mods: Mods, additionalClasses: string[]) {
    return [
        cls,
        ...additionalClasses,
        Object.entries(mods).filter(([className, value]) => Boolean(value))
            .map(([className]) => className )

    ].join(' ')
}