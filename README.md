const filtercontactsnumber=document.querySelectorAll('h3')
filtercontactsnumber.forEach(contact=>{
if(contact.innerText.toLowerCase().includes(search.toLowerCase())){
contact.parentElement.style.display='block'
}
else{
contact.parentElement.style.display='none'
}
})
