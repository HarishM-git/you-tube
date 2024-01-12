const videos=[
  {
  image: 'images/im1.png',
  timeinfo:'14:60',
  channelimg:'images/cha1.png',
  title:'How to make online Money',
  creator:'Marquee brownlee',
  views:'1.8M views . 2 hours ago'

},
{
  image: 'images/im2.png',
  timeinfo:'18:50',
  channelimg:'images/cha2.png',
  title:'Dont laugh challenge with my Friends',
  creator:'Comedy_guys',
  views:'867k views . 6 hours ago'
},
{
  image: 'images/im3.png',
  timeinfo:'15:16',
  channelimg:'images/cha3.png',
  title:'Why planes dont fly high',
  creator:'Aero_space',
  views:'3M views . 13 days ago'
},
{
  image: 'images/im4.png',
  timeinfo:'19:17',
  channelimg:'images/cha4.png',
  title:'Kadanes Algorithm',
  creator:'Algo_engineering',
  views:'3.9M views . 1year ago'
},
{
  image: 'images/im5.png',
  timeinfo:'8:51',
  channelimg:'images/cha6.png',
  title:'How to find a Business Idea?',
  creator:'Business_guru',
  views:'368k views . 18 hours ago'
},
{
  image: 'images/im6.png',
  timeinfo:'7:54',
  channelimg:'images/cha16.png',
  title:'Best 7 Goals in Football History',
  creator:'Goal_fall',
  views:'336k views . 2 hours ago'
},
{
  image: 'images/im7.png',
  timeinfo:'9:53',
  channelimg:'images/cha5.png',
  title:'New york Tour',
  creator:'explores',
  views:'784k views . 8 days ago'
},
{
  image: 'images/im8.png',
  timeinfo:'11:00',
  channelimg:'images/cha8.png',
  title:'Urban outfit',
  creator:'Fashion_tamil',
  views:'86k views . 10 days ago'
},
{
  image: 'images/im9.png',
  timeinfo:'12:60',
  channelimg:'images/cha9.png',
  title:'Control your emotionsy',
  creator:'Gym_bros',
  views:'15M views . 5 hours ago'
},
{
  image: 'images/im10.png',
  timeinfo:'13:40',
  channelimg:'images/cha10.png',
  title:'Want to be a Chef?',
  creator:'Samayal_kit',
  views:'888k views . 6 days ago'
},
{
  image: 'images/im11.png',
  timeinfo:'17:30',
  channelimg:'images/cha11.png',
  title:'Submarine experience!',
  creator:'Aqua_eye',
  views:'894k views . 7 days ago'
},
{
  image: 'images/im12.png',
  timeinfo:'18:46',
  channelimg:'images/cha7.png',
  title:'What would happen if you didnt drink enough Water',
  creator:'Almost-Everything',
  views:'1.5M views . 1 year ago'
}]

let html=''
videos.forEach((video)=>{
  html+=`
  <div class="container">
   
      <div class="in">
        <img class="imag"src="${video.image}" alt="suma">
        
        <div class="time-info">
          ${video.timeinfo}
        </div>
        
      </div>
      
      <div class="video-info-grid">
        <div class="channel-image">
          <img src="${video.channelimg}" class="channel-img" alt="channel-image">
          
        </div>
        <div class="texts">
          <div class="parag">${video.title}</div>
          <p>${video.creator}</p>
          <p>${video.views}</p>
        
          
        </div>
      </div>
      
    
    </div>`

})
console.log(html);
document.querySelector('.js-automatic').innerHTML=html;