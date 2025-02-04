import React from 'react'

function Carousel() {
  return (
    <>
        <div className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="3000">
                    DESIGNING
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    CREATIVITY
                </div>
                <div className="carousel-item" data-bs-interval="3000">
                    DEVELOPING
                </div>
            </div>
        </div>
    </>
  );
}

export default Carousel