/* 
import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null)
  const [products, setProducts] = useState([])

  const [pageNo, setPageNo] = useState(1);
 
  const fetchProducts = async()=>{
    try {
      setIsLoading(true)
      setIsError(false);
      const res = await fetch(`https://dummyjson.com/products?limit=100`)
      const data = await res.json();
      // console.log(data?.products)
  
      if(data && data.products){
        setProducts(data.products)
      }
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts();
  },[])

  const selectPageHandler = (selectedPage)=>{
    // we need to handle ◀ and ▶ as well so
    if(selectedPage >=1 && selectedPage <= products.length/10 && selectedPage != pageNo){
      setPageNo(selectedPage)
    }

  }

  if(isLoading){
    return <h3 style={{textAlign: "center"}}>Loading...</h3>
  }
  if(isError){
    return <h3 style={{textAlign: "center"}}>Error : {isError}</h3>
  }

  return (
    <div className='app'>
      <h1 className='heading'>Pagination</h1>
        {
            products.length > 0 && (

              <div className='products'>
                  {
                    products.slice(pageNo * 10 - 10, pageNo * 10).map((product)=>{
                      return(
                        <div key={product.id} className='product'>
                          <img src={product.thumbnail} alt={product.title} />
                          <span>{product.id}</span>
                        </div>
                      )
                    })
                  }
              </div>

            )
        }

        {
          products.length > 0 && (
            <div className="pagination">
              <span onClick={()=>selectPageHandler(pageNo - 1)}
                className={pageNo > 1 ? " " : 'disabled_pagination'}
              >
                ◀
                </span>
              {
                [...Array(products.length / 10)].map((_,i)=>{
                  return(
                    <span key={i} onClick={()=>selectPageHandler(i+1)}    // i+1  bcz i start from 0
                      className={pageNo === i+1 ? "active": ""}
                    >
                      {i+1}
                    </span>
                  )
                })
              }
              <span onClick={()=>selectPageHandler(pageNo + 1)} 
                className={pageNo < products.length/10 ? " " : 'disabled_pagination'}
              >
                ▶
              </span>
            </div>
          )
        }

    </div>
  )
}

export default App
 */




import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null)
  const [products, setProducts] = useState([])

  const [pageNo, setPageNo] = useState(1);

  const [totalPages, setTotalPages] = useState(0);
  // console.log('totalPages',totalPages)  // 10
 
  const fetchProducts = async()=>{
    try {
      setIsLoading(true)
      setIsError(false);
      const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${pageNo * 10 - 10}`)
      const data = await res.json();
      // console.log('data', data)
  
      if(data && data.products){
        setProducts(data.products);
        setTotalPages(data.total/10);
      }
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message)
      setIsLoading(false)
    }
  }

  useEffect(()=>{
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[pageNo])

  const selectPageHandler = (selectedPage)=>{
    // we need to handle ◀ and ▶ as well so
    if(selectedPage >=1 && selectedPage <= totalPages && selectedPage != pageNo){
      setPageNo(selectedPage)
    }

  }

  if(isLoading){
    return <h3 style={{textAlign: "center"}}>Loading...</h3>
  }
  if(isError){
    return <h3 style={{textAlign: "center"}}>Error : {isError}</h3>
  }

  return (
    <div className='app'>
      <h1 className='heading'>Pagination</h1>
        {
            products.length > 0 && (

              <div className='products'>
                  {
                    products.map((product)=>{
                      return(
                        <div key={product.id} className='product'>
                          <img src={product.thumbnail} alt={product.title} />
                          <span>{product.id}</span>
                        </div>
                      )
                    })
                  }
              </div>

            )
        }

        {
          products.length > 0 && (
            <div className="pagination">
              <span onClick={()=>selectPageHandler(pageNo - 1)}
                className={pageNo > 1 ? " " : 'disabled_pagination'}
              >
                ◀
                </span>
              {
                [...Array(totalPages)].map((_,i)=>{
                  return(
                    <span key={i} onClick={()=>selectPageHandler(i+1)}    // i+1  bcz i start from 0
                      className={pageNo === i+1 ? "active": ""}
                    >
                      {i+1}
                    </span>
                  )
                })
              }
              <span onClick={()=>selectPageHandler(pageNo + 1)} 
                className={pageNo < totalPages ? " " : 'disabled_pagination'}
              >
                ▶
              </span>
            </div>
          )
        }

    </div>
  )
}

export default App
