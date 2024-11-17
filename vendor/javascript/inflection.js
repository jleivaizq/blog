// inflection@1.13.4 downloaded from https://ga.jspm.io/npm:inflection@1.13.4/lib/inflection.js

var e={};(function(s,i){true;e=i()})(0,(function(){var e=["accommodation","adulthood","advertising","advice","aggression","aid","air","aircraft","alcohol","anger","applause","arithmetic","assistance","athletics","bacon","baggage","beef","biology","blood","botany","bread","butter","carbon","cardboard","cash","chalk","chaos","chess","crossroads","countryside","dancing","deer","dignity","dirt","dust","economics","education","electricity","engineering","enjoyment","envy","equipment","ethics","evidence","evolution","fame","fiction","flour","flu","food","fuel","fun","furniture","gallows","garbage","garlic","genetics","gold","golf","gossip","gratitude","grief","guilt","gymnastics","happiness","hardware","harm","hate","hatred","health","heat","help","homework","honesty","honey","hospitality","housework","humour","hunger","hydrogen","ice","importance","inflation","information","innocence","iron","irony","jam","jewelry","judo","karate","knowledge","lack","laughter","lava","leather","leisure","lightning","linguine","linguini","linguistics","literature","litter","livestock","logic","loneliness","luck","luggage","macaroni","machinery","magic","management","mankind","marble","mathematics","mayonnaise","measles","methane","milk","minus","money","mud","music","mumps","nature","news","nitrogen","nonsense","nurture","nutrition","obedience","obesity","oxygen","pasta","patience","physics","poetry","pollution","poverty","pride","psychology","publicity","punctuation","quartz","racism","relaxation","reliability","research","respect","revenge","rice","rubbish","rum","safety","scenery","seafood","seaside","series","shame","sheep","shopping","sleep","smoke","smoking","snow","soap","software","soil","spaghetti","species","steam","stuff","stupidity","sunshine","symmetry","tennis","thirst","thunder","timber","traffic","transportation","trust","underwear","unemployment","unity","validity","veal","vegetation","vegetarianism","vengeance","violence","vitality","warmth","wealth","weather","welfare","wheat","wildlife","wisdom","yoga","zinc","zoology"];var s={plural:{men:new RegExp("^(m|wom)en$","gi"),people:new RegExp("(pe)ople$","gi"),children:new RegExp("(child)ren$","gi"),tia:new RegExp("([ti])a$","gi"),analyses:new RegExp("((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$","gi"),databases:new RegExp("(database)s$","gi"),drives:new RegExp("(drive)s$","gi"),hives:new RegExp("(hi|ti)ves$","gi"),curves:new RegExp("(curve)s$","gi"),lrves:new RegExp("([lr])ves$","gi"),aves:new RegExp("([a])ves$","gi"),foves:new RegExp("([^fo])ves$","gi"),movies:new RegExp("(m)ovies$","gi"),aeiouyies:new RegExp("([^aeiouy]|qu)ies$","gi"),series:new RegExp("(s)eries$","gi"),xes:new RegExp("(x|ch|ss|sh)es$","gi"),mice:new RegExp("([m|l])ice$","gi"),buses:new RegExp("(bus)es$","gi"),oes:new RegExp("(o)es$","gi"),shoes:new RegExp("(shoe)s$","gi"),crises:new RegExp("(cris|ax|test)es$","gi"),octopuses:new RegExp("(octop|vir)uses$","gi"),aliases:new RegExp("(alias|canvas|status|campus)es$","gi"),summonses:new RegExp("^(summons|bonus)es$","gi"),oxen:new RegExp("^(ox)en","gi"),matrices:new RegExp("(matr)ices$","gi"),vertices:new RegExp("(vert|ind)ices$","gi"),feet:new RegExp("^feet$","gi"),teeth:new RegExp("^teeth$","gi"),geese:new RegExp("^geese$","gi"),quizzes:new RegExp("(quiz)zes$","gi"),whereases:new RegExp("^(whereas)es$","gi"),criteria:new RegExp("^(criteri)a$","gi"),genera:new RegExp("^genera$","gi"),ss:new RegExp("ss$","gi"),s:new RegExp("s$","gi")},singular:{man:new RegExp("^(m|wom)an$","gi"),person:new RegExp("(pe)rson$","gi"),child:new RegExp("(child)$","gi"),drive:new RegExp("(drive)$","gi"),ox:new RegExp("^(ox)$","gi"),axis:new RegExp("(ax|test)is$","gi"),octopus:new RegExp("(octop|vir)us$","gi"),alias:new RegExp("(alias|status|canvas|campus)$","gi"),summons:new RegExp("^(summons|bonus)$","gi"),bus:new RegExp("(bu)s$","gi"),buffalo:new RegExp("(buffal|tomat|potat)o$","gi"),tium:new RegExp("([ti])um$","gi"),sis:new RegExp("sis$","gi"),ffe:new RegExp("(?:([^f])fe|([lr])f)$","gi"),hive:new RegExp("(hi|ti)ve$","gi"),aeiouyy:new RegExp("([^aeiouy]|qu)y$","gi"),x:new RegExp("(x|ch|ss|sh)$","gi"),matrix:new RegExp("(matr)ix$","gi"),vertex:new RegExp("(vert|ind)ex$","gi"),mouse:new RegExp("([m|l])ouse$","gi"),foot:new RegExp("^foot$","gi"),tooth:new RegExp("^tooth$","gi"),goose:new RegExp("^goose$","gi"),quiz:new RegExp("(quiz)$","gi"),whereas:new RegExp("^(whereas)$","gi"),criterion:new RegExp("^(criteri)on$","gi"),genus:new RegExp("^genus$","gi"),s:new RegExp("s$","gi"),common:new RegExp("$","gi")}};var i=[[s.plural.men],[s.plural.people],[s.plural.children],[s.plural.tia],[s.plural.analyses],[s.plural.databases],[s.plural.drives],[s.plural.hives],[s.plural.curves],[s.plural.lrves],[s.plural.foves],[s.plural.aeiouyies],[s.plural.series],[s.plural.movies],[s.plural.xes],[s.plural.mice],[s.plural.buses],[s.plural.oes],[s.plural.shoes],[s.plural.crises],[s.plural.octopuses],[s.plural.aliases],[s.plural.summonses],[s.plural.oxen],[s.plural.matrices],[s.plural.feet],[s.plural.teeth],[s.plural.geese],[s.plural.quizzes],[s.plural.whereases],[s.plural.criteria],[s.plural.genera],[s.singular.man,"$1en"],[s.singular.person,"$1ople"],[s.singular.child,"$1ren"],[s.singular.drive,"$1s"],[s.singular.ox,"$1en"],[s.singular.axis,"$1es"],[s.singular.octopus,"$1uses"],[s.singular.alias,"$1es"],[s.singular.summons,"$1es"],[s.singular.bus,"$1ses"],[s.singular.buffalo,"$1oes"],[s.singular.tium,"$1a"],[s.singular.sis,"ses"],[s.singular.ffe,"$1$2ves"],[s.singular.hive,"$1ves"],[s.singular.aeiouyy,"$1ies"],[s.singular.matrix,"$1ices"],[s.singular.vertex,"$1ices"],[s.singular.x,"$1es"],[s.singular.mouse,"$1ice"],[s.singular.foot,"feet"],[s.singular.tooth,"teeth"],[s.singular.goose,"geese"],[s.singular.quiz,"$1zes"],[s.singular.whereas,"$1es"],[s.singular.criterion,"$1a"],[s.singular.genus,"genera"],[s.singular.s,"s"],[s.singular.common,"s"]];var r=[[s.singular.man],[s.singular.person],[s.singular.child],[s.singular.drive],[s.singular.ox],[s.singular.axis],[s.singular.octopus],[s.singular.alias],[s.singular.summons],[s.singular.bus],[s.singular.buffalo],[s.singular.tium],[s.singular.sis],[s.singular.ffe],[s.singular.hive],[s.singular.aeiouyy],[s.singular.x],[s.singular.matrix],[s.singular.mouse],[s.singular.foot],[s.singular.tooth],[s.singular.goose],[s.singular.quiz],[s.singular.whereas],[s.singular.criterion],[s.singular.genus],[s.plural.men,"$1an"],[s.plural.people,"$1rson"],[s.plural.children,"$1"],[s.plural.databases,"$1"],[s.plural.drives,"$1"],[s.plural.genera,"genus"],[s.plural.criteria,"$1on"],[s.plural.tia,"$1um"],[s.plural.analyses,"$1$2sis"],[s.plural.hives,"$1ve"],[s.plural.curves,"$1"],[s.plural.lrves,"$1f"],[s.plural.aves,"$1ve"],[s.plural.foves,"$1fe"],[s.plural.movies,"$1ovie"],[s.plural.aeiouyies,"$1y"],[s.plural.series,"$1eries"],[s.plural.xes,"$1"],[s.plural.mice,"$1ouse"],[s.plural.buses,"$1"],[s.plural.oes,"$1"],[s.plural.shoes,"$1"],[s.plural.crises,"$1is"],[s.plural.octopuses,"$1us"],[s.plural.aliases,"$1"],[s.plural.summonses,"$1"],[s.plural.oxen,"$1"],[s.plural.matrices,"$1ix"],[s.plural.vertices,"$1ex"],[s.plural.feet,"foot"],[s.plural.teeth,"tooth"],[s.plural.geese,"goose"],[s.plural.quizzes,"$1"],[s.plural.whereases,"$1"],[s.plural.ss,"ss"],[s.plural.s,""]];var a=["and","or","nor","a","an","the","so","but","to","of","at","by","from","into","on","onto","off","out","in","over","with","for"];var n=new RegExp("(_ids|_id)$","g");var l=new RegExp("_","g");var u=new RegExp("[ _]","g");var o=new RegExp("([A-Z])","g");var t=new RegExp("^_");var g={
/**
     * A helper method that applies rules based replacement to a String.
     * @private
     * @function
     * @param {String} str String to modify and return based on the passed rules.
     * @param {Array: [RegExp, String]} rules Regexp to match paired with String to use for replacement
     * @param {Array: [String]} skip Strings to skip if they match
     * @param {String} override String to return as though this method succeeded (used to conform to APIs)
     * @returns {String} Return passed String modified by passed rules.
     * @example
     *
     *     this._apply_rules( 'cows', singular_rules ); // === 'cow'
     */
_apply_rules:function(e,s,i,r){if(r)e=r;else{var a=g.indexOf(i,e.toLowerCase())>-1;if(!a){var n=0;var l=s.length;for(;n<l;n++)if(e.match(s[n][0])){void 0!==s[n][1]&&(e=e.replace(s[n][0],s[n][1]));break}}}return e},
/**
     * This lets us detect if an Array contains a given element.
     * @public
     * @function
     * @param {Array} arr The subject array.
     * @param {Object} item Object to locate in the Array.
     * @param {Number} from_index Starts checking from this position in the Array.(optional)
     * @param {Function} compare_func Function used to compare Array item vs passed item.(optional)
     * @returns {Number} Return index position in the Array of the passed item.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.indexOf([ 'hi','there' ], 'guys' ); // === -1
     *     inflection.indexOf([ 'hi','there' ], 'hi' ); // === 0
     */
indexOf:function(e,s,i,r){i||(i=-1);var a=-1;var n=i;var l=e.length;for(;n<l;n++)if(e[n]===s||r&&r(e[n],s)){a=n;break}return a},
/**
     * This function adds pluralization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {String} plural Overrides normal output with said String.(optional)
     * @returns {String} Singular English language nouns are returned in plural form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.pluralize( 'person' ); // === 'people'
     *     inflection.pluralize( 'octopus' ); // === 'octopuses'
     *     inflection.pluralize( 'Hat' ); // === 'Hats'
     *     inflection.pluralize( 'person', 'guys' ); // === 'guys'
     */
pluralize:function(s,r){return g._apply_rules(s,i,e,r)},
/**
     * This function adds singularization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {String} singular Overrides normal output with said String.(optional)
     * @returns {String} Plural English language nouns are returned in singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.singularize( 'people' ); // === 'person'
     *     inflection.singularize( 'octopuses' ); // === 'octopus'
     *     inflection.singularize( 'Hats' ); // === 'Hat'
     *     inflection.singularize( 'guys', 'person' ); // === 'person'
     */
singularize:function(s,i){return g._apply_rules(s,r,e,i)},
/**
     * This function will pluralize or singularlize a String appropriately based on a number value
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Number} count The number to base pluralization off of.
     * @param {String} singular Overrides normal output with said String.(optional)
     * @param {String} plural Overrides normal output with said String.(optional)
     * @returns {String} English language nouns are returned in the plural or singular form based on the count.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.inflect( 'people' 1 ); // === 'person'
     *     inflection.inflect( 'octopuses' 1 ); // === 'octopus'
     *     inflection.inflect( 'Hats' 1 ); // === 'Hat'
     *     inflection.inflect( 'guys', 1 , 'person' ); // === 'person'
     *     inflection.inflect( 'inches', 1.5 ); // === 'inches'
     *     inflection.inflect( 'person', 2 ); // === 'people'
     *     inflection.inflect( 'octopus', 2 ); // === 'octopuses'
     *     inflection.inflect( 'Hat', 2 ); // === 'Hats'
     *     inflection.inflect( 'person', 2, null, 'guys' ); // === 'guys'
     */
inflect:function(s,a,n,l){a=parseFloat(a,10);return isNaN(a)?s:1===a?g._apply_rules(s,r,e,n):g._apply_rules(s,i,e,l)},
/**
     * This function adds camelization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
     *                                 Passing true will lowercase it.
     * @returns {String} Lower case underscored words will be returned in camel case.
     *                  additionally '/' is translated to '::'
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.camelize( 'message_properties' ); // === 'MessageProperties'
     *     inflection.camelize( 'message_properties', true ); // === 'messageProperties'
     */
camelize:function(e,s){var i=e.split("/");var r=0;var a=i.length;var n,l,u,o;for(;r<a;r++){n=i[r].split("_");l=0;u=n.length;for(;l<u;l++){0!==l&&(n[l]=n[l].toLowerCase());o=n[l].charAt(0);o=s&&0===r&&0===l?o.toLowerCase():o.toUpperCase();n[l]=o+n[l].substring(1)}i[r]=n.join("")}return i.join("::")},
/**
     * This function adds underscore support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} all_upper_case Default is to lowercase and add underscore prefix.(optional)
     *                  Passing true will return as entered.
     * @returns {String} Camel cased words are returned as lower cased and underscored.
     *                  additionally '::' is translated to '/'.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.underscore( 'MessageProperties' ); // === 'message_properties'
     *     inflection.underscore( 'messageProperties' ); // === 'message_properties'
     *     inflection.underscore( 'MP', true ); // === 'MP'
     */
underscore:function(e,s){if(s&&e===e.toUpperCase())return e;var i=e.split("::");var r=0;var a=i.length;for(;r<a;r++){i[r]=i[r].replace(o,"_$1");i[r]=i[r].replace(t,"")}return i.join("/").toLowerCase()},
/**
     * This function adds humanize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} low_first_letter Default is to capitalize the first letter of the results.(optional)
     *                                 Passing true will lowercase it.
     * @returns {String} Lower case underscored words will be returned in humanized form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.humanize( 'message_properties' ); // === 'Message properties'
     *     inflection.humanize( 'message_properties', true ); // === 'message properties'
     */
humanize:function(e,s){e=e.toLowerCase();e=e.replace(n,"");e=e.replace(l," ");s||(e=g.capitalize(e));return e},
/**
     * This function adds capitalization support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} All characters will be lower case and the first will be upper.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.capitalize( 'message_properties' ); // === 'Message_properties'
     *     inflection.capitalize( 'message properties', true ); // === 'Message properties'
     */
capitalize:function(e){e=e.toLowerCase();return e.substring(0,1).toUpperCase()+e.substring(1)},
/**
     * This function replaces underscores with dashes in the string.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Replaces all spaces or underscores with dashes.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.dasherize( 'message_properties' ); // === 'message-properties'
     *     inflection.dasherize( 'Message Properties' ); // === 'Message-Properties'
     */
dasherize:function(e){return e.replace(u,"-")},
/**
     * This function adds titleize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Capitalizes words as you would for a book title.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.titleize( 'message_properties' ); // === 'Message Properties'
     *     inflection.titleize( 'message properties to keep' ); // === 'Message Properties to Keep'
     */
titleize:function(e){e=e.toLowerCase().replace(l," ");var s=e.split(" ");var i=0;var r=s.length;var n,u,o;for(;i<r;i++){n=s[i].split("-");u=0;o=n.length;for(;u<o;u++)g.indexOf(a,n[u].toLowerCase())<0&&(n[u]=g.capitalize(n[u]));s[i]=n.join("-")}e=s.join(" ");e=e.substring(0,1).toUpperCase()+e.substring(1);return e},
/**
     * This function adds demodulize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Removes module names leaving only class names.(Ruby style)
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.demodulize( 'Message::Bus::Properties' ); // === 'Properties'
     */
demodulize:function(e){var s=e.split("::");return s[s.length-1]},
/**
     * This function adds tableize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Return camel cased words into their underscored plural form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.tableize( 'MessageBusProperty' ); // === 'message_bus_properties'
     */
tableize:function(e){e=g.underscore(e);e=g.pluralize(e);return e},
/**
     * This function adds classification support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Underscored plural nouns become the camel cased singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.classify( 'message_bus_properties' ); // === 'MessageBusProperty'
     */
classify:function(e){e=g.camelize(e);e=g.singularize(e);return e},
/**
     * This function adds foreign key support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Boolean} drop_id_ubar Default is to seperate id with an underbar at the end of the class name,
                                   you can pass true to skip it.(optional)
     * @returns {String} Underscored plural nouns become the camel cased singular form.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.foreign_key( 'MessageBusProperty' ); // === 'message_bus_property_id'
     *     inflection.foreign_key( 'MessageBusProperty', true ); // === 'message_bus_propertyid'
     */
foreign_key:function(e,s){e=g.demodulize(e);e=g.underscore(e)+(s?"":"_")+"id";return e},
/**
     * This function adds ordinalize support to every String object.
     * @public
     * @function
     * @param {String} str The subject string.
     * @returns {String} Return all found numbers their sequence like '22nd'.
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.ordinalize( 'the 1 pitch' ); // === 'the 1st pitch'
     */
ordinalize:function(e){var s=e.split(" ");var i=0;var r=s.length;for(;i<r;i++){var a=parseInt(s[i],10);if(!isNaN(a)){var n=s[i].substring(s[i].length-2);var l=s[i].substring(s[i].length-1);var u="th";"11"!=n&&"12"!=n&&"13"!=n&&("1"===l?u="st":"2"===l?u="nd":"3"===l&&(u="rd"));s[i]+=u}}return s.join(" ")},
/**
     * This function performs multiple inflection methods on a string
     * @public
     * @function
     * @param {String} str The subject string.
     * @param {Array} arr An array of inflection methods.
     * @returns {String}
     * @example
     *
     *     var inflection = require( 'inflection' );
     *
     *     inflection.transform( 'all job', [ 'pluralize', 'capitalize', 'dasherize' ]); // === 'All-jobs'
     */
transform:function(e,s){var i=0;var r=s.length;for(;i<r;i++){var a=s[i];g.hasOwnProperty(a)&&(e=g[a](e))}return e}};g.version="1.13.1";return g}));var s=e;export{s as default};

