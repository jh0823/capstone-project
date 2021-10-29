var sampleEntries = [];
var tokenized_array = [];
const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now'];
var sampleUserInput = ['For', 'question', 'should','print','greeting','message','screen','xcode','console'];
var sampleEntry7 = ['editing', 'need', 'happen', 'detail', 'view', 'table', 'view'];
var sampleEntry14 = ['how', 'can', 'save', 'image', 'pick', 'from', 'library', 'nsdata'];
var sampleEntry3 = ['for', 'cities', 'added', 'user', 'required', 'that', 'they', 'have', 'images'];
var sampleEntry4 = ['what', 'day', 'exam'];
var sampleEntry5 = ['for', 'cities', 'added', 'user', 'required', 'that', 'they', 'have', 'images'];

var sampleCount = [];
var sampleEntry6 = ["i'm", "not","sure","why",'temperature', 'is',
'the',         'input',
'for',         'the',
'switch',      'case.',
"Shouldn't",   'the',
'BMI',         'be',
'the',         'input',
'fpr',         'for',
'the',         'switch',
'case',        'statement?‚']
var sampleEntry1 =  [
    'For',    'question', 
    'should',        'print',
     'greeting', 'message',
        'screen',  
    'just',        
    'Xcode',  'console?', 'Thanks!'
  ];
  var sampleEntry8 = [
    'Does',    'the',
    'editing', 'need',
    'to',      'happen',
    'in',      'detail',
    'view',    'or',
    'table',   'view?'
  ];
  var sampleEntry9 = [
    'Is',          'Core',       'Data',
    'use',         'required',   'for',
    'the',         'homework',   '2',
    'assignment?', 'The',        'homework',
    '2',           'assignment', 'description',
    'does',        'not',        'mention',
    'if',          'Core',       'Data',
    'use',         'is',         'required.'
  ];
  var sampleEntry10 = [
    'When',     'we',           'create',
    'the',      'city',         'class',
    'in',       'cities.swift', '',
    'are',      'we',           'supposed',
    'to',       'have',         'city_image',
    'variable', 'as',           'a',
    'String',   'or',           'NSData?',
    'I',        'currently',    'have',
    'it',       'as',           'String',
    'with',     'the',          'filename',
    'ex',       'tempe.png',    'as',
    'the',      'city_image.'
  ];
  var sampleEntry11 =  [
    'How',      'are',     'we',
    'supposed', 'to',      'calculate',
    'the',      'overall', 'rating',
    'or',       'the',     "'Am",
    'i',        'at',      "risk?'",
    'button',   'if',      'there',
    'is',       'only',    'one',
    'game?'
  ];
  var sampleEntry12 = [
    'For',      'cities',
    'added',    'by',
    'the',      'user',
    'is',       'it',
    'required', 'that',
    'they',     'have',
    'images?'
  ];
  var sampleEntry13 = [
    'how',     'can',
    'i',       'save',
    'the',     'image',
    'pick',    'from',
    'library', 'as',
    'a',       'NSData?'
  ];
  var sampleEntry2 = [
    "Can't",      'print',
    'color',      'in',
    'playground', 'environment;',
    'has',        'anyone',
    'figured',    'this',
    'out?'
  ];
  var sampleEntry15 = [
    'Once',
    'we',
    'calculate',
    'the',
    'RFM',
    'value',
    'we',
    'have',
    'to',
    'refer',
    'to',
    'the',
    'given',
    'chart',
    'to',
    'determine',
    'whether',
    'the',
    'user',
    'would',
    'be',
    'underfat',
    'healthy',
    'overfat',
    'or',
    'obese.',
    'However',
    'these',
    'categories',
    'vary',
    'based',
    'on',
    'age',
    'which',
    'is',
    'not',
    'a',
    'given',
    'input.',
    'Should',
    'we',
    'use',
    'only',
    'one',
    'age',
    'group',
    'for',
    'the',
    'determination',
    'should',
    'we',
    'add',
    'an',
    'input',
    'for',
    'age',
    'or',
    'am',
    'I',
    'missing',
    'something',
    'completely',
    'in',
    'the',
    'instructions? Thanks! '
  ];


  sampleEntries.push(sampleUserInput, sampleEntry1, sampleEntry2, sampleEntry3, sampleEntry4, sampleEntry5, sampleEntry6,
    sampleEntry7, sampleEntry8, sampleEntry9, sampleEntry10, sampleEntry11, sampleEntry12, sampleEntry13, sampleEntry14, sampleEntry15);



//console.log("Sample Entries are:");
//console.log(sampleEntries)



          
            console.log("entries:");
            console.log(sampleEntries);
            for (var i = 0; i < sampleEntries.length; i++)
            {
                var tempArr = [];
                var tokens = [];
                for (var j = 0; j < sampleEntries[i].length; j++)
                {
                    tokens.push(sampleEntries[i][j]);
                }
                
                    console.log("tokens: ", tokens);
                    for (var i = 0; i < tokens.length; i++) {
                        var word = tokens[i].split(".").join("");
                        if (!stopwords.includes(tokens[i])) {
                        tempArr.push(word);
                        }
                    }
                    tokenized_array.push(tempArr);
            }
            console.log(tokenized_array);
            
            // used to test to see if entries are being logged correctly
            //console.log(entries);
            /*for(var i = 0; i < entries.length; i++) { //get tokens of each entry and store in tokenized_array 
                tokenized_array.push(entries[i].split(" "));
                
            }*/
            



           