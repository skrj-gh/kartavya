import './components/sponsor.css';
import design from "./resources/design.png";

function App () {
  // const image=[
  //   gucci
  // ];
  return (
    <div className="App">

      <h1>We Have Worked With</h1>
     
      <div className="title">
      <h1> TITLE SPONSOR </h1> </div>
      <div className="titlesponsorimg">
      <img id='imgdesign' src={ design} />
      <div className='card_shadowt'>
      <div className='cardt'>
        <div className='imagecardt'>
        </div>
      </div>
    </div> 
      </div>

      <div className="cotitle">
      <h1> CO-TITLE SPONSOR </h1> </div>
      <div className="cotitlesponsorimg">
      <img id='coimgdesign' src={ design} />
      <div className='card_shadowct'>
      <div className='cardct'>
        <div className='imagecardct'>
        </div>
      </div>
    </div> 
      </div>

      <div className='powered'>
       <h1> POWERED BY</h1>
      </div>
      <div className='poweredimg'>
      {/* {image.map((imageUrl,index) => (
            <img key={index} src={imageUrl}  />
          ))} */}
      </div>
      
    <div className='sponsorfooter'>
        
        {/* <div>Media Sponsor</div>
       <div className='sponsor_row'>
       <div className='sponsor_card'>
         <img id='sponsorimage' src = {puma}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div> 
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {lakme}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {puma}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {puma}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        </div>
        <div className='sponsor_row'>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {lakme}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {puma}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {lakme}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        <div className='sponsor_card'>
         <img id='sponsorimage' src = {lakme}/>
         <div className='sponsor_name'> Name</div>
         <div className='sponsor_tag'> Partner</div>
        </div>
        </div> */}
    
    </div>

    </div>
  );
  
};
export default App;
