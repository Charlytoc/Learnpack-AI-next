import Image from 'next/image'
import { svgs } from '@/app/resources/svgs'
import ShowSidebarButton from '../client/ToggleSidebarButton'
import BuildButton from '../client/BuildButton'
export default function Navbar () {
    return <nav className="navbar-component">
        <section>
            <Image src="/logo.png" width={200} height={180} alt='Learnpack' style={{width:"40px", height:"auto"}} />
            <BuildButton />
            <button className='pill border-blue color-blue'>Feedback &gt;</button>

        </section>
        <section>
            <ShowSidebarButton svg={svgs.dropdownButton} />
        </section>
    </nav>
}