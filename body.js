const body = function(){


    const render = function(){
      return  `<div class="first-page" id="firstpage">
      <nav>
        <ul>
          <li><a href="#bio" class="bio">BIO</a></li>
          <li><a href="#portfolio" class="portfolio">PORTFOLIO</a></li>
          <li><a href="#contact" class="contact">CONTACT</a></li>
          <li><a href="https://github.com/MatthewWillard/" target="_blank">GITHUB</a></li>
        </ul>
      </nav> 
        <div class="homepage-info">
          <h1> Matthew Willard </h1>
          <h2>{ Web Developer }</h2>
          
            
    </div>
    <a href="#bio" class="scroll-reminder"><h4>SCROLL DOWN</h4></a>
        </div>
      
    </div>
          <section class="body-section"id="bio">
              <h2>BIO</h2>
              <div class=bio-body>
                <section class="about-me">
                  <h3>About Me</h3>
                  <div class= "about-me-essay">
                    <p> Hi, I’m Matthew. I’m a web developer based in the Salt Lake City, Utah area. I love sports, movies, music, and all things tech.  I’m currently trying to expand my knowledge of HTML, CSS, Javascript, Jquery, React, Express, Node.js, and PostgreSQL. I love coding because it allows me to express my creativity and it appeals to my desire to solve problems. </p>
                    <p>  </p>
                    <p>I spent over five years of my life managing the cleanliness of a recreation center so I’m sort of a neat freak. I also love woodworking with dreams of making a rocking chair and canoe one day.
                    </p>
                  </div>
                </section>
              </div>
                    
          </section>
          <section class="body-section" id="portfolio">
              <h2>PORTFOLIO</h2>
            
              <h3>Projects</h3>
              <div class="portfolio-body">
               <section class="quiz-app-main"> 
                 <h4>Quiz App</h4>
                 <div class="quiz-app-body">
                  <p>
                  An app for managers to track the trainings of their employees. Login required, create account or use Username: Demo - Password: Password0! Built with HTML, CSS, React, Node.js, PostgreSQL, and Express.js.
                  </p>
                  <iframe id="quiz-app-iframe"
                      title="quiz app"
                      src="https://trainingtracker.mwillard.now.sh/">
                  </iframe>
                  <h5><a href="https://trainingtracker.mwillard.now.sh/">click here to view project</a></h5>
                  <h5><a href="https://github.com/MatthewWillard/training-tracker">click here to view repo</a></h5>
                 </div>
              </section>
              <section class="bookmark-app-main"> 
                <h4>Bookmark App</h4>
                <div class="bookmark-app-body">
                 <p>
                 A sports news app that gives you all the latest NFL, NHL, and news from ESPN. Login required, create account or use Username: TestName - Password: Password0! Built with HTML, CSS, React, Node.js, PostgreSQL, and Express.js. 
                  </p>
                 <iframe id="bookmark-app-iframe"
                     title="bookmark app"
                     src="https://all-for-one-sports.mwillard.now.sh/">
                 </iframe>
                 <h5><a href="https://all-for-one-sports.mwillard.now.sh/">click here to view project</a></h5>
                 <h5><a href="https://github.com/MatthewWillard/all-for-one-sports">click here to view repo</a></h5>
                </div>
             </section>
            </div>
            <div class="portfolio-body">
               <section class="quiz-app-main"> 
                 <h4>Quiz App</h4>
                 <div class="quiz-app-body">
                  <p>
                  My Event Search app is a basic API app that shows you local sporting and musical events in a searched location. The user inputs their location and the most popular events are returned.
                  </p>
                  <iframe id="quiz-app-iframe"
                      title="quiz app"
                      src="https://matthewwillard.github.io/eventSearch/index.html">
                  </iframe> 
                  <h5><a href="https://matthewwillard.github.io/eventSearch/index.html">click here to view project</a></h5>
                  <h5><a href="https://github.com/MatthewWillard/eventSearch">click here to view repo</a></h5>
                 </div>
              </section>
              <section class="bookmark-app-main"> 
                <h4>Bookmark App</h4>
                <div class="bookmark-app-body">
                 <p>
                 My Game of Thrones quiz is a short ten question app. It quizzes you on house sigils and words. After every question accurate feedback is received and at the end of the quiz the user receives an out of 10 score.                  
                  </p>
                 <iframe id="bookmark-app-iframe"
                     title="bookmark app"
                     src="https://matthewwillard.github.io/quiz_app/">
                 </iframe>
                 <h5><a href="https://matthewwillard.github.io/quiz_app/">click here to view project</a></h5>
                 <h5><a href="https://github.com/MatthewWillard/quiz_app">click here to view repo</a></h5>
                </div>
             </section>
            </div>
            </section>
          
          <section class="body-section" id="contact">
              <h2>CONTACT INFO</h2>
              <div class="contact-body">
                <p>If you leave me a message or email I'll get back to you within 24-48 hours</p>
                <ul id="contact-info-list">
                  <li >EMAIL: <a HREF="mailto:mwillard85@gmail.com" target="_blank">  mwillard85@gmail.com</a></li>
                  <li>MOBILE: <a href="tel:+8657127358" target="_blank">  865-712-7358</a></li>
                  <li class="linkedIn"><a href="https://www.linkedin.com/in/matthew-willard/ target="_blank"">LinkedIn</li>
                </ul>
                
                <h5><a href="#firstpage">SCROLL UP</a></h5>
              </div>  
          </section>
          
  </div> 
  `;
    };
    const appendBody = function(){
      $('body').append(render());
    };
    return {
      render,
      appendBody
    };
  }();