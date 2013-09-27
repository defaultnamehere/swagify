//TODO generate hashtags
//TODO prefixes and suffixed (overflow, based, max)
//TODO checkboxes to allow/deny decorations/tags
//TODO allow each click to use the result of the previous click (plz no mode)
//TODO play dubstep on button click? CSS animate text to pulse?
//TODO decrease label width
var UPPERCASE_CHANCE = 0.5;
var LETTER_REPLACE_CHANCE = 0.8;
var USE_TAGS = true;
var USE_DECORATIONS = true;

var slogans = [
    'Proudly sponsored by XBOX LIVE',
    'Because being L3G1TZ is hard',
    'For the S|<r1pT |<1DDi3 with no time to spare',
    'Because you\'re worth it',
    'WUBWUBWUB',
    '...Just in case',
    '"I use it every day." - Connor, 12, 420th prestige on BLOPS2',
    'Looks like a secure password. Isn\'t.',
    '[BREAKING] Swagify to be acquired by League of Legends, integrated into registration',
    'Proudly sponsored by Mountain Dew'

];
var letter_replacements = {
    'S' : '$',
    'A' : '4',
    'a': '@',
    'l' : '1',
    'i' : '1',
    'I' : '1', //chaos
    'o' : '0',
    's' : 'z',
    'z' : 'zzz',
    'Z' : 'ZZZ',
    'E': '3',
    'g': 'ggg',
    'G': 'GGG',
    'E' : '3'

};

var decorations = [
    'xX',
    'xxx',
    '!',
    '~',
    '.-~',
    'xXx',
    'xxX_',
    '|',
    './|',
    '@@@',
    '$$$',
    '***',
    '+',
    '|420|',
    '.::',
    '.:',
    '.-.'
];

var tags = [
    'SHOTS FIRED',
    '420',
    'LEGIT',
    '360',
    'Pr0',
    'NO$$$cop3z',
    '0SC0pe',
    'MLG',
    'h4xx0r',
    'M4X$W4G',
    'L3G1TZ',
    '3edgy5u',
    '2edgy4u',
    'nedgy(n+2)u',
    's0b4s3d',
    'SWEG',
    'LEGIT',
    'WUBWUBWUB',
    'BLAZEIT',
    'b14Z3d',
    '[le]G1t',
    '60x7',
    '24x7BLAZEIT',
    '4.2*10^2',
    'literally',
    '[le]terally',
    '1337',
    'l33t',
    '31337',
    'Tr1Ck$h0t',
    'w33d',
    'ev REE DAI',
    'MTNDEW',
    'DR0PTH3B4$$'

];

var button_names = [
    '$wag1fy',
    'ENGAG3_$w4gggER',
    'Please apply swagger to this text',
    '$$$',
    'BL4z3 1T',
    'I\'d like a name for League of Legends',
    'Generate and register for XBOX live',
    '[literally] $$$$$$$$$$WAGIFY',
    'TR1p[le] $w@g',
    'Y010',
    'C4rpe YOLO',
    'YOU ONLY YOLO ONCE',
    'I need a YouTube account name for my first Minecraft video',
    'We need to go deeper'

];

var $phrase = $('.phrase');
//initialize tooltips
$('label.tags').tooltip();
$('label.decorations').tooltip();
$('label.swagoverflow').tooltip();

var random_choice = function(list) {
    return list[Math.floor(Math.random()*list.length)]
}

var decorate = function(s) {
    var decoration = random_choice(decorations);
    return decoration + s + decoration.split('').reverse().join(''); //yeah okay js

};

var add_tags = function(s) {
    var numtags = Math.floor(Math.random()*4); //use at most 3 tags. Any more would be too many.
    //Actually, probably make this a dropdown so the user can choose

    for(var i = 0; i < numtags; i += 1) {
        s = '[' + random_choice(tags) + ']' + s;
    }
    return s;

}

var randomise_case = function(letter) {

    return Math.random() > UPPERCASE_CHANCE ? letter.toUpperCase() : letter.toLowerCase();
};

var swagify = function(s) {

    //you can split on the empty string in js okay then
    var array = s.split(''); 

    var replacement;

    //please jslint by using i+= 1
    for (var i = 0; i < array.length; i += 1) {
        //if it's time to replace letters, do so
        if (Math.random() > LETTER_REPLACE_CHANCE) {
            replacement = letter_replacements[array[i]];
            //KeyErrors? Don't be ridiculous. This is js.
            if (replacement) {
                array[i] = letter_replacements[array[i]];
            }
        }
        //randomize the case EVEN AFTER WE REPLACED? SOMEBODY STOP ME
        array[i] = randomise_case(array[i]);
    }

    //string status: [ ] mutable
    //               [x] not mutable
    s = array.join('');

    //Check if the "Customize" panel has been used to modify the behaiviour.
   

    //UM HELP I FORGET THE JQUERY FOR THI
    //USE_DECORATIONS = $('input#decorations').selected();
    //USE_TAGS= $('input#tags').checked();
    if (USE_DECORATIONS) {
        s = decorate(s);
    }
    if (USE_TAGS) {
        s = add_tags(s);
    }
    s = s.replace('le', '[le]'); //GOTTA do this
    return s;
};

var swagify_page = function() {

    $('.swagified').html(swagify($phrase.val()));

    //also, let's change the button to say something else
    $('.btn-main').html(random_choice(button_names));

    //also, let's add the swag overflow button 
    $('.swag-overflow').removeClass('hidden');

};

//do the things when the button is clicked
$('.btn-submit').on('click', function () {
    swagify_page()

});

$('.swag-overflow').on('click', function() {

    $swagified_text = $('.swagified');
    $swagified_text.html(swagify($swagified_text.html()));
});


//Also do the things when the user presses enter
$('.swagify-form').submit(function(e) {

    swagify_page();
    return false; // returning false prevents the form from submitting
});

//Generate a slogan
$('.swagified').text(random_choice(slogans));
