import './pagination.css';

export default function Pagination({gamePerPage, allGames, pagination,currentPage}){
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(allGames/gamePerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav>
            <ul className='crumbs'>
                {
                    pageNumbers &&
                    pageNumbers.map((number)=>(
                        <li className='number' key={number}>
                            <div 
                              className={currentPage === number ? 'crumb__active' : 'crumb'}
                              onClick={()=>pagination(number)}
                            >
                                {number}
                            </div>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}