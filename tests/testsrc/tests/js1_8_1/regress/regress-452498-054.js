/* -*- Mode: javascript; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

var gTestfile = 'regress-452498-054.js';
//-----------------------------------------------------------------------------
var BUGNUMBER = 452498;
var summary = 'TM: upvar2 regression tests';
var actual = '';
var expect = '';


//-----------------------------------------------------------------------------
test();
//-----------------------------------------------------------------------------

function test()
{
  enterFunc ('test');
  printBugNumber(BUGNUMBER);
  printStatus (summary);


// ------- Comment #54 From Jason Orendorff

// Assertion failure: cg->flags & TCF_IN_FUNCTION
// at ../jsemit.cpp:1991
//
  function f() { var x; eval("let x, x;"); }
  f();

// Assertion failure: fp2->fun && fp2->script,
// at ../jsinterp.cpp:5589
//
  eval("let(x) function(){ x = this; }()");

  reportCompare(expect, actual, summary);

  exitFunc ('test');
}
