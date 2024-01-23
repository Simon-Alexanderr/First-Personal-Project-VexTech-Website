function productcountchange(){
    let a
  
    a=document.getElementById('productcount').value
    document.getElementById('subtotal').innerHTML=a*1750
  }
  function productcountchange2(){
    let a
    a=document.getElementById('productcount2').value
    document.getElementById('subtotal2').innerHTML=a*1200
  }
  function updatecart(){
    let a
  let b  
  let x
  let y
  
  
  
   a= document.getElementById('subtotal').innerHTML
   x=parseInt(a)
   b=document.getElementById('subtotal2').innerHTML
   y=parseInt(b)
   z=x+y
   p=z
   document.getElementById('mainsubtotal').innerHTML='₹'+p
  
   document.getElementById('total').innerHTML=z+200
   document.getElementById('total').innerHTML='₹'+document.getElementById('total').innerHTML
   
  
  
  
  
  
  
  
  
  
  }