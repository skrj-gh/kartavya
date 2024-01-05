// import small_card from '../resources/small_card.png'
// import small_card from '@/app/kartavya/resources/small_card.png'


async function getCards(){
    const res = await fetch('http://localhost:4000/cards', {
        next: {
            revalidate: 3600 //use 0 to opt out of using cache
        }
    })

    return res.json()
}

export default async function CardList() {
    const flip_cards = await getCards();
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
                <div className="front" style={{sectionStyle, backgroundImage:`${card.img}`}}>
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
