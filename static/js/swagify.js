

// Years of research in a Doritos lab yielded these probabilities.
var UPPERCASE_CHANCE = 0.5;
var LETTER_REPLACE_CHANCE = 0.8;
var TRIPLE_CHANCE = 0.1;

var MAX_TAGS = 4;

//>var
//>global by default
//>js
var slogans = [
    'Proudly sponsored by XBOX LIVE',
    'For the sik lad with no time to spare',
    'Because you\'re worth it',
    'WUBWUBWUB',
    '"I use it every day." - Connor, 12, 420th prestige on CODBLOPS2',
    '[BREAKING] Swagify to be acquired by League of Legends, integrated into registration',
    'Proudly sponsored by Mountain Dew',
    '4/20 doctors recommend blazing it regularly for a healthy gamerscore',
    'SAMPLE TEXT',
    'M\'lady',
    'Your home for dank memes',
    'Thanks to Doritos for the generous donations which made Swagify possible',
    'Faze clan consider this website my application',
    '"10/10, it\'s okay" - IGN',
    'Because being L3G1TZ is hard',
    'For the S|<r1pT |<1DDi3 with no time to spare',
    'Because you\'re worth it',
    'WUBWUBWUB',
    '...Just in case',
    '"I use it every day." - Connor, 12, 420th prestige on BLOPS2',
    'Looks like a secure password. Isn\'t.',
    '[BREAKING] Swagify to be acquired by League of Legends, integrated into registration',
    'Proudly sponsored by Mountain Dew',
    '4/20 doctors recommend blazing it regularly for a healthy gamerscore', // leaving the extra comma at the end #yolo #js

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
    '#swagallday',
    '#swagallnight',
    'Watch out r/gaming',
    'Generate and order me a 12 pack of Mountain Dew',
    'Major League Blazing',
    'Strictly 90s kids only past this point - click here to be a 90s kid',
    'SAMPLE TEXT',
    'Take me to the Club Penguin sign up page',
];

var $phrase = $('.phrase');
$('button.swag-overflow').tooltip({
    'placement': 'right'
});

// hi every1 my name is katy nd as u can see i am quite random! *holds up spork*
function random_choice(list) {
    return list[Math.floor(Math.random()*list.length)]
}
function randInt(min, max) {
    return min + Math.floor(Math.random() * max);
}

function showRandomSlogan() {
    //Generate a slogan
    $('.slogan').text(random_choice(slogans));
}

var swagify = function(s) {

    var letter_replacements = {
        'S' : '$',
        'A' : '4',
        'a': '@',
        'l' : '1',
        'i' : '1',
        'I' : '1', //chaos
        'o' : '0',
        's' : 'z',
        'H' : "#",
        'z' : 'zzz',
        'Z' : 'ZZZ',
        'g': 'ggg',
        'G': 'GGG',
        'E' : '3',
        'e' : '3',
        's': '$',
        't' : '+',
        'D' : '|)',

    };

    var decorations = [
        'x',
        'X',
        'xX',
        'xxx',
        '~',
        '.-~',
        'xXx',
        'XxX',
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
        '*--',
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
        'SCRUBLORD',
        'DR0PTH3B4$$',
        'w33d',
        'ev REE DAI',
        'MTNDEW',
        'WATCH OUT',
        'EDGY',
        'ACE DETECTIVE',
        '90s KID',
        'NO REGRETS',
        'THANKS OBAMA',
        'SAMPLE TEXT',
        'FAZE'
        '#nofilter'

    ];

    var decorate = function(s) {
        var decoration = random_choice(decorations);
        // Yeah okay js.
        return decoration + s + decoration.split('').reverse().join(''); 

    };

    var add_tags = function(s) {
<<<<<<< HEAD
        // Between 0 and MAX_TAGS - 1 tags are added at the front.
        var numtags = Math.floor(Math.random()*(MAX_TAGS)); 

        for(var i = 0; i < numtags; i += 1) {
            s = '[' + random_choice(tags) + ']' + s;
        }
        return s;

    }

    var randomise_case = function(letter) {
        return Math.random() < UPPERCASE_CHANCE ? letter.toUpperCase() : letter.toLowerCase();
    };

    //you can split on the empty string in js okay then
    var swag_array = s.split(''); 

    var replacement;

    //wait what is this actually a for loop in js i don't get it needs more jQuery plugins
    for (var i = 0; i < swag_array.length; i += 1) {

        if (Math.random() < LETTER_REPLACE_CHANCE) {
            replacement = letter_replacements[swag_array[i]];
            //KeyErrors? Don't be ridiculous. This is js.
            if (replacement) {
                swag_array[i] = letter_replacements[swag_array[i]];
            }
        }
        //randomize the case EVEN AFTER WE REPLACED? SOMEBODY STOP ME
        swag_array[i] = randomise_case(swag_array[i]);
    }

    // At most once, replace a letter with that letter 3 times. Y'know, like they do ON THE STREETS.
    if (Math.random() < TRIPLE_CHANCE) {

        triple_index = Math.floor(Math.random() * swag_array.length);
        letter = swag_array[triple_index];
        triple_letter = "";

        // What even is this wacky code how do you multiply strings in js guido save me (reddit.com/r/basedguido)
        for (var i = 0; i < 3; i++) {
            triple_letter += letter
        }
        swag_array[triple_index] = triple_letter
    }


    //string status: [ ] mutable
    //               [x] not mutable
    s = swag_array.join('');

    s = decorate(s);
    s = add_tags(s);

    s = s.replace('le', '[le]'); //GOTTA do this
    return s;
};

var swagify_page = function() {

    var name = $phrase.val();

    if (!name) {
        return;
    }

    // I *guess* we'll escape this, but really, this is all client side.
    // If you're going to try and XSS this, at a certain point the joke is on you.
    $('.swagified').text(swagify(name));

    //lol pwnt lol ownage straight to the fronpage of r/learntohack
    if (name.search("<script>") != -1 ) {
        alert("XSS successful, please direct your browser to http://gabegaming.com to claim your reward.");
        window.location = "http://gabegaming.com/";
    }

    // change the button to say something else
    $('.btn-main').html(random_choice(button_names));

    // Show the swag overflow button 
    //$('.swag-overflow').removeClass('hidden');

};

var mouseX;
var mouseY;

function place_hitmarker(e) {
    $swagifyButton = $('button.btn-swagify');

    // Change cursor to hitmarker.
    $swagifyButton.addClass("cursor-hitmarker");
    // Play the sound.
    $("audio.hitmarker").trigger("play");

    // Change it back.
    window.setTimeout(
            function() {
        $('button.btn-swagify').removeClass("cursor-hitmarker");
    },
    200)


}

//do the things when the button is clicked
//("do the things"
//>documentation)
$('.btn-submit').on('click', function (e) {
    swagify_page();
    place_hitmarker(e);
    $('img.frog').show();

    $("img.frog").animate({
        left: 100,
        }, 1000, function() {
        // Animation complete.
    });

    // Show the explosions once only.
    $("img.explosion").toggleClass("hidden");
    window.setTimeout(function() {
        $("img.explosion").toggleClass("hidden");
    }, 800);
    return false;
});

/*
 * Flip the frog so it always faces forward. It currently looks hilarious without it.
$('img.frog').one('webkitAnimationIteration oanimationiteration msAnimationIteration animationiteration', 
        function(e) {
            $('img.frog').toggleClass("flipped");
});
*/

// Enable swag overflow after the first click (I've created a monster)
$('.swag-overflow').on('click', function() {

    $swagified_text = $('.swagified');
    $swagified_text.html(swagify($swagified_text.html()));

});

// Also do the things when the user presses enter
$('.form-control').submit(function(e) {
    e.preventDefault()
    swagify_page();
    return false; 
});

illuminatiTimeout = randInt(3, 30) * 1000;
// Randomly every few seconds, flash the illuminati logo fullscreen.
window.setInterval(function() {
    var $symbol = $('div.illuminati');
    $symbol.toggleClass("hidden");
    window.setTimeout(function() {
        $symbol.toggleClass("hidden");
    }, 200);

    illuminatiTimeout = randInt(3, 30) * 1000;
    }, illuminatiTimeout);

showRandomSlogan();

// Dank memes complete have a based day
