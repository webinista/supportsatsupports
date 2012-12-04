if( window.CSS === undefined ){
    window.CSS = {};
    var el, comp;

    if( window.supportsCSS !== undefined ){
        window.CSS.supports = function(prop,value){
            return window.supportsCSS(prop,value);
        }
    } else {
        window.CSS.supports = function(prop,value){
            var el, p, split, uc = [], lc;

            el = document.createElement('div');
            document.body.appendChild( el );
            el.style[prop] = value;

            p = window.getComputedStyle(el);

            if( prop.indexOf('-') > -1 ){

                prop.split('-').map( function(s){
                    var s = s.replace(/^\w/, s.charAt(0).toUpperCase() );
                    uc.push(s);
                });

                uc = uc.join('');
                lc = uc.replace(/^\w/, uc.charAt(0).toLowerCase());

                if( ( p[ uc ] !== undefined ) || ( p[ lc ] !== undefined ) ){
                    return true;
                } else {
                    return false;
                }
            } else {
                return !!p.getPropertyValue(prop);
            }
        }
    }
}
