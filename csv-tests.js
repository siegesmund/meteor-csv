// Write your tests here!
// Here is an example.

if(Meteor.isServer){

  var url = 'http://real-chart.finance.yahoo.com/table.csv?s=AAPL&a=02&b=1&c=2015&d=02&e=2&f=2015&g=d&ignore=.csv';
  var csv = new CSV();

  Tinytest.add('[csv] Creates the proper methods.', function(test) {
    test.equal(true, _.isFunction(csv.csv));
    test.equal(true, _.isFunction(csv.getcsv));
  });

  Tinytest.add('[csv] Retrieves and parses a csv file from Yahoo', function(test) {
    var data = csv.getcsv(url);
    test.equal(true,_.isArray(data))
    test.equal(2, data.length);
  });

}
