inc= function(x){
return x+1;
}


ccc = 0
counter = function(){
	ccc=ccc+1;
	return ccc;
}

Inc = function (){
	return function(x){ return x+1}
	};


Counter = function(){
	var bbb=0;
	return function(){
		bbb = bbb+1;
		return bbb}}



CounterFrom = function(z) {
	var z = z
	return function() {
	z=z+1
		return z}}


console.log(typeof('a'))
carefulMakeArray=function(n,v){
	if (n<0){
		return {Badsize:'Negative size'}}
	else if (typeof(n)=== 'string') {
		return {Badsize:'Size is not a number'}}
	else {
		a=[]
		for(i=0;i<n;i++){
			a.push(v)}
		return a}}


incArray = function (n) {
	if (n<0){
		return {Badsize:'Negative size'}}
	else if (typeof(n)=== 'string') {
		return {Badsize:'Size is not a number'}}
	else {
		a=[]
		for(i=0;i<n;i++){
			a.push(Inc())}
		return a}}



counterFromArray = function (n)
{
		if (n<0){
		return {Badsize:'Negative size'}}
	else if (typeof(n)=== 'string') {
		return {Badsize:'Size is not a number'}}
	else {
		a=[]
		for(i=0;i<n;i++){
			a.push(CounterFrom(i))}
		return a}}
console.log(counterFromArray(5))




