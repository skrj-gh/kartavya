import Image from 'next/image'
import ListItem from './list'
import hand_upper from './resources/hand_upper.png'
import hand_lower from './resources/hand_lower.png'
import stars from './resources/stars.png'
import small_card from './resources/small_card.png'

export default function Home() {
  
  var sectionStyle = {
    width: "100%",
    height: "calc((970/772)*24.667vw)",
    // margin: "8vh 0",
    backgroundImage: "url(" + { small_card } + ")",
  };
  return (
    <main>

      <div className='hand_upper'>
        <Image
          src={hand_upper}
          alt="upper hand"
          style={{
            width: '100%',
            height: 'auto'
          }}
          quality={100}
          placeholder='blur'
        />
      </div>
      <h1 className="head">KARTAVYA</h1>
      <h3 className="detail1">"Act as if what you do makes a difference. It does"</h3>
      <div className="large_card">
        <div className='stars1'>
          <Image
            src={stars}
            alt="upper hand"
            style={{
              width: '5vw',
              height: 'auto',
              float: 'right',
            }}
            quality={100}
            placeholder='blur'
          />
        </div>
        <h4>SANRAKSHAN</h4>
        <div className='stars2'>
          <Image
            src={stars}
            alt="upper hand"
            style={{
              width: '5vw',
              height: 'auto',
              // float: 'right',
            }}
            quality={100}
            placeholder='blur'
          />
        </div>
      </div>
      <section className="cards">

        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>AIKYAM</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>MANSHAKTI</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>SAFHER</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>PRITHVI</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>NORTHEAST UNVEILED</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>


        <div class="col" ontouchstart="this.classList.toggle('hover');">
          <div class="container">
            <div class="front" style={sectionStyle}>
              <div class="inner">
                <p>UDAAN</p>
              </div>
            </div>
            <div class="back">
              <div class="inner">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias cum repellat velit quae suscipit c.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='hand_lower'>
        <Image
            src={hand_lower}
            alt="upper hand"
            style={{
              width: '100%',
              height: 'auto'
            }}
            quality={100}
            placeholder='blur'
          />
      </div>


      <section className='achievements'>
        <div className="head2">
          <h3>Alcher Community</h3>
          <h2>Our Achievements</h2>
        </div>
        <div><hr></hr></div>
        <ListItem></ListItem>        


      </section>


    </main>
  )
}
