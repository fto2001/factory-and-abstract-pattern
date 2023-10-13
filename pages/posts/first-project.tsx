import Head from "next/head"
import Layout, { siteTitle } from "@/components/layout"
import utilStyles from '@/components/utils.module.css';
import settings from "@/components/settingsSingleton";
import Link from "next/link";
import { getSortedPostData } from "@/lib/post";
import "/styles/global.css";
import Date from "@/components/date";

interface PostData {
    id: string;
    title: string;
    date: string;
    contentHtml: string;
}

export async function getStaticProps() {
    const allPostData = await getSortedPostData();

    return {
        props: {
            allPostData,
        }
    }
}

export default function FirstPost({ allPostData }: { allPostData: PostData[] }) {
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
                </section>
                <ul className={utilStyles.list}>
                    {allPostData.map(({ id, title, date, contentHtml }) =>
                        <li className={utilStyles.listItem} key={id}>
                            {title}
                            <br />
                            {id}
                            <br />
                            <div className={utilStyles.lightText}>
                                <small><Date dateString={date} /></small>
                            </div>
                            <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
                        </li>
                    )}
                </ul>
                <Link href='/'>Back to beautiful page! </Link>
            </Layout>
        </>
    )
}