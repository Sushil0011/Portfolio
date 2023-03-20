import React from 'react'
import '../styles/timeline.css'
import data from './data';
const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timeline_box">
      {
        data.map((item,index)=>(
        <Timelineitem heading={item.title}
        text={item.date}

        index={index}
        key={item.title}/>
        ))
      }
      </div>


    </div>
  )
}

const Timelineitem = ({heading, text, index}) => (
  <div className={`timeline_item  ${
    index%2===0 ? "lefttimeline":"righttimeline"
  }`}
  >

<div>
<h3>{heading}</h3>
<p>{text}</p>
</div>


  </div>

)




export default Timeline;