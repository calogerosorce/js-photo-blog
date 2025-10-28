const api = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.getElementById('row')
axios.get(api)
  .then(res => {
    const dat = res.data
    const { url, date, title, id } = res



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

    const nameClass = 'img_estate'
    const imgEl = document.querySelectorAll(`#${nameClass}`)
    console.log(imgEl);
    imgEl.forEach(col => {
      col.addEventListener('click', () => {
        console.log('click');
        console.log(col);
        showOverlay(col.src, col.alt)
      })
    })

    function showOverlay(src, alt) {
      let grid = document.getElementById('grid')
      if (!grid) {
        grid = document.createElement('div')
        grid.id = 'grid'
        console.log(grid);
        document.body.appendChild(grid)
      }

      grid.innerHTML = `
                <button id="close-btn" aria-label="Chiudi">Chiudi</button>
                <img class="img_estesa" src="${src}" alt="${alt}">
            `
      grid.classList.add('active')

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
