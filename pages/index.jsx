import Head from "next/head";
import { PostCard, PostWidget, Categories } from "../components";

const posts = [
    { title: "React Testing", excerpt: "Learn React Testing" },
    { title: "React with Tailwind", excerpt: "Learn React with Tailwind" },
];

export default function Home() {
    return (
        <div className="container px-10 mx-auto mb-8">
            <Head>
                <title>CMS</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8 col-span-1">
                    {posts &&
                        posts.map((post) => (
                            <div key={post.title}>
                                <PostCard post={post} key={post.title} />
                            </div>
                        ))}
                </div>
                <div className="lg:col-span-4 col-span-1">
                    <div className="relative lg:sticky top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div>
            </div>
        </div>
    );
 }
