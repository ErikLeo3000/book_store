import React from 'react'
import Image from 'next/image'

const Book_list = () => {
  return (
    <section className="book-list">
              <div className="book-card" role="article">
                  <Image 
                      src="/bradd_pit.jpg" // Ruta absoluta desde la carpeta public
                      alt="The Republic" 
                      className="book-image" 
                      width={200} 
                      height={300} 
                  />
                  <h3 className="book-title">The Republic</h3>
                  <p className="book-author">By Plato</p>
                  <p className="book-price">₹285</p>
                  <button className="btn buy-btn">Buy</button>
              </div>
          </section>
  )
}

export default Book_list