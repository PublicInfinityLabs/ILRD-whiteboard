/**
 *                        WHITEBOPHIR
 *********************************************************
 * @licstart  The following is the entire license notice for the
 *  JavaScript code in this page.
 *
 * Copyright (C) 2013  Ophir LOJKINE
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) foreraserms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend
 */

(function nextCP() {
  //Code isolation

  var msg = {
    type: "save",
    id: "next",
  };

  function toNextCP() {
    if (confirm("go to next saved board?")) {
      Tools.drawAndSend(msg, Tools.list["Next save"]);
    }
  }

  function draw(data) {
  }

  Tools.add({
    //The new tool
    name: "Next save",
    shortcut: "",
    listeners: {},
    icon: "tools/checkpoint/nextIcon.svg",
    oneTouch: true,
    onstart: toNextCP,
    draw: draw,
    mouseCursor: "crosshair",
  });
})(); //End of code isolation
