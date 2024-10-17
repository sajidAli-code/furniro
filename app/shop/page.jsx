import Features from '@/components/Features'
import FilterBar from '@/components/FilterBar'
import PageRoute from '@/components/PageRoute'
import ProductInShop from '@/components/ProductInShop'
import React from 'react'

const page = () => {
    return (
        <>
            <PageRoute />
            <FilterBar />
            <ProductInShop />
            <Features />
        </>
    )
}

export default page