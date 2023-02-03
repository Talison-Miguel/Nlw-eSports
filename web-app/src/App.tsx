import { useState, useEffect } from 'react'
import { GamerBanner } from './components/GamerBanner'
import { CreatAddBanner } from './components/CreatAddBanner'
import * as Dialog from '@radix-ui/react-dialog'
import './styles/main.css'
import logoImg from './assets/logo-esports.svg'
import { CreatAdModal } from './components/CreatAdModal'
import axios from 'axios'

interface Game {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        ads: number,
    }
}

function App() {
    const [games, setGames] = useState<Game[]>([])

    useEffect(() => {
        axios('http://localhost:3333/games')
        .then(response => {
            setGames(response.data)
        })
    }, [])

    return (
        <div className='max-w-[1344px] mx-auto flex flex-col items-center my-20'>
            <img src={logoImg} alt="" />
            <h1 className='text-6xl text-white font-black mt-20'>Seu <span className='bg-nlw-gradient bg-clip-text text-transparent'>duo</span> está aqui.</h1>

            <div className='grid-cols-6 grid gap-6 mt-16 mx-8'>
                {games.map(game => {
                    return (
                        <GamerBanner 
                            key={game.id}
                            title={game.title} 
                            bannerUrl={game.bannerUrl} 
                            adsCount={game._count.ads} 
                        />
                    )
                })} 
            </div>

            <Dialog.Root>
                <CreatAddBanner />  
                <CreatAdModal />
            </Dialog.Root>
        </div>
    )
}

export default App
