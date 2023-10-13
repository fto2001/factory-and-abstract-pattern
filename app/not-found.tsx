import Link from "next/link";
import notFound from '@/components/not-found.module.css'
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Page not Found!',
}

export default function Custom404() {
    return (
        <>
            <div className={notFound.container}>
                <h1 className={notFound.title}>404 - Page not found</h1>
                <p className={notFound.main}>
                    Sorry, but the page you are looking for was not found. <br />
                    Maybe you want to go to the main page?
                </p>
                <Link href="/posts/first-project" className={notFound.link}>Back to home!</Link>
            </div>
            <p className={notFound.trainee}>Rostislav are you ready?</p>
        </>
    )
}