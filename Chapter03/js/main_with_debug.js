//initialize function 
function initialize(){
    cities();
};
console.log("1");
//cities function with city name and population data to be added to a table
function cities(){
    var cityPop = [ //cityPop variable to store array for city and population data
    { 
        city: 'Madison',
        population: 233209
    },
    {
        city: 'Milwaukee',
        population: 594833
    },
    {
        city: 'Green Bay',
        population: 104057
    },
    {
        city: 'Superior',
        population: 27244
    }
    ];
    //Table
    var table = document.createElement('table');
	console.log("2");
    //Header row
    var headerRow = document.createElement('tr');//Create a header row

    //add the "City" and "Population" columns to the header row
    headerRow.insertAdjacentHTML("beforeend","<th>City</th><th>Population</th>")
	table.appendChild(headerRow); //Add the header row to the table
	
	for(var i = 0; i < cityPop.length; i++){ //For loop to populate table
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add row's html string to table
        table.insertAdjacentHTML('beforeend',rowHtml);
    }

    document.querySelector("#myDiv").appendChild(table);//Adding to the table
    console.log("3");
addColumns(cityPop);
function addColumns(cityPop){
	var rows = document.querySelectorAll('tr');//Selecting all rows to add to it
	document.querySelectorAll('tr').forEach(function(row,i){//For loop for populating city size column with data
		if (i == 0){

            row.insertAdjacentHTML('beforeend','<th>City Size</th>');
        } else {
 
            var citySize;
 
            if (cityPop[i-1].population < 100000){
                citySize = 'Small';
 
            } else if (cityPop[i-1].population < 500000){
                citySize = 'Medium';
 
            } else {
                citySize = 'Large';
            };

			row.insertAdjacntHTML = '<td' + citySize + '</td>';
			var thirdRow = document.createElement('td')//Creating new element to keep city size data in
			thirdRow.innerHTML= citySize //citySize will be what's written into the html
			row.appendChild(thirdRow);//adding citySize to row
            console.log("4");
	};
})}
addEvents();
function addEvents(){
	table = document.querySelector('table');//Select the table
    document.querySelector("table").addEventListener("mouseover", function(){//Adding event listener to table
       
        var color = "rgb(";
 
        for (var i=0; i<3; i++){ //For loop for color selection
            var random = Math.round(Math.random() * 255);
 
            color += random;
 
            if (i<2){
                color += ",";
           
            } else {
                color += ")";
        };
        document.querySelector("table");
        table.style.color = color;
    };
    function clickme(){//Click me function
 
        alert('Hey, you clicked me!');
        console.log("5");
	};
	
document.querySelector("table").addEventListener("click", clickme()); //"click me" event listener

})}}
document.addEventListener('DOMContentLoaded',initialize)//Calling initialize function 


//Activity 4

function jsAjax(){ //creating function to store code
   
    fetch('data/MegaCities.geojson') //fetch the geoJson file from data folder
		.then(function(response){ // .then method with anonymous function that will convert code to usable form
			return response.json(); //return the data in converted, usable form (json)
        })
     .then(callback) //sending data to the callback function
};
function callback(response){ //callback function definition
    console.log(response)//log the response to the console
    
    document.querySelector("#myDiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data:<br>' + JSON.stringify(response))//make json file string and add "GeoJson data" label before the string
}

document.addEventListener('DOMContentLoaded',jsAjax)//Calling the jsAjax function, loading data onto page
