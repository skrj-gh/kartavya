import "./components/sponsor.css"
import design from './resources/design.png'
import SponsorList from "./components/sponsor_list"
import gucci from './resources/gucci.png'
import Image from "next/image";




function App () {
  const image=[
    gucci
  ];
  return (
    <>
    <main>
      
      <div className="top_sun">
      </div>

      <section className="no_sponsor">
        <div className="coming_soon">
          <h2>Coming Soon</h2>
          <h5>Stay tuned, sponsors are on the horizon!</h5>
        </div>
      </section>

      <section className="after_sponsor">
        <div className="App">
          <h1>We Have Worked With</h1>
      
          <div className="title">
            <h1> TITLE SPONSOR </h1>
            <div className="titlesponsorimg">
              <Image 
                src={design} 
                alt="design" 
                id="design"
                style={{
                  width: '36.3vw',
                  height: '11.2vw',
                  position: "absolute",
                  zIndex: '1',
                  right: '31vw',
                }}
              />
              <div className='card_shadowt'>
                <div className='cardt'>
                  <div className='imagecardt'>
                    {/* background image */}
                  </div>
                </div>
              </div> 
            </div>
          </div>

          <div className="cotitle">
            <h1> CO-TITLE SPONSOR </h1> 
            <div className="cotitlesponsorimg">
              <Image 
                src={design} 
                alt="design"
                id="designct" 
                style={{
                  width: '36.3vw',
                  height: '11.2vw',
                  position: "absolute",
                  zIndex: '1',
                  right: '30.5vw',
                }}
              />
              <div className='card_shadowct'>
                <div className='cardct'>
                  <div className='imagecardct'>
                    {/* background image */}
                  </div>
                </div>
              </div> 
            </div>
          </div>


          <div className='powered'>
            <h1> POWERED BY</h1>
          </div>
          <div className='poweredimg'>
          </div>
          
          <div className='sponsorfooter'>
            <div className="heading2">Media Sponsors</div>
            <div className="sponsors">
              <SponsorList></SponsorList>  
            </div>
          </div>

        </div>
      </section>
      
    </main>
    </>
  );
  
};
export default App;