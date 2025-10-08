// get data

const getfromLs = () =>{
    const getitem = localStorage.getItem('card')

    if(getitem){
         return JSON.parse(getitem)
    }
    else{
        return []
    }
}

// add data 
 

const AddToLS = card =>{
    
  const  ifhave = getfromLs()

  const isExist = ifhave.find(i =>  i.id  === card.id )
   if(isExist){
     alert('Already added')
     return 
   }

   ifhave.push(card)

   localStorage.setItem('card', JSON.stringify(ifhave))
   alert('Successfully added!')
}

const removeFromLs = data => {
  const allcard = getfromLs()

  const removeddata = allcard.filter(a => a.id !== data.id)

  localStorage.setItem('card', JSON.stringify(removeddata))
  alert('Successfully deleted')

   console.log(removeddata)
}

export  {AddToLS, getfromLs, removeFromLs}


