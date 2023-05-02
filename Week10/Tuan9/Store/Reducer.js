import PRODUCTS from '../Data/Products';



const initialState = {
    products: PRODUCTS,
    favProducts: [],
    filteredProducts: PRODUCTS
}

const reducer = (state = initialState, action) => {

    if(action.type === 'THEM_VAO_YEU_THICH'){
       const index = state.favProducts.findIndex(product => product.id === action.productId)

       if(index >= 0){
        const copy = [...state.favProducts]
        copy.splice(index, 1)
       

        return { ...state, favProducts: copy}

       }

       else{


        const product = state.products.find(product => product.id === action.productId)


        let copy = [...state.favProducts]
   
        copy = copy.concat(product)
       

        return { ...state, favProducts: copy}

       }

    }

    if(action.type === 'LOC_SAN_PHAM'){
        const filters = action.filters
        const products = state.products.filter(product => 
            {
                if(product.isBrand != filters.isBrandNew){
                    return false
                }
                if(product.isSale != filters.isSale){
                    return false
                }
                return true
            }
            )

            return {...state, filteredProducts: products}

    }
    

    return state
}

export default reducer;