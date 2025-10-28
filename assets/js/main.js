const api = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.getElementById('row')
axios.get(api)
  .then(res => {
    const dat = res.data
    const { url, date, title } = res



    rowEl.innerHTML = dat.map(element => {
      const { url, date, title, id } = element

      return `
        <div class="col">
          <div id="card">
            <div class="viaggio"> 
              <img class="pin" src="./assets/img/pin.svg" alt="">
              <img class="img_estate" data-img="${id}" src="${url}" alt="${title}">
              <div id="grid">
                 <img class="img_estesa" data-img="${id}" src="${url}" alt="${title}">
                  <button id="close-btn">Chiudi</button>
              </div>
            </div>
            <div class="paragraph"> 
              <p class="gray">${date}</p>
              <p class="title"><strong>${title}</strong></p>
            </div>
          </div>
        </div>
      `})

    const nameClass = 'card'
    const cardEl = document.querySelectorAll(`#${nameClass}`)
    console.log(cardEl);
    cardEl.forEach(col => {
      col.addEventListener('click', function () {
        console.log('click');
      })
    })


  })



