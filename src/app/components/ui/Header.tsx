import { Moon } from 'lucide-react';
import { Sun } from 'lucide-react';

export default function Header() {
    const headerGlass = `
        fixed top-0 left-0 w-full z-50 h-20
        bg-gradient-to-b from-white/10 to-white/5 
        backdrop-blur-3xl saturate-150 
        border-b-2 border-gray-20
        shadow-[0_8px_30px_rgba(255,255,255,0.1),inset_0_-2px_4px_rgba(255,255,255,0.15)]
        p-4
        flex items-center
    `;    

    return (
        <header className={headerGlass}>
            <div id='header-content' className="max-w-7xl mx-auto w-full flex item-center justify-between px-6">
                <p className='text-3xl text-gray-200 font-bold font-title'>ConverterName</p>
                <button className='border-white border-2 p-2 rounded-lg bg-gray-700'>
                    <Moon color='white'/>
                    <Sun color='white'/>
                </button>
            </div>    
        </header>
    )
};