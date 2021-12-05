$(document).ready(function(){

  var htmlStrings = [
    '<div class="targetClassName"></div>',
    '<div class="otherClassName targetClassName"></div>',
    '<div><div class="targetClassName"></div></div>',
    '<div><div class="targetClassName"><div class="targetClassName"></div></div></div>',
    '<div><div></div><div><div class="targetClassName"></div></div></div>',
    '<div><div class="targetClassName"></div><div class="targetClassName"></div></div>',
    '<div><div class="someOtherDiv"><div class="targetClassNameButNotQuite innerDiv">'
    + '<span class="targetClassName">Some text for this span.</span>'
    + '</div></div></div>',
    '<div class="container"><div class="targetClassName randomClass"></div></div>',
    '<div class="paragraph text targetClassName"><p class="intro targetClassName">'
    + 'Text for the paragraph tag.'
    + '</p></div>'
  ];

  htmlStrings.forEach(function(htmlString, index) {
    var $rootElement = $(htmlString);
    $body = $('body');
    $body.append($rootElement);

    if (index % 2 === 0) {
      $('body').addClass('targetClassName');
    }
  });

  var getElementsByClassName = function(className
    ) {
      var result = [];
      var root = document.body;

      var innerFunction = function(node) {
        // Base Case:
        // No children => if has classname, add to result
        console.log(`node.classList: ${node.classList}`);
        if (node.classList && node.classList.contains(className)) {
          result.push(node);
        }
        // Recursive Case: traverse down tree
        console.log(`node: ${node} has children. Using recursion...`)
        node.childNodes.forEach(function(child) {
          innerFunction(child);
        });
      };
      innerFunction(root);

      return result;
    };

    console.log(getElementsByClassName('targetClassName'));

});