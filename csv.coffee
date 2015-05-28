class CSV

	# options = {skip_empty_lines: true, columns: true, auto_parse: true}
	csv: (input, options) ->
		if not options
			options = {}
		response = Async.runSync (done) ->
			parse = Npm.require 'csv-parse'

			parse input, options, (err, output) ->
				done(null, output)
		return response

	# helper function
	getcsv: (uri, options) ->
		resp = HTTP.get uri
		if resp.statusCode is 200
			if not options
				options = {}
			csvObj = this.csv(resp.content, options)
			if not csvObj.error
				return csvObj.result
			else
				console.log "[error] getcsv: ", csvObj.error
				return null
		else
			return null

@CSV = CSV
