export default function(el, binding) {
  if(binding.value.duration < 60) 
    el.style.borderLeft = '5px solid gold'
  if(60 < binding.value.duration && binding.value.duration < 90)
    return el.style.borderLeft = '5px solid limegreen';
  if(90 < binding.value.duration)
    return el.style.borderLeft = '5px solid crimson';
}
