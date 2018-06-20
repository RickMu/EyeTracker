// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

let calibration = document.getElementById('calibrationBtn');
let heatMapBtn = document.getElementById('heatMapBtn');

calibration.onclick = function(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { msg: "calibration"  }, function(response) {
    });
  });
};

heatMapBtn.onclick = function(element) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { msg: "heatMap"  }, function(response) {
    });
  });
};