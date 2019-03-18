var MyPlug = {
  tag_id: "awesome_messenger",
  element: null,

  init: function() {
    var ifrm = document.createElement("iframe");
    ifrm.setAttribute("id", this.tag_id);
    ifrm.setAttribute("src", "messenger.html");
    ifrm.style.width = "400px";
    ifrm.style.height = "480px";
    ifrm.style.border = 0;
    ifrm.style.position = "absolute";
    ifrm.style.left = "auto";
    ifrm.style.right = "10px";
    ifrm.style.bottom = "10px";
    ifrm.style.display = "none";
    document.body.appendChild(ifrm);
    this.element = ifrm;
  },

  show: function() {
    this.element.style.display = "block";
  },

  hide: function() {
    this.element.style.display = "none";
  }
};
