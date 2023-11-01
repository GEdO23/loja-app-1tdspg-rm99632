import Link from 'next/link'

export default function Cabecalho() {
  return (
    <header className="cabecalho">
          <nav>
            <ul>
              <li><Link href="/">↪ Home</Link></li>
              <li><Link href="/produtos/camisa">↪ Camisas</Link></li>
              <li><Link href="/produtos/tenis">↪ Tenis</Link></li>
              <li><Link href="/fazenda">↪ Queijos</Link></li>
            </ul>
          </nav>
    </header>
  )
}
