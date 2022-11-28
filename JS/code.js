fetch('../Data/data.json')
.then((res)=>{
    return res.json();
})

.then((data)=>{
    let items = data.items;
    console.table(items);
})
