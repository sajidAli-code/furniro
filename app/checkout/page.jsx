import Checkout from "@/components/Checkout"
import Features from "@/components/Features"
import PageRoute from "@/components/PageRoute"

const page = () => {
    return (
        <>
            <PageRoute
                activePage={'Checkout'}
            />
            <Checkout />
            <Features />
        </>
    )
}

export default page