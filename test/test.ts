import {assert} from "chai";
import {spincontent} from "../src/contentspinner";

describe("contentspinner", function () {
     it('should work for no brackets', function () {
        assert.equal(spincontent("test"), "test");
        assert.equal(spincontent("test|test"), "test|test");
     });
     
     it('should work for single option', function () {
        assert.equal(spincontent("{test}"), "test");
        assert.equal(spincontent("{test|test}"), "test");
     });
     
     it('should work for deeper levels', function () {
        assert.equal(spincontent("{test{test}}"), "testtest");
        assert.equal(spincontent("{test{test|test}}"), "testtest");
     });
     
     
     it('should work for empty items', function () {
        assert.equal(spincontent("{}"), "");
        assert.equal(spincontent("{|}"), "");
     });
     
     it('should spin variants', function () {
         for(var i = 0; i < 10; i++) {
            let spin = spincontent("{hello|hi} {world|universe{s|}}");
            let words = spin.split(' ');

            assert.include(["hi", "hello"], words.shift());
            assert.include(["world", "universe", "worlds", "universes"], words.shift());
            assert.lengthOf(words, 0);
            
         }
     });
});

