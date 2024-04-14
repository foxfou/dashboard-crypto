import {Button} from '~/components/ui/button'
import {Link} from '@remix-run/react'
import {Command} from 'lucide-react'
import {Card, CardContent} from '~/components/ui/card'
import {ThemeToggle} from './resources.theme-toggle'
import {Hero3DCard} from '~/components/hero-3d-card'
import {AnimatedTooltipPreview} from '~/components/animated-preview'
import {AnimatedPinDemo} from '~/components/animated-3d-pin'

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
                <Button className="px-8 py-3" variant="default">
                    <img src="email.svg" alt="" />
                    Export to Email
                </Button>
            </div>
        </section>
    )
}
