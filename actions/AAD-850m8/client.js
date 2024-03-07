function(properties, context) {

	const params = window.location.search;
    const formattedParams = params.match(/^[^?#]+\?([^#]+)/);
    console.log(formattedParams);

}