import { useLocation } from "react-router-dom"

function Products() {
    const {search} = useLocation()
    const queryParams = new URLSearchParams(search)

    const pagination = {
        'page' : queryParams.get('page'),
        'limit' : queryParams.get('limit')
    }

    return (
        <>
            <h1>PRODUCTS</h1>
            <p>Page : {pagination.page}</p>
            <p>Limit : {pagination.limit}</p>
        </>
    )
}

export default Products