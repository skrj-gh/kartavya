"use client"

function getCards(){
    const data = [
      {
        "id": "1",
        "name": "AIKYAM",
        "partner": "Partner",
        "img": "/lakme.jpg"
      },
      {
        "id": "2",
        "name": "MANSHAKTI",
        "partner": "Partner",
        "img": "/pumaa.jpg"
  
      },
      {
        "id": "3",
        "name": "SAFHER",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "4",
        "name": "PRITHVI",
        "partner": "Partner",
        "img": "/pumaa.jpg"
  
      },
      {
        "id": "5",
        "name": "NORTHEAST UNVEILED",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "6",
        "name": "UDAAN",
        "partner": "Partner",
        "img": "/pumaa.jpg"
      },
      {
        "id": "7",
        "name": "NORTHEAST UNVEILED",
        "partner": "Partner",
        "img": "/lakme.jpg"
  
      },
      {
        "id": "8",
        "name": "UDAAN",
        "partner": "Partner",
        "img": "/pumaa.jpg"
      }
    ]
    return data;
}

export default function CardList() {
    let sponsor_card = getCards();
    var sectionStyle = {
        width: "100%",
    };
  return (
    <>
        {sponsor_card.map((card)=>(
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
