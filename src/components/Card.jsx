import React,{useState} from 'react'

function card({cart,setCart}) {
    let[toggle,settoggle]=useState(true)
  return <>
   <div className="col mb-5">
              <div className="card h-100">
              <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                  <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                  <div className="card-body p-4">
                      <div className="text-center">
                        <h5 className="fw-bolder">sale Item</h5>
                        <span className="text-muted text-decoration-line-through">$50.00</span>
              $25.00
                      </div>
                  </div>
                 
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  {
                    toggle?<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                        setCart(cart+1)
                        settoggle(false)
                        }}>
              Add to cart
            </button>:<button className="btn btn-outline-dark mt-auto" onClick={()=>{
                        setCart(cart-1)
                        settoggle(true)
                        }}>
              Remove from cart
            </button>
            }
            </div>
                  </div>
              </div>
        
         
          </>
}

export default card