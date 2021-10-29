var counts = {};
var keys = [];
var simValues = [];
var sampleDic = {}; //sample dictionary to store user token and entry tokens
var tokenized_array = [];
//add to lambda function
var tfidf_count = [];

const stopwords = ['i','me','my','myself','we','our','ours','ourselves','you','your','yours','yourself','yourselves','he','him','his','himself','she','her','hers','herself','it','its','itself','they','them','their','theirs','themselves','this','that','these','those','am','is','are','was','were','be','been','being','have','has','had','having','do','does','did','doing','a','an','the','and','but','if','or','because','as','until','while','of','at','by','for','with','about','against','between','into','through','during','before','after','above','below','to','from','up','down','in','out','on','off','over','under','again','further','then','once','here','there','all','any','both','each','few','more','most','other','some','such','no','nor','not','only','own','same','so','than','too','very','s','t','can','will','just','don','should','now'];


var count = 0;
var occurences = [];

var sampleEntries = [];
var sampleUserInput = ['Is',          'Core',       'Data',
'use',         'required',   'for',
'the',         'homework',   '2',
'assignment?', 'The',        'homework',
'2',           'assignment', 'description',
'does',        'not',        'mention',
'if',          'Core',       'Data',
'use',         'is',         'required.'];


var sampleCount = [];





  /*  var params = { // params has only question text and answer text with the stated course id
        ExpressionAttributeValues: {
            ":courseid": "27330",
        },
        ProjectionExpression: "questionText, courseid, answerText",
        FilterExpression: "contains (courseid, :courseid)",
        TableName: "questionsDatabase"
    };*/

    // data.Items[maxSimValue].answerText;
    
    //entries in the database
    
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


      sampleEntries.push(sampleUserInput,sampleEntry1, sampleEntry2,  sampleEntry6,
         sampleEntry8, sampleEntry9, sampleEntry10, sampleEntry11, sampleEntry12, sampleEntry13,  sampleEntry15);
  
    

    console.log("Sample Entries are:");
    //console.log(sampleEntries)

   
    for (var k = 0; k < sampleEntries.length; k++)
    {
        var tempArr = [];
        var tokens = [];
        for (var j = 0; j < sampleEntries[k].length; j++)
        {
            tokens.push(sampleEntries[k][j]);
        }
        
           // console.log("tokens: ", tokens);
            for (var i = 0; i < tokens.length; i++) {
                var word = tokens[i].split(".").join("");
                if (!stopwords.includes(tokens[i])) {
                tempArr.push(word);
                }
            }
            tokenized_array.push(tempArr);
    }
    console.log(tokenized_array);

    simValues = jaccardSimilarity(tokenized_array);
    console.log("simValues:");
    console.log(simValues);
    var maxSimValue = 0;
    var tempValue = 0;
    for (var i = 1; i < simValues.length; i++)
    {
        for (var j = 2; j < simValues.length; j++)
        {
            if (simValues[i] < simValues[j] && tempValue < simValues[j] && tfidf_count[i] < tfidf_count[j])
            {
                tempValue = simValues[j];
                maxSimValue = j;
            }
        }
    }
    console.log("Entry with the highest simValue: ");
    console.log(tokenized_array[maxSimValue]);

    // ADD TO LAMBDA FUNCTION
    for (i = 0; i < simValues.length; i++) {
        console.log("simValues of " + i + ": " + simValues[i]);
    }

    console.log("tfidf:");
    tf_idf(tokenized_array);
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
       console.log(key + " " + sampleCount[key].tfidf);
    }
    
    checktfidf(tokenized_array,sampleCount);
    console.log("testing");
    console.log(tfidf_count);
            



  
