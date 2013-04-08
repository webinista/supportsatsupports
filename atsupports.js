/*
atSupports version 1.0
Copyright 2012 Tiffany B. Brown
http://tiffanybbrown.com/

Released under an MIT license.

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

*/
(function(w){
	if( !!w.CSS && !!w.CSSRule.SUPPORTS_RULE){
		w.CSS = {};
		var el, comp;

		if( w.supportsCSS !== undefined ){
			w.CSS.supports = function(prop,value){
				if( arguments.length !== 2){
					var err = document.createEvent('Event');
					err.initEvent('error');
					err.code = 6;
					err.message = 'WRONG_ARGUMENTS_ERR';
					w.dispatchEvent(err);
				} else {
					return w.supportsCSS(prop,value);
				}
			}
		} else {
			w.CSS.supports = function(prop,value){
				var el, p, split, uc = [], lc;

				el = document.createElement('el');
				document.body.appendChild(el);
				el.style[prop] = value;

				p = w.getComputedStyle(el);

				if( prop.indexOf('-') > -1 ){

					/* Array.prototype.map isn't supported in < IE9 */
					prop.split('-').map( function(s){
						/* Capitalizes first letter. */
						var s = s.replace(/^\w/, s.charAt(0).toUpperCase() );
						uc.push(s);
					});

					uc = uc.join(''); /* Creates CamelCase */
					lc = uc.replace(/^\w/, uc.charAt(0).toLowerCase()); /* Creates camelCase */

					if( ( p[ uc ] !== undefined ) || ( p[ lc ] !== undefined ) ){
						return true;
					} else {
						return false;
					}
				} else {
					return !!p.getPropertyValue(prop);
				}
				document.body.removeChild(el);
			}
		}
	}
})(window)