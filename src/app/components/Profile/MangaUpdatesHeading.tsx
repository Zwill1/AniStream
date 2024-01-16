import Link from 'next/link'
import MangaUpdates from './MangaUpdates'

export default function MangaUpdatesHeading() {
  return (
    <>
        <div className="lg:w-6/12 w-full px-2">
            <div className="flex justify-between py-2">
            <p className='font-bold italic text-red-500'>Last Manga Updates</p>
            <p><Link href="#" className='text-blue-500'>Manga History</Link></p>
            </div>
            <MangaUpdates />
        </div>
    </>
  )
}
