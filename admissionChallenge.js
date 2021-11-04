function organizeItems(items) {
    // Create collection object
    var collection = {};
    // Iterate through all objects in array
    for (let i = 0; i < items.length; i++) {
        // Check object.category; if doesnt exist, add to collections, with array of itemName
        var category = items[i].category;
        var isOnSale = items[i].onSale;
        var itemName = items[i].itemName;
        if (isOnSale) {
            itemName = `${itemName}($)`;
        }

        if (collection[category] !== undefined) {
            collection[category].push(itemName)
        } else {
            collection[category] = [itemName];
        }
    }
    return collection;
}


// Tests
var itemData = [
    { category: 'fruit', itemName: 'apple', onSale: false },
    { category: 'canned', itemName: 'beans', onSale: false },
    { category: 'canned', itemName: 'corn', onSale: true },
    { category: 'frozen', itemName: 'pizza', onSale: false },
    { category: 'fruit', itemName: 'melon', onSale: true },
    { category: 'canned', itemName: 'soup', onSale: false },
];

var actual1 = organizeItems(itemData);

var result1 = {
    fruit: ['apple', 'melon($)'],
    canned: ['beans', 'corn($)', 'soup'],
    frozen: ['pizza']
};