const Portfolio = (() => {

    let UIElements = {
      buzzContainer: document.getElementById('fizzbuzz'),
      dumbContainer: document.getElementById('dumbContainer')
    }
  
    let dumbStuff = [
      {
        title: 'HTML_CSS',
        description: 'Nackademin course Project where create a single page website using html & css',
        liveURL:'https://github.com/marufkhan01/HTML-CSS_SASS-GroupAssignment'
      },
      {
        title: 'Javascript',
        description: 'Nackademin course Project',
        liveURL: 'https://github.com/marufkhan01/To-Do-List'
      },
      {
        title: 'PHP-MYSQL',
        description: 'Nackademin course project where create a blog',
        liveURL: 'https://github.com/marufkhan01/PHP-Blog'
      },
      {
        title: 'React web Project',
        description: 'K-mit trainee project where update k-mit website using react  ',
        liveURL: 'https://github.com/marufkhan01/web-application-react'
      },
      {
        title: 'React Project',
        description: 'Qlocx trainee Project where update qlocx website using react ',
        liveURL: 'https://github.com/marufkhan01/react-web-app'
      },
      {
        title: 'React Testing Project',
        description: 'Nackademin course project where using react testing',
        liveURL: 'https://github.com/marufkhan01/offline_forum'
      },
      {
        title: 'D3-pie chart ',
        description: 'K-mit trainee project where crete a pie-chart using D3 programming',
        liveURL: 'https://github.com/marufkhan01/D3-pie-chart'
  
      },
      {
          title: 'collibay',
          description:'Hobby fullstack project where using React Express React, Redux (MERN)',
          liveURL: 'https://github.com/marufkhan01/collibay'
      },

      {
          title:'chat_app',
          description:'Hobby project where using react and firebase',
          liveURL:'https://github.com/marufkhan01/chat_app'
      }
      
    ]
  
    let fizzbuzz = [
      "react",
      "git",
      "node",
      "mongodb",
      "html",
      "css",
      "javascript",
      "wordpress",
      "php",
      "sql",
      "redux",
      "sass",
      "photoshop",
      "illustrator",
      "sketch",
      "testing",
      "firebase",
    ]
    
    function generateRandomColor(colorRange = 1) {
      let colorNumber = Math.floor(Math.random() * 999)
      return `hsl(${(colorNumber * (360 / colorRange) % 360)}, 50%, 60%)`
    }
  
    function getRandomNumberBetween(min, max) {
      return (Math.floor((Math.random() * (max - min) + 1) + min))
    }
  
    function generateRandomPosition() {
      let offset = 56
      let parentHeight = UIElements.buzzContainer.clientHeight - offset
      let parentWidth = UIElements.buzzContainer.clientWidth - offset
      let x = getRandomNumberBetween(0, parentHeight)
      let y = getRandomNumberBetween(0, parentWidth)
      return [x, y]
    }
  
    function shuffle(sortedArray) {
      for (let c = sortedArray.length - 1; c > 0; c--) {
        let b = Math.floor(Math.random() * (c + 1))
        let a = sortedArray[c]
        sortedArray[c] = sortedArray[b]
        sortedArray[b] = a
      }
      return sortedArray
    };
  
    function generateWordCloudWords() {
      return shuffle(fizzbuzz)
        .reduce((output, item) => {
          return output += `
          <p style="
            background-color: ${generateRandomColor(10)};
            color: white;
          ">
            ${item}
          </p>`
        }, '')
    }
  
    function generateProjectList() {
      return shuffle(dumbStuff)
        .reduce((output, item) => {
          return output += `
          <div>
            <p><strong>${item.title}</strong></p>
            <p><em>${item.description}</em></p>
            <div>
              <a href="${item.liveURL}">Project Link</a>
  
            </div>
          </div>
        `
        }, '')
    }
  
    function append(el, html) {
      el.insertAdjacentHTML('beforeend', html)
    }
  
    function init() {
      append(UIElements.buzzContainer, generateWordCloudWords())
      append(UIElements.dumbContainer, generateProjectList())
    }
    return {
      init
    }
  })();
  
  Portfolio.init()
  
  
  
  