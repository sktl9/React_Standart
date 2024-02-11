import './Styles/style.css'


function App() {
  return (
    <div className="App">
      <div className='Main-container'>
        <div className='MySevice-container'>
          <div className='MyService-header'>
           my services
          </div>
          <div className='MyService-description'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum
          </div>
          <div className='myService-block'>
            <div className='myService-block__item'>
              <img src='/icons/myService1.svg'></img>
              <div className='myService-block__title'>web development</div>
              <div className='myService-block__description'>blog, e-commerce</div>
            </div>
            <div className='myService-block__item'>
              <img src='/icons/myService2.svg'></img>
              <div className='myService-block__title'>uI/uX design</div>
              <div className='myService-block__description'>Mobile app, website design</div>
            </div>
            <div className='myService-block__item'>
            <img src='/icons/myService3.svg' style={{height:68}}></img>
            <div className='myService-block__title'>sound design</div>
            <div className='myService-block__description'>Voice Over, Beat Making</div>
            </div>
            <div className='myService-block__item'>
            <img src='/icons/myService4.svg' style={{height:68}}></img>
            <div className='myService-block__title'>game design</div>
            <div className='myService-block__description'>Character Design, Props & Objects</div>
            </div>
            <div className='myService-block__item'>
            <img src='/icons/myService5.svg' style={{height:68}}></img>
            <div className='myService-block__title'>photography</div>
            <div className='myService-block__description'>portrait, product photography</div>
            </div>
            <div className='myService-block__item'>
            <div className='myService-block__title_last'>advertising</div>
            <div className='myService-block__description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </div>
            <a href='/' className='myService-block__href'>ORDER NOW</a>
            </div>

          </div>
        </div>
      </div>
      
    </div>
  );
}

export default App;
