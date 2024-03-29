import { useEffect, useState } from 'react'

export default function useShowMenu(ref, userScrolled) {
    const [showShowMenu, setShowMenu] = useState(false)

    const checkOverflow = () => {
        const hasOverflowingChildren =
            ref.current.offsetHeight < ref.current.scrollHeight ||
            ref.current.offsetWidth < ref.current.scrollWidth
        
        if (!userScrolled.current) {
            setShowMenu(hasOverflowingChildren)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkOverflow)

        checkOverflow() //inital check

        return () => {
            window.removeEventListener('resize', checkOverflow)
        }
    }, [])

    return showShowMenu
}


