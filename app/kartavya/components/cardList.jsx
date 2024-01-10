// import small_card from '@/app/kartavya/resources/small_card.png'

"use client"
import { useState } from "react";

function getCards(){
    const [data, setData] = useState(
        [
          {
            "id": "1",
            "heading": "AIKYAM",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try1.1d4b8e74.jpg"
          },
          {
            "id": "2",
            "heading": "MANSHAKTI",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try2.ce351f66.jpg"
      
          },
          {
            "id": "3",
            "heading": "SAFHER",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try3.9ee11739.jpg"
      
          },
          {
            "id": "4",
            "heading": "PRITHVI",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try4.c7eaa83d.jpg"
      
          },
          {
            "id": "5",
            "heading": "NORTHEAST UNVEILED",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try5.d11b6b80.jpg"
      
          },
          {
            "id": "6",
            "heading": "UDAAN",
            "body": "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.",
            "img": "/_next/static/media/try6.2753b6d4.jpg"
      
          }
        ]
      )

    return data;
}
export default function CardList() {
    // const flip_cards = await getCards();
    let flip_cards = getCards();
    var sectionStyle = {
        width: "100%",
        height: "calc((970/772)*24.667vw)",
    };
  return (
    <>
        {flip_cards.map((card)=>(
        // <div key={card.id} className="col" onTouchStart="this.classList.toggle('hover');">
        <div key={card.id} className="col">
            <div className="container">
                <div className="front" style={{sectionStyle, backgroundImage:`url('${card.img}')`}}>
                    <div className="inner">
                    <p>{card.heading}</p>
                    </div>
                </div>
                <div className="back">
                    <div className="inner">
                    <p>{card.body}</p>
                    </div>
                </div>
            </div>
        </div>
        ))}
    </>
  )
}
