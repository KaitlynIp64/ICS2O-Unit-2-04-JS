// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of triangle.
 */
function calculate () {
  // input
  const length = parseInt(document.getElementById('length-of-triangle').value)
  const width = parseInt(document.getElementById('width-of-triangle').value)

  // process
  const area = (length * width) /2

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}
