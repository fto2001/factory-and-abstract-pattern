import Head from "next/head"
import Layout, { siteTitle } from "@/components/layout"
import utilStyles from '@/components/utils.module.css';
import settings from "@/components/settingsSingleton";
import Link from "next/link";

export default function FirstPost() {
    return (
        <>
            <Layout home>
                <Head>
                    <title>{settings.getSiteTitle()}</title>
                </Head>
                <section className={utilStyles.headingMd}>
                    <h1>Hello everyone!</h1>
                    <p>
                        (This is a simple website)
                    </p>
                    <Link href='/'>Back to beautiful page! </Link>
                </section>
            </Layout>
        </>
    )
}