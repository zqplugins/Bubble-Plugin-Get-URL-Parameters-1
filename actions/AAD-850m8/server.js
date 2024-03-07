function(properties, context) {

    const after = properties.current_url.substring(properties.current_url.indexOf('?') + 1);
    const params = after.split('&');
    const result = {
        params: "?" + params.join('&'),
        params_list: params
    }
	return result;
}