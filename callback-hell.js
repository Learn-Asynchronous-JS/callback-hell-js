console.log('start');

function getItems(callback) {
    setTimeout(() => {
        const result =  {items: [1,2,3,4,5]}
        callback(result);
    }, 4000);
}

function getPrice(item, callback) {
    setTimeout(() => {
        const result= {price: 400}
        callback(result);
    }, 5000);
}

const items = getItems(items => {
    console.log(items);
    getPrice(items[0], price => {
        getPrice(items[0], price => {
            getPrice(items[0], price => {
                getPrice(items[0], price => {
                    getPrice(items[0], price => {
                        getPrice(items[0], price => {
                        })
                    })
                })
            })
        })
        console.log(price);
    })
});

console.log('end');