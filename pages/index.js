import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.scss'
// import ScriptTag from 'react-script-tag'

// const copy = () => (
//   <ScriptTag type="text/javascript" src="copy.js" />
//   )

export default function Home() {
  return (
    <div className={styles.main}>
      <Head>
        <title>Siarune</title>
        <meta name={styles.Description} content="My stupid little site" />
        <link rel="icon" href="/thumbnails/recolor.png" />
      </Head>

      <main className={styles.main}>


        <nav className={styles.navbar}>
          <ul className={styles.navbarNav}>

            <li className={styles.navItem, styles.intro}>
              <h2>Siarune</h2>
              {/* <Image src="/thumbnails/recolor.png" alt="chikin" className="styles.thumbnail" width="100" height="100" layout="responsive" ></Image> */}
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
                  <a href="#" >Discord</a>
                  <span className={styles.tooltiptext}>Copy ID?</span>
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
            <Image src="/thumbnails/dino.jpg" alt="dino" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/dino.html">Dino</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              The classic dinosaur game I ripped.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/progress.html" className="link"></a>
            <Image src="/thumbnails/loading.png" alt="loading" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="/projects/pages/progress.html">Loading Simulator</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              You gotta be super bored for this.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/snake.html" className="link"></a>
            <Image src="/thumbnails/snake.png" alt="snake" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/snake.html">Snake</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Snekkkkk
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/tetris.html" className="link"></a>
            <Image src="/thumbnails/tetris.jpg" alt="tetris" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/tetris.html">Tetris</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Bad janky tetris but still tetris.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/jim.html" className="link"></a>
            <Image src="/thumbnails/jimlsd.png" alt="jimlsd" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/jim.html">Jim</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              You can play it, but you&aposll hate it as
              much as I do.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/russianroulette.html" className="link"></a>
            <Image src="/thumbnails/nyangun.png" alt="nyangun" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/russianroulette.html">Russian Roulette</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Made it at like 4am to play in className.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/2048.html" className="link"></a>
            <Image src="/thumbnails/2048.png" alt="2048" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/2048.html">2048</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              classic rage game that I definitely beat.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/games/flappy.html" className="link"></a>
            <Image src="/thumbnails/flappy.jpg" alt="flappy" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/games/flappy.html">Flappy Box</a></h3>
            <h5 className={styles.Tag}>Game</h5>
            <h4 className={styles.Description}>
              Me after the 18th coffee wears off at 5am.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/elmo.html" className="link"></a>
            <Image src="/thumbnails/elmo.jpg" alt="elmo" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/ascii/elmo.html">Elmo</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Applaud your new overlord.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/squidward.html" className="link"></a>
            <Image src="/thumbnails/squidward.jpg" alt="squidward" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/ascii/squidward.html">Squidward</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Our lord and savior.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/deusvult.html" className="link"></a>
            <Image src="/thumbnails/deusvult2.jpg" alt="deusvult" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/ascii/deusvult.html">Duesvult</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Chibi knight to the rescue!
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/ascii/derp.html" className="link"></a>
            <Image src="/thumbnails/derp.jpg" alt="derp" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/">Derp</a></h3>
            <h5 className={styles.Tag}>ASCII Art</h5>
            <h4 className={styles.Description}>
              Derp.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/bible.html" className="link"></a>
            <Image src="/thumbnails/biblecrack.jpg" alt="biblecrack" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/owo/bible.html">Biblowo</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              Everybody gangsta til Jesus walks in with a shotgun.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/bee.html" className="link"></a>
            <Image src="/thumbnails/bee.jpg" alt="bee" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/owo/bee.html">Bee</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              Yes, the Bee Movie script. No, I was not high.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/shrek.html" className="link"></a>
            <Image src="/thumbnails/shrek.jpg" alt="shrek" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/owo/shrek.html">Shrek 2</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              You know I had to.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/COMMUNISM.html" className="link"></a>
            <Image src="/thumbnails/communist.jpg" alt="communist" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/owo/COMMUNISM.html">Communism</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              The Communist Manifesto for Gen-Z trash.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/owo/Constitution.html" className="link"></a>
            <Image src="/thumbnails/britain.jpg" alt="britain" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/owo/Constitution.html">Constitution</a></h3>
            <h5 className={styles.Tag}>OwO</h5>
            <h4 className={styles.Description}>
              I pwedge awwegiance to the fwag...
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/annoying.html" className="link"></a>
            <Image src="/thumbnails/annoying.jpg" alt="annoying" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/annoying.html">Annoying</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              I dont even know, this was like my first webpage.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/dictionary.html" className="link"></a>
            <Image src="/thumbnails/urbandict.jpeg" alt="urbandict" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/dictionary.html">Dictionary</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              An incomplete dictionary of weird words I found.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/poems.html" className="link"></a>
            <Image src="/thumbnails/barney.jpg" alt="barney" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/poems.html">Poems</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              Horrible poetry I made or found.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/nuclear.html" className="link"></a>
            <Image src="/thumbnails/nuclear.png" alt="nuclear" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/nuclear.html">Nuclear</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              *Severe epilepsy warning*
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/bart.html" className="link"></a>
            <Image src="/thumbnails/bart.png" alt="bart" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/bart.html">Bart</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              My very own discord bot... that hates everything.
            </h4>
          </div>

          <div className={styles.card}>
            <a href="/projects/pages/lotus.html" className="link"></a>
            <Image src="/thumbnails/lotus.png" alt="lotus" className={styles.cover} width="100" height="100" layout="responsive" />
            <h3 className={styles.Title}><a href="projects/pages/lotus.html">Lotus</a></h3>
            <h5 className={styles.Tag}>Something</h5>
            <h4 className={styles.Description}>
              I don&t really know but I think it looks nice.
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