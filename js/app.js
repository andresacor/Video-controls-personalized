
  //Play pause video
  let playPause = document.querySelector('#pause')
  playPause.addEventListener('click', (e) =>  {
      e.preventDefault()
  let changeIcon = document.querySelector('img')    
  
  playPause.style.outline = '0'
    if (video.paused) {
        video.play()
        changeIcon.setAttribute('src', 'img/play-solid-purple.svg')
        changeIcon.classList.add('play');
    }
    else {
        video.pause()
        changeIcon.setAttribute('src', 'img/pause-solid-white.svg')
    } 
  })

  //Reload video
  let beginning = document.querySelector('#stop')
    beginning.addEventListener('click', (e) => {
    e.preventDefault()
    beginning.style.outline = '0'
    video.pause()
    video.currentTime = -0

      if (video.currentTime == 0) {
          
      }
  }) 

// Backward video
 let back = document.querySelector('#back')
 back.addEventListener('click', (e) =>   {
     e.preventDefault()
     back.style.outline = 0
     video.currentTime -= 2
  
 })

// Forward video
let next= document.querySelector('#next')
next.addEventListener('click', (e) => {
    e.preventDefault()
    next.style.outline = 0
    video.currentTime += 2

})

// Big video
let expand = document.querySelector('#expand')
expand.addEventListener('click', (e) => {
    e.preventDefault()
    expand.style.outline = 0
    let videoExpand = document.querySelector('.expand')
    videoExpand.style.width = '100%'      
})

// Normal video
expand = document.querySelector('#expand')
expand.addEventListener('mousedown', (e) => {
    e.preventDefault()
    expand.style.outline = 0
  videoExpand = document.querySelector('.expand')
    videoExpand.style.width = '640px'
})

// Volume video
window.SetVolume = function (val) {
    let volume = document.querySelector('video');
    volume.volume = val / 100;
}

//Porcent video
// let porcent = document.querySelector('#vol-control')
// if(porcent) {
//     let numberPorcent = document.querySelector('#porcent')
//     if(numberPorcent) {
//         numberPorcent.innerHTML = porcent.value
        
//         porcent.addEventListener('input', function(){
//             numberPorcent.innerHTML = porcent.value
//         })
//     }
// }






