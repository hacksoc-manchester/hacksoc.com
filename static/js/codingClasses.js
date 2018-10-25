'use strict';

// The three sections: about, feedback, register
var tabs = {
  about: {
    name: "About",
    id: "#about-tab-container",
    selectorId: "#about-tab-selector"
  },
  feedback: {
    name: "Feedback",
    id: "#feedback-tab-container",
    selectorId: "#feedback-tab-selector"
  },
  register: {
    name: "Register",
    id: "#register-tab-container",
    selectorId: "#register-tab-selector"
  }
};

var currentTabKey = "about";
var currentTab = tabs[currentTabKey];

function showTab(tabKey) {
  // Hide currently selected form
  $(currentTab.id).fadeOut("fast", function () {
    $(tabs[tabKey].id).fadeIn("fast");
  });
  // Hide form selectors and reorder them based on the given form
  $("#tab-selectors").fadeOut("fast", function () {
    // Reordering the form selectors
    $(currentTab.selectorId).html("<h1>" + tabs[tabKey].name + "</h1>");
    $(currentTab.selectorId).attr("onclick", "");
    $(tabs[tabKey].selectorId).html("<h3>" + currentTab.name + "</h3>");
    $(tabs[tabKey].selectorId).attr("onclick", "showTab('" + currentTabKey + "')");
    $(currentTab.selectorId).attr("id", "tempId");
    $(tabs[tabKey].selectorId).attr("id", currentTab.selectorId.slice(1));
    $("#tempId").attr("id", tabs[tabKey].selectorId.slice(1));
    // Showing the form selectors
    $("#tab-selectors").fadeIn("fast");
    // Updating the currently selected form
    currentTabKey = tabKey;
    currentTab = tabs[currentTabKey];
  });
}
