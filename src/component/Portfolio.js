import React ,{ useState} from 'react';
import PageHeaderContent from './PageHeaderContent/PageHeaderContent';
import {BsInfoCircleFill} from 'react-icons/bs';
import ImageOne from './images/foodOrder.jpg';
import ImageTwo from './images/weatherImage.jpg';
import ImageThree from './images/coffee2a.jpg';
import ImageFour from './images/cursionB.jpg';
import classes from './Portfolio.module.css';


const portfolioData = [
    {
    id: 2,
    name: 'Food Order App',
    image: ImageOne,
    link:'https://amazing-kheer-661004.netlify.app',
},
{
    id: 2,
    name: 'Weather App',
    image: ImageTwo,
    link: 'https://verdant-rugelach-a37cee.netlify.app'
},
{
    id: 3,
    name: 'Coffee shop Design',
    image: ImageThree,
    link: 'https://sparkly-taffy-84748f.netlify.app'
},
{
    id: 3,
    name: 'Furniture Design',
    image: ImageFour,
    link: 'https://stalwart-melomakarona-401fc5.netlify.app'
}

];

const filterData = [
    {
        filterId: 1,
        label: 'All'
    },
    {
        filterId: 2,
        label: 'Development'
    },
    {
        filterId: 3,
        label: 'Design'
    }
]

const Portfolio = () => {

    const[filteredValue, setFilteredValue] = useState(1);
    const[hoveredValue, setHoveredValue] = useState(null)

    function handleFilter(currentId){
        setFilteredValue(currentId);
    }

    console.log(filteredValue);

    function handleHover (index) {
         setHoveredValue(index)
    }
    console.log(hoveredValue)

    const filteredItems = filteredValue === 1 ? portfolioData : portfolioData.filter((item) => item.id === filteredValue);
    console.log(filteredItems)
return(
     <section id='portfolio' className='portfolio'>
        <PageHeaderContent
        headerText = 'Portfolio'
        icon = {<BsInfoCircleFill  size={40} />}
        />

        <div className={classes['portfolio-content']}>
            <ul className={classes['portfolio-filter']}>
                {
                    filterData.map((item) => (
                        <li className={item.filterId === filteredValue ? `${classes.active}` : ''} onClick={() => handleFilter(item.filterId)} key={item.filterId}>
                                {item.label}
                            </li>
                    ) )}
            </ul>
            <div className={classes['portfolio-cards']}>
                    {
                        filteredItems.map((item, index) =>(
                            <div className={classes['portfolio-cards-item']} key={`cardItem${item.name.trim()}`}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}>
                                <div className={classes.imgWrapper}>
                                    <div>
                                        
                                         <img src={item.image} alt= 'A Cart'/> 
                                    </div>
                                </div>
                                <div className={classes.overlay}>
                                    {index === hoveredValue && (<div>
                                        <p>{item.name}</p>
                                       
                                         <a href={item.link} target="_blank" rel="noreferrer"><button>Visit</button></a>
                                    </div>)}
                                </div>
                                
                            </div>

                            
                        ))
                    }
            </div>
        </div>



    </section>
)
}

export default Portfolio;