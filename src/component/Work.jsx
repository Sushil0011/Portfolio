import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './../styles/work.css'
import data from './data'
const Work = () => {
  // console.log(data);
  return (
    <div id='work'>
        <h2>Projects</h2>
<section className='project_con'>
    <article>

        <Carousel
        showArrows={false}
        showInicators={false}
        showStatus={false}
        showThumbs={false}
        interval={2000}
        infiniteLoop={true}
        autoPlay={true}
        >
            {
              data.map((item,index)=>{
                return(  
                  <div  key={index} className='projects'>
                    <img src={item.img} alt=""/>
                    <aside>
                  <p>{item.title}</p>
                  
                  <h4>{item.description}</h4>
                  <a href={item.url}  target="blank"> View Projects</a>
                  </aside>
                  </div>
                )
              })
            }

        </Carousel>

    
    </article>
</section>


        </div>
  )
}

export default Work