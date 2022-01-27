import React from 'react';

export const CardShop = ({data}) => {
  return (
      <>
           <div className="row row-cols-1 row-cols-md-3 g-4">

                 {  
                     data.map( (item) => 
                        <div className="col" key={item.id}>
                            <div className="card h-100">
                            <img src={item.image} className="card-img-top img-same-size-card" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                </div>
                                <a href="#" className="btn btn-dark margin10">Adicionar</a>
                            </div>
                        </div>
                    )
                 }
            </div>
      </>
  )
};
