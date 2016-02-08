describe( 'Cryptosquare', function() {

  it("Encrypts a sentence", function() {
    var testPuzzle = new Puzzle("don't compare yourself to others, compare yourself to the person you were yesterday");
    expect( testPuzzle.getPuzzleResult( ) ).to.equal("daeer leweo rlref rerne fsyts rdtyt coooe acooo utnyy ouomr hyemr tpseo spsha eput");
  })

});
