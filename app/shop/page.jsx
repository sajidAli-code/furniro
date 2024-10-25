import Features from '@/components/Features'
import PageRoute from '@/components/PageRoute'
import ProductInShop from '@/components/ProductInShop'
import React from 'react'

const page = () => {
    return (
        <>
            <PageRoute
                activePage={'Shop'}
            />
            <ProductInShop />
            <Features />
        </>
    )
}

export default page