import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <aside>
        <Image src="/bg_login.svg" width={100} height={20} />
        <Image src="/logo.svg" width={100} height={20} />
      </aside>
    <main>
      <div>
        <h1 className="text-gray-100 text-2xl">Boas vindas!</h1>
        <span>Faça seu login ou acesse como visitante.</span>
      </div>
      <menu>
        <button>
          Entrar com Google
        </button>
        <button>
          Entrar com GitHub
        </button>
        <button>
          Acessar como visitante
        </button>
      </menu>
    </main>
    </div>
  )
}
