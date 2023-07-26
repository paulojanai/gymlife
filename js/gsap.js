//Animation icon show password
const boxIcon = document.getElementById("show-password-animated");
let timeLine = gsap.timeline();

boxIcon.addEventListener("click", () => {
  const lineEyeOff = document.getElementById("line-eye-off");
  const lineEye = document.getElementById("line-eye");

  if(lineEyeOff) {
    timeLine.to(lineEyeOff, 0.3, { attr : {x2: 22 , y2: 22}});
  } else {
    timeLine.to(lineEye, 0.3, { attr : {x1:-1, x2:-1, y1:-1, y2:-1}});
  }
})

