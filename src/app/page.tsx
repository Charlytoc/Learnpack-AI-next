import Image from 'next/image'
import Navbar from './components/server/Navbar'
import LessonContainer from './components/server/LessonContainer'
import Sidebar from './components/server/Sidebar'

export default function Home() {
  return (
    <main className="">
      <Sidebar />
      <Navbar />
      <LessonContainer />
    </main>
  )
}
