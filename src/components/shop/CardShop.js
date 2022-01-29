import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { useStorage } from '../../hooks/useStorage';



export const CardShop = ({data}) => {

    
    const { adicionarLocaStorage } = useStorage();
    
    const handleClick = (event) => {
          
          let element = event.target.parentElement;
          
          let code =  element.getAttribute('attr-identifier')
          let imagen = element.querySelector('.crop > img').src;
          let name =  element.querySelector('.card-title').getAttribute('attr-name');
          let price = element.querySelector('.price-rater .price').getAttribute('attr-price')
         
          let obj = {  
              code,
              imagen,
              name,
              price,
          }

          
          adicionarLocaStorage(obj)
    }

  return (
      
      <>
      
           <div className="row row-cols-1 row-cols-md-3 g-4">
           
                 {  
                     data.map( (item) => 
                        <div className="col" key={item.id}  >
                            <div className="card h-100" attr-identifier={item.id}>
                            <div className='crop'> 
                                <img src={item.image}  alt="..." />
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title" attr-name={item.title}>{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <div className='price-rater'> 
                                   <div className='price' attr-price={item.price}> 
                                          ${item.price}
                                   </div>
                                   <div> 
                                  
                                   <StarRatingComponent 
                                        name="rate1" 
                                        starCount={5}
                                        value={ item.rating.rate }
                                        onStarClick={ () => console.log('hhh')}
                                    />
                                            
                                   </div>
                                </div>
                                <button  className="btn btn-dark agregar margin10" onClick={ handleClick }>Adicionar</button>
                            </div>
                        </div>
                    )
                 }
            </div>
      </>
  )
};
