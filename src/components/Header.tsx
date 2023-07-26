import Link from 'next/link';

export const Header:React.FC = ()  => { 
    return <header className="navbar">
        <div className="navbar-start px-3">
            <Link href="/">
            LOGO
            </Link>
        </div>

        <div className="navbar-end">
            <div className="px-3">
                <Link href="/blog">
                    Blog
                </Link>
            </div>

            <div className="px-3">
                <Link href="/blog">
                    xepextract
                </Link>
            </div>

            <div className="px-3">
                <Link href="/blog">
                    Connexion
                </Link>
            </div>
        </div>

        </header>;
}