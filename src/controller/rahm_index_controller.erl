-module(rahm_index_controller, [Req]).
-compile(export_all).

index('GET', []) ->
    {ok, [{index, "welcome stranger"},{index2, "To Simon and Mattias company page. Below you can see the latest activity in our forum" }]};
index('POST', Data) ->
	{json, [{min, "kuk"}]}.

get_data_test('GET', []) ->
	{json, [ {hej, "da"}, {ok, "whaaat"}, {beer, ['Norrlandsguld','Falcon', 'Weiss']} ]}.

get_subjects('GET', []) ->
	%% temporary data get
	{json, [ {music, ['Rock', 'Pop','Metal', 'Electro']},
			 {programming, ['c++', 'c#', 'c', 'Erlang', 'Javascript']},
			 {lifestyle, ['?']} ]}.

get_latest('GET', []) ->
	%% temporary data get
	{json, [ {music,['Electro', 'Have u heard blabla', 'username']}]}.