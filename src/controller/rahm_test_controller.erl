-module(rahm_test_controller, [Req]).
-compile(export_all).

test('GET', []) ->
    {output, "<strong>test controller!</strong>"}.

hello('GET',[]) ->
	{ok,[{greeting, "Hello Mattias"}]}.