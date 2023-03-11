import Link from 'next/link'

export default function Header() {
    return (
        <header>
            <nav>
                <Link href="/profile">
                    Profile
                </Link>
            </nav>
        </header>
    )
}