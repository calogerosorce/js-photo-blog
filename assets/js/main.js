//creo una variabile per l'url e per il row
const api = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.getElementById('row')
//accedo nell'axios per utilizare gli oggetti al suo interno
axios.get(api)
  .then(res => {
    //creo una variabile per estrarre gli oggetti contenuti nell'elemento data
    const dat = res.data
    //creo un ciclo che mi permette di creare tante card quanto sono gli oggetti nel link
    rowEl.innerHTML = dat.map(element => {
      const { url, date, title, id } = element

      return `
        <div class="col">
          <div id="card">
            <div class="viaggio"> 
              <img class="pin" src="./assets/img/pin.svg" alt="">
              <img id="img_estate" data-img="${id}" src="${url}" alt="${title}">
            </div>
            <div class="paragraph"> 
              <p class="gray">${date}</p>
              <p class="title"><strong>${title}</strong></p>
            </div>
          </div>
        </div>
      `})
    //creo un variabile con la stringa contenente il nome di un id
    const nameClass = 'img_estate'
    //mi seleziono tutte le img che contengono questo id
    const imgEl = document.querySelectorAll(`#${nameClass}`)
    //ciclo al loro interno per poter interagire con tutte le img
    imgEl.forEach(img => {
      img.addEventListener('click', () => {
        showOverlay(img.src, img.alt)
      })
    })
    //creo la funzione che mi permette di creare un nuovo div, contenente l'img e il button close
    function showOverlay(src, alt) {
      let grid = document.getElementById('grid')
      // creo una condizione che mi permette di creare elementi non esistenti e non in loop
      if (!grid) {
        grid = document.createElement('div')
        grid.id = 'grid'
        document.body.appendChild(grid)
      }
      //creo l'img ,(e il button close), poi grazie alla funzione all'interno del ciclo dell'img estraiamo gli src e riusciamo a richiamare le img cliccate
      grid.innerHTML = `
                <button id="close-btn" aria-label="Chiudi">Chiudi</button>
                <img class="img_estesa" src="${src}" alt="${alt}">
                `
      //creo una nuova classe che mi permette di attivare il tutto          
      grid.classList.add('active')
      //creo una funzione che mi permette sia di chiudere tramite il bottone e sia cliccando fuori la foto
      function hideOverlay() {
        const grid = document.getElementById('grid')
        if (grid) {
          grid.classList.remove('active')
        }
      }
      const closeBtn = document.getElementById('close-btn')
      closeBtn.addEventListener('click', hideOverlay)

      grid.addEventListener('click', function (e) {
        if (e.target === grid) hideOverlay()
      }, { once: false })

    }

  })
