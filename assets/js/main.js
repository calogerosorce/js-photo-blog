const api = 'https://lanciweb.github.io/demo/api/pictures/'
const rowEl = document.getElementById('row')
axios.get(api)
    .then(res => {
        const { url, date, title } = res.data
        const dat = res.data
        console.log(dat);

        rowEl.innerHTML = dat.map(element => {
            const { url, date, title } = element
            return `
        <div class="col">
          <div class="card">
            <img class="pin" src="./assets/img/pin.svg" alt="">
            <img class="img_estate" src="${url}" alt="${title || ''}">
            <p class="gray">${date || ''}</p>
            <p><strong>${title || ''}</strong></p>
          </div>
        </div>
      `})

    })