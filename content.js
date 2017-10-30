var replacementString = "됬|됐\n되요|돼요\n되서|돼서\n되도 |돼도 \n되야|돼야\n되있|돼있\n되먹지|돼먹지\n뵈요|봬요\n뵈도|봬도\n냄세|냄새\n지께|찌개\n무지게|무지개\n웬지|왠지\n왠일|웬일\n아얘|아예\n어쨌던|어쨌든\n하던지 말던지|하든지 말든지\n거에요|거예요\n이예요|이에요\n아니예요|아니에요\n1나|하나\n2틀|이틀\n몇일|며칠\n구지|굳이\n궂이|굳이\n궃이|굳이\n할꺼야|할거야\n이 자리를 빌어|이 자리를 빌려\n외않됀데|왜 안 된대\n돼도록|되도록";
var replacementArray = replacementString.split("\n")
var oldArray = new Array();
var newArray = new Array();

for (var r = 0; r < replacementArray.length; r++)
{
	var element = replacementArray[r];
	var splited = element.split("|");
	oldArray.push(splited[0]);
	newArray.push(splited[1]);
}

var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++)
{
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++)
    {
        var node = element.childNodes[j];

        if (node.nodeType === 3)
        {
            var text = node.nodeValue;

            for (var k = 0; k < replacementArray.length; k++)
            {
	            var regexp = new RegExp(oldArray[k], "gi");
	            var replacedText = text.replace(regexp, newArray[k]);

	            if (replacedText !== text)
	            {
	                element.replaceChild(document.createTextNode(replacedText), node);
	            }
            }
        }
    }
}