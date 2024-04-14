import {Button} from '~/components/ui/button'
import {EmailIcon} from '~/components/ui/Icons/EmailIcon/EmailIcon'
import {Link} from '@remix-run/react'
import {Command} from 'lucide-react'
import {ThemeToggle} from './resources.theme-toggle'

export default function Index() {
    return (
        <section className="w-full min-h-screen flex flex-col">
            <nav className="flex items-center justify-between p-4 w-full">
                <Link to="/" className="flex items-center space-x-2">
                    <Command className="h-8 w-8"/>
                    <h1 className="text-xl font-semibold">Remix + Shadcn</h1>
                </Link>
                <ThemeToggle/>
            </nav>
            <div className="text-center text-2xl font-bold">Hi Ivan</div>

            <div className="max-screen mx-auto">

                <Button className="px-8 py-3 gap-2" variant="default">

                    <EmailIcon />

                    Export to Email

                </Button>

                <div className="flex gap-10">

                    <p>Hi 1</p>

                    <p>Hi 2</p>

                </div>
            </div>
        </section>
    )
}
