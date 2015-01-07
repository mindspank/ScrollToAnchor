/**
 * Alexander Karlsson - akl@qlikview.com - Demo & Best Practices
 *
 * QlikTech takes no responsbility for any code.
 * Use at your own risk.
 * Do not submerge in water.
 * Do not taunt Happy Fun Ball.
 */

//Constants
var EXTENSION_NAME = 'ScrollToAnchor';
var PATH = Qva.Remote + '?public=only&name=Extensions/' + EXTENSION_NAME + '/';

//Load scripts in the array
var scripts = [ /*PATH + '.js'*/ ];


function init() {
	Qva.AddExtension(EXTENSION_NAME, function() {

		var $this = this;
		var label = this.Layout.Text0.text;
		var scrollToObj = this.Layout.Text1.text;
		var offset = $('.Document_' + scrollToObj.toString()).offset().top;

		$(this.Element).empty();
		$(this.Element).text(label);
		$(this.Element).css({
			'fontStyle': $this.Layout.Style.fontstyle,
			'fontSize': $this.Layout.Style.fontsize + "pt",
			'fontFamily': $this.Layout.Style.fontfamily,
			'fontColor': $this.Layout.Style.fontcolor,
			'textDecoration': $this.Layout.Style.textdecoration
		})
		$(this.Element).click(function(e) {
			$('html, body').scrollTop(offset);
		});

	});
};

function loadScripts() {
	if (scripts.length != 0) {
		Qv.LoadExtensionScripts(scripts, init);
	} else {
		init()
	};
};
loadScripts();