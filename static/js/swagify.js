//TODO generate hashtags
//TODO play dubstep on button click? CSS animate text to pulse? <--------- far too obnoxious
//TODO literally redirect to xbox live
//TODO randomly choose letters to replace by a triple letter, eg G -> GGG
//carefully scientifically determined probabilities
var UPPERCASE_CHANCE = 0.5;
var LETTER_REPLACE_CHANCE = 0.8;
var DUPLICATION_CHANCE = 0.05;
var MAX_TAGS = 4


var hashtags = [
    'yoloono',
    '3legit5quit',
    'sweg',
    'yoloswaggins',
    'youonlyyoloonce',
    'majorleagueblazing',
    '420glazeitdonuts',
    'watchout',
    'lookbothwaysbeforeblazing',
    'nofilter'

];

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
    'Proudly sponsored by Mountain Dew',
    '4/20 doctors recommend blazing it regularly for a healthy gamerscore',

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
    'g': 'ggg',
    'G': 'GGG',
    'E' : '3',
    'e' : '3'

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
    '.-.',
    '|||',
    '--',
    '*--'
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
    'DR0PTH3B4$$',
    'WATCH OUT',
    'EDGY',
    'ACE DETECTIVE',
    '90s KID',
    'NO REGRETS',
    'THANKS OBAMA',
    '#nofilter'

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
//okay bootstrap have it your way
$('label.tags').tooltip();
$('label.decorations').tooltip();
$('label.swagoverflow').tooltip();


// hi every1 my name is katy nd as u can see i am quite random! *holds up spork*
var random_choice = function(list) {
    return list[Math.floor(Math.random()*list.length)]
}

var decorate = function(s) {
    var decoration = random_choice(decorations);
    return decoration + s + decoration.split('').reverse().join(''); //yeah okay js

};

var add_tags = function(s) {
    //between 0 and MAX_TAGS - 1 tags are added at the front
    var numtags = Math.floor(Math.random()*(MAX_TAGS)); 

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

    //wait what is this actually a for loop in js
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

    //UM HELP I FORGET THE JQUERY FOR THI
    //USE_DECORATIONS = $('input#decorations').selected();
    //USE_TAGS= $('input#tags').checked();
    
    s = decorate(s);
    s = add_tags(s);

    s = s.replace('le', '[le]'); //GOTTA do this
    return s;
};

var swagify_page = function() {

    var name = $phrase.val();

    if (!name) {
        name = 'gaben';
    }

    //I *guess* we'll HTML escape this, but really, this is all client side. If you're going to HTML inject, at a certain point the joke is on you.
    $('.swagified').html(swagify(name));

    //also, let's change the button to say something else
    $('.btn-main').html(random_choice(button_names));

    //also, let's add the swag overflow button 
    $('.swag-overflow').removeClass('hidden');

};

//do the things when the button is clicked
$('.btn-submit').on('click', function () {
    swagify_page()

});

// enable swag overflow after the first click (I've created a monster)
$('.swag-overflow').on('click', function() {

    $swagified_text = $('.swagified');
    $swagified_text.html(swagify($swagified_text.html()));

    //add a class to make the text have MAXIMUM swag.
    $swagified_text.addClass("dubstep");
});


//Also do the things when the user presses enter
$('.form-control').submit(function(e) {
    swagify_page();
    return false; // returning false prevents the form from submitting suuuuuuuuuuuuuuuuuuuuuuuuuuuure js
});

//Generate a slogan
$('.swagified').text(random_choice(slogans));
