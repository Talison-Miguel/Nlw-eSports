import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog'

export function CreatAddBanner() {
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8 mx-8'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center '>
                <div>
                    <strong className='text-white font-black text-2xl block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um anúncio para encontrar novos players!</span>
                </div>
                <Dialog.Trigger className='py-3 px-4 text-white bg-violet-500 rounded hover:bg-violet-600 flex items-center gap-3'>
                    <MagnifyingGlassPlus size={24} />
                    Publicar anúncio
                </Dialog.Trigger>
            </div>
        </div>
    )
}