import { Metadata } from "next";
import loading from "@/components/loading.module.css";

export default function Loading() {
    return (
        <>
            <div className={loading.container}>
                <div className={loading.loadingio}>
                    <div className={loading.ldio}>
                        <div></div>
                        <div></div>
                        <div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                        </div>
                    </div>
                </div >
            </div>
            <p className={loading.title}>Loading...</p>
        </>
    )
}