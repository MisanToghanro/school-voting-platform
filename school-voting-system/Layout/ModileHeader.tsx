import Link from "next/link";
import { useState } from "react";


const MobileHeader = () => {
        const [menu, setMenu] = useState(false);

    return(
        <div className="md:hidden">

            <button type="button"
            onClick={()=>setMenu(!menu)}
        className="rounded-md p-2 text-gray-700 hover:bg-gray-100"
        aria-label="Toggle navigation menu"
        aria-expanded={menu}
            >

                {menu ?
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
</svg>
}

            </button>

            {menu && (
                <div  className="absolute left-0 right-0 top-full border-t bg-white px-4 py-4 shadow-md">
                    <div className="flex flex-col gap-4">
                        <Link href="/" onClick={() => setMenu(false)}>
                         Home
                         </Link>

                       <Link href="/Login/admin" onClick={() => setMenu(false)}>
                         Admin
                         </Link>

                    <Link href="/Login/candidate" onClick={() => setMenu(false)}>
                         Candidate
                         </Link>

                     <Link href="/Login/student" onClick={() => setMenu(false)}>
                         Student
                    </Link>
                    </div>
             </div>
            )}

        </div>
    )

}

export default MobileHeader