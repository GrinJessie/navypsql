const dataProcessor = function(input) {
    return function(list) {
        console.log('Searching...');
        console.log(`Found ${list.rows.length} person(s) by the name ${input}`);
        list.rows.forEach((e, i) => {
            console.log(`- ${i + 1}: ${list.rows[i].first_name} ${list.rows[i].last_name}, born ${Date(list.rows[i].birthday)}`);
        });
    }
};


module.exports = dataProcessor;