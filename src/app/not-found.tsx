import Link from 'next/link';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
 
export default async function NotFound() {

  return (
    <>
        <div className='h-screen flex'>
            <div className='mx-auto container items-center justify-center flex'>
                <div className='text-center'>
                    <p><WarningAmberIcon style={{width: '100px', height: '100px'}} /></p>
                    <h2 className='text-3xl font-semibold uppercase'>Page Not Found</h2>
                    <p>Could not find the requested URL</p>
                    <p>
                        Go <Link href="/" className='active'>back to homepage</Link>
                    </p>
                </div>
            </div>
        </div>
    </>
  )
}