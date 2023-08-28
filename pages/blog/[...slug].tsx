import { useRouter } from "next/router"

function BlogPostsPage() {
    const router = useRouter();

    console.log(router)
    return <div>
        <h1>The blog Posts</h1>
    </div>
}

export default BlogPostsPage