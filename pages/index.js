import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
//import defaultStyles from '../styles/Home.module.css'
import styles from '../styles/main.module.scss'

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Siarune</title>
        <meta name={styles.Description} content="My weird little site." />
        <link rel="icon" href="/hentie.png" />
      </Head>

      <main className={styles.main}>


        <nav className={styles.navbar}>
          <ul className={styles.navbarNav}>

            <li className={styles.navItem, styles.intro}>
              <img className={styles.thumbnail} src="/thumbnails/recolor.png"></img>
              <h2>Siarune</h2>
            </li>

            <li className={styles.navItem}>
              <h2>
                Home
              </h2>
            </li>

            {/* <!-- Dropdown of my other links --> */}
            <li className={styles.navItem, styles.hasDropdown}>
              <h2>
                <a href="#" onClick="reset()">Links</a>
              </h2>
              <ul className={styles.dropdown}>
                <li className="dropdown-item">
                  <a href="https://github.com/Siarune/">Github</a>
                </li>

                <li className={styles.dropdownItem}>
                  <a href="https://siarune.tumblr.com/">Tumblr</a>
                </li>

                <li className={styles.dropdownItem, styles.tooltip}>
                  <a href="#" onClick="copy()">Discord</a>
                  <span id="copy" className={styles.tooltiptext}>Copy ID?</span>
                </li>


              </ul>
            </li>
          </ul>
        </nav>


        <div className={styles.shiny}>

          <ul>
            <li>Welcome to the Idiot Corner!</li>
          </ul>

        </div>


        <div className={styles.grid}>

          <div className={styles.card}>
            <a href="/projects/games/dino.html" className={styles.link}></a>
            {/* <img src="/thumbnails/dino.jpg" className={styles.cover}></img> */}
            <Image src="/thumbnails/dino.jpg" alt="dino" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/dino.html">Dino</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              The classic dinosaur game I ripped.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/progress.html" className="link"></a>
            <img src="/thumbnails/loading.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="/projects/pages/progress.html">Loading Simulator</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              You gotta be super bored for this.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/snake.html" className="link"></a>
            <img src="/thumbnails/snake.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/snake.html">Snake</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Snekkkkk
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/tetris.html" className="link"></a>
            <img src="/thumbnails/tetris.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/tetris.html">Tetris</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Bad janky tetris but still tetris.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/jim.html" className="link"></a>
            <img src="/thumbnails/jimlsd.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/jim.html">Jim</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              You can play it, but you'll hate it as
              much as I do.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/russianroulette.html" className="link"></a>
            <img src="/thumbnails/nyangun.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/russianroulette.html">Russian Roulette</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Made it at like 4am to play in class.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/2048.html" className="link"></a>
            <img src="/thumbnails/2048.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/2048.html">2048</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              classic rage game that I definitely beat.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/flappy.html" className="link"></a>
            <img src="/thumbnails/flappy.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/games/flappy.html">Flappy Box</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Me after the 18th coffee wears off at 5am.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/elmo.html" className="link"></a>
            <img src="/thumbnails/elmo.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/ascii/elmo.html">Elmo</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Applaud your new overlord.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/squidward.html" className="link"></a>
            <img src="/thumbnails/squidward.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/ascii/squidward.html">Squidward</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Our lord and savior.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/deusvult.html" className="link"></a>
            <img src="/thumbnails/deusvult2.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/ascii/deusvult.html">Duesvult</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Chibi knight to the rescue!
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/derp.html" className="link"></a>
            <img src="/thumbnails/derp.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/">Derp</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Derp.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/bible.html" className="link"></a>
            <img src="/thumbnails/biblecrack.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/owo/bible.html">Biblowo</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              Everybody gangsta til Jesus walks in with a shotgun.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/bee.html" className="link"></a>
            <img src="/thumbnails/bee.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/owo/bee.html">Bee</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              Yes, the Bee Movie script. No, I was not high.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/shrek.html" className="link"></a>
            <img src="/thumbnails/shrek.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/owo/shrek.html">Shrek 2</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              You know I had to.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/COMMUNISM.html" className="link"></a>
            <img src="/thumbnails/communist.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/owo/COMMUNISM.html">Communism</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              The Communist Manifesto for Gen-Z trash.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/Constitution.html" className="link"></a>
            <img src="/thumbnails/britain.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/owo/Constitution.html">Constitution</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              I pwedge awwegiance to the fwag...
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/annoying.html" className="link"></a>
            <img src="/thumbnails/annoying.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/pages/annoying.html">Annoying</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              I dont even know, this was like my first webpage.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/dictionary.html" className="link"></a>
            <img src="/thumbnails/urbandict.jpeg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/pages/dictionary.html">Dictionary</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              An incomplete dictionary of weird words I found.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/poetry" className="link"></a>
            <img src="/thumbnails/barney.jpg" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/poetry">Poems</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              Horrible poetry I made or found.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/nuclear.html" className="link"></a>
            <img src="/thumbnails/nuclear.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/pages/nuclear.html">Nuclear</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              *Severe epilepsy warning*
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/bart.html" className="link"></a>
            <img src="/thumbnails/bart.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/pages/bart.html">Bart</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              My very own discord bot... that hates everything.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/lotus.html" className="link"></a>
            <img src="/thumbnails/lotus.png" className="styles.cover"></img>
            <h3 className={styles.Title}><a href="projects/pages/lotus.html">Lotus</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              I don't really know but I think it looks nice.
            </h4>
          </div>

        </div>

      </main>
      <hr></hr>
      <footer className={styles.footer}>

        <h3>
          And more to come! When? I have no idea!
        </h3>

      </footer>
    </div>
  )
}
