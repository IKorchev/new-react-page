import React from 'react'

const Backtotop = () => {
    
    const backToTop = () => {
        window.scrollTo(0,0)
    }

    return (
        <div id="backtotopButton" className="mb-3 p-1">
            <i class="fas fa-arrow-up fa-lg" onClick={backToTop}></i>
        </div>
    )
}

export default Backtotop
