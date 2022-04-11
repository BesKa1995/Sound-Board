const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

sounds.forEach(sound => {
  const btn = document.createElement('button')
  btn.innerHTML = sound
  btn.classList.add('btn')
  document.querySelector('.buttons').appendChild(btn)
  btn.addEventListener('click', () => {
    stopPlay()
    document.getElementById(sound).play()
  })
})


function stopPlay() {
  sounds.forEach(sound => {
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0
  })
}

