const advice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice')
    const data = await response.json()

    document.querySelector('#advice-title').innerHTML = `advice # ${data.slip.id}`
    document.querySelector('#advice-txt').innerHTML = `"${data.slip.advice}"`
}

