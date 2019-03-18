var MyPlug = {
  tag_id: "awesome_messenger",
  element: null,

  init: function() {
    // console.log(this);
    var div = document.createElement("div");
    div.setAttribute("id", this.tag_id);
    // document.body.appendChild(div);
    // this.initScript();
    var script = document.createElement("script");
    script.src = "/src/messenger/index.js";
    script.type = "text/javascript";
    document.getElementById(this.tag_id).appendChild(script);
    // document.getElementsByTagName("head")[0].appendChild(script);
  },

  show: function() {
    var el = document.getElementById(this.tag_id);
    el.style.display = "block";
  },

  hide: function() {
    var el = document.getElementById(this.tag_id);
    el.style.display = "block";
  }
};

MyPlug.init();
