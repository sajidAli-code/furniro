import Cart from "@/components/Cart"
import Features from "@/components/Features"
import PageRoute from "@/components/PageRoute"

const page = () => {
    return (
        <>
            <PageRoute
                activePage={'Cart'}
            />
            <Cart />
            <Features />
        </>
    )
}

export default page