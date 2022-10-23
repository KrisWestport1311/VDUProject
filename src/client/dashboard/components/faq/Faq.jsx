import './faq.scss'

import {RiArtboardLine, RiCustomerService2Line, RiCursorLine} from 'react-icons/ri'
import {IoMdArrowForward} from 'react-icons/io'

export default function FAQ() {

const faqs = [

  {
    icon: <RiArtboardLine />,
    text: "Log into our digital system and complete digital assessment",
  },

  {
    icon: <RiCustomerService2Line />,
    text: "30 minute online consultation with our ergonomics expert",
  },

  {
    icon: <RiCursorLine />,
    text: "Reporting and analytics across your employee base with a breakdown of data",
  },

];

  return (
    <div className="faq_container">
      <div className="title">
        <h2>Information about VDU Assessments</h2>
      </div>

      <div className="faqs">
          {faqs.map((faq)=>{
            
            return (
            <div className="faq">
                <div className="info">
                {faq.icon}
                <h4>   {faq.text}</h4>
                </div>
                <IoMdArrowForward />
            </div>

            )
          
          })}
      
      </div>

    </div>
  )
}

