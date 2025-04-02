function split(){


    let amount=document.getElementById('amount');

    let persons=document.getElementById('persons');

    // let result=amount.value/persons.value
    let result=(amount.value/persons.value).toFixed(2)

    let resultdiv=document.getElementById('result')
    resultdiv.innerText=result
    //here decimals values getting more

    //got 2 decimals want


    //here .toFixed(2)is for getting howmany decimals we want


    

}
