import React, {useState, useEffect} from 'react';
import './Pagination.css';

const Pagination = ({ totalPages, paginate, setCurrentPage, currentPage }) => {
    const [maxNumbers, setMaxNumbers] = useState(9);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setMaxNumbers(3);
            } else {
                setMaxNumbers(9);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    let pages = [];
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
        }
    
    let pageNumbers = () => {
        const half = Math.round(maxNumbers / 2);
        let to = maxNumbers;
        if (currentPage + half >= totalPages) {
            to = totalPages;
        } else if (currentPage > half) {
            to = currentPage + half;
        }
        let from = to - maxNumbers;
        if (from < 0) {
            from = 0;
        }
        return pages.slice(from, to);
    };


    return (
        <div className='pagination'>
            {currentPage > 1 && (
                <button key='Previous' onClick={() => paginate(-1)}>
                    Prev
                </button>
            )}
            {pageNumbers().map((number) => (
                <button key={number} onClick={() => setCurrentPage(number)} className = {number === currentPage ? 'active' : ''}>
                    {number}
                </button>
            ))}
            {currentPage !== totalPages && (
                <button key='Next' onClick={() => paginate(1)}>
                    Next
                </button>
          )}
        </div>
    )
}

export default Pagination