import { withPluginApi } from 'discourse/lib/plugin-api';
import netlogo from "../lib/netlogo";

function initialize(api)
{
	api.registerHighlightJSLanguage("netlogo", netlogo);
}

export default
{
	name: "highlight-nl",
	initialize()
	{
		withPluginApi("1.4.0", initialize);
	}
};
