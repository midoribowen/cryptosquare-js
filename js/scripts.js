function Puzzle( puzzle ) {
  this.puzzle = puzzle;
}

Puzzle.prototype.getPuzzleResult = function(  ) {
  var noSpaces = this.puzzle.split(" ").join( "" ).toLowerCase().replace(/[.,\/#'!$%\^&\*;:{}=\-_`~()]/g,"");

  var square = Math.sqrt(noSpaces.length);
  var roundedSquares = [ 4, 9, 16, 25, 36 ];

  var lastDifference = 1000;
  var columnCount = 0;
  for ( var j = 0; j < roundedSquares.length; j++ )
  {
    var difference = roundedSquares[ j ] - square;
    if( difference > 0 )
    {
      if ( difference < lastDifference )
      {
        lastDifference = difference;
        columnCount = roundedSquares[ j ];
      }
    }
  }

  var columns = [  ];
  var column = "";
  var count = 0;
  var characterCount = Math.round(noSpaces.length / columnCount);

  for ( var i = 0; i < noSpaces.length; i++ )
  {
    if ( column !== undefined )
    {
      column += noSpaces[ i ];
      count += 1;
      if ( count === characterCount || i + 1 === noSpaces.length )
      {
        columns.push(column);
        column = "";
        count = 0;
      }
    }
  }

  var encryptedColumns = [  ];
  var encryptedColumn = "";

  for ( var k = 0; k < characterCount; k++ )
  {
    for ( var l = 0; l < columns.length; l++ )
    {
      if ( columns[ l ][ k ] !== undefined )
      {
        encryptedColumn += columns[ l ][ k ];
      }
    }
    encryptedColumns.push(encryptedColumn);
    encryptedColumn = "";
  }

  var columns = [  ];
  var encryptedPuzzle = encryptedColumns.join( "" );
  for ( var m = 0; m < encryptedPuzzle.length; m++ )
  {
    column += encryptedPuzzle[ m ];
    count += 1;
    if ( count === 5 || m + 1 === encryptedPuzzle.length )
    {
      columns.push(column);
      column = "";
      count = 0;
    }
  }

  return columns.join(" ");

}

$(document).ready(function() {
  $("form#new-puzzle").submit(function(event) {
    event.preventDefault();
    clearPuzzle();

    var userInput = $("input#user-input").val();
    var newPuzzle = new Puzzle(userInput).getPuzzleResult();
    
    $("p#puzzle").append("<span class='puzzle'>" + newPuzzle + "</span>");

  });

  function clearPuzzle() {
    $("p#puzzle").empty();
  }
});
