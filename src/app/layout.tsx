//Import des polices depuis google avec next/font
import { Sora, Inter } from 'next/font/google'
//Definition des configurations de polices
const sora = Sora({subsets: ['latin'], display: 'swap', variable: '--font-title'})
const inter = Inter({subsets: ['latin'], display: 'swap'})

import './styles/globals.css' //Import du css

//Import des composants header et footer
import Header from './components/ui/Header'
import Footer from './components/ui/Footer'


interface LayoutProps { //Pour eviter la surcharge de propriétés de la fonction
    children: React.ReactNode;
}

export default function RootLayout({ children }: LayoutProps) {
    return (
        <html lang="fr">
            <body className={`${inter.className} ${sora.variable} bg-gray-950`}>
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
};
