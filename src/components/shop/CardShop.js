import React from 'react';
import StarRatingComponent from 'react-star-rating-component';



export const CardShop = ({data}) => {
  return (
      
      <>
      
           <div className="row row-cols-1 row-cols-md-3 g-4">
           
                 {  
                     data.map( (item) => 
                        <div className="col" key={item.id}>
                            <div className="card h-100">
                            <div className='crop'> 
                                <img src={item.image}  alt="..." />
                            </div>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <div className='price-rater'> 
                                   <div className='price'> 
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
                                <a href="#" className="btn btn-dark agregar margin10">Adicionar</a>
                            </div>
                        </div>
                    )
                 }
            </div>
      </>
  )
};