function tf_idf(tokenized_array) { // pass in an array that has both the user's tokenized input at index 0 and all entries tokenized afterwards
    var tokens = [];
    for (var i = 0; i < tokenized_array.length; i++) {
        for (var j = 0; j < tokenized_array[i].length; j++)
        {
            tokens.push(tokenized_array[i][j]);
        }
         // store all words from every entry and user input
    }
    for (var i = 0; i < tokens.length; i++) {
        var word = tokens[i].toLowerCase();
        if (sampleCount[word] == undefined) // if word does not exist yet
        {
            sampleCount[word] = {
                tf: 1, //change term freq to 1
                df: 0 // how many documents its in (in our case, entries)
            };
            keys.push(word); // add word
        }
        else {
            sampleCount[word].tf = sampleCount[word].tf + 1; // if word is found, add a count
        }
    }

    var otherCounts = [];
    for (var j = 0; j < tokenized_array.length; j++) {
        var tempCounts = {};
        var tokens = tokenized_array[j];
        for (var k = 0; k < tokens.length; k++) {
            var w = tokens[k].toLowerCase();
            if (tempCounts[w] == undefined) {
                tempCounts[w] = true;
            }
        }

        otherCounts.push(tempCounts);
    }

    for (var i = 0; i < keys.length; i++) {
        var word = keys[i];
        for (var j = 0; j < otherCounts.length; j++) {
            var tempCounts = otherCounts[j];
            if (tempCounts[word]) {
                sampleCount[word].df++;
            }
        }

    }

    for (var i = 0; i < keys.length; i++) {
        var word = keys[i];

        var wordobj = sampleCount[word];
        wordobj.tfidf = wordobj.tf * Math.log(tokenized_array.length / wordobj.df);

    }

    keys.sort(compare); // has most frequent terms first

    function compare(a, b) { // compares the freq of terms
        var countA = sampleCount[a].tfidf;
        var countB = sampleCount[b].tfidf;
        return countB - countA;
    }

    // trying to print
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
       // console.log(key + " " + sampleCount[key].tfidf);
    }
    return sampleCount;

}

// jaccard similarity function

function jaccardSimilarity(tokenized_array) // using sets , currently passing in data(entries from tables that aren't tokenized)
{

    var index = 0;
    var aSet = new Set(); // user set with each element as a tokenized word
    for (var i = 0; i < tokenized_array[0].length; i++)
    {
        aSet.add(tokenized_array[0][i]);
    }
    
     // entry set
    //console.log(aSet);

       
        for (var i = 1; i < tokenized_array.length; i++)
        {
            var bSet = new Set();
            for (var j = 0; j< tokenized_array[i].length; j++)
            {
                bSet.add(tokenized_array[i][j]);
            }
            var intersectSet = new Set();
            var tempSet = new Set();
            tempSet = intersection(aSet, bSet);
            if(tempSet.size < 1)
            {
                simValues[index] = 0;
                index++;
            }
            else
            {
                intersectSet.add(tempSet);
                //console.log(bSet);
                var tempSimValue = (intersectSet.size) / (aSet.size + bSet.size - intersectSet.size);
                //console.log(bSet.size);
                simValues[index] = tempSimValue;
                index++;
            }
            
        }
       
        

    
    return simValues;


}

// ADD THIS TO LAMBDA FUNCTION
function checktfidf (tokenized_array,sampleCount)
{
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        for (var j = 1; j < tokenized_array.length; j++)
        {
            var count = 0;
            for (var k = 0 ; k < tokenized_array[j].length; k++)
            {
                if (key == tokenized_array[j][k] && sampleCount[key].tfidf > 2)
                {
                    count++;
                }
            }
            if (tfidf_count[j] == null)
            {
                tfidf_count[j] = count;
            }
            else
            {
                tfidf_count[j] = tfidf_count[j] + count;
            }
           

        }

    }
}

function intersection(setA, setB) {
    let _intersection = new Set();
    for (let elem of setB) {
        if (setA.has(elem)) {
            _intersection.add(elem);
        }
    }
    return _intersection;
}





// scan function 

/*exports.handler = function(event, context, callback){
    let params = {
        TableName : "testing3",
        ExpressionAttributeNames: {
            "#cid" : "courseid",

        },
        ExpressionAttributeValues: {
            ":courseid" : "27330", // this is the specified course id, needs to change depending on which class user is in

        },
        FilterExpression: "#cid = :courseid",
    };*/

    