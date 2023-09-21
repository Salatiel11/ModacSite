
      function allowDrop(ev) {
        ev.preventDefault();
      }

      function drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
      }

      function drop(ev) {
        ev.preventDefault();
        //ev.target= Destination element
        //Data=Source element
        var data = ev.dataTransfer.getData("text");
        //If tdSquare has IMG in it
        var hasImg = document.getElementById(ev.target.id).nodeName == "IMG";
        if (hasImg) {
          var parentId = document.getElementById(ev.target.id).parentElement.id;
          var tdParent = document.getElementById(parentId);

          tdParent.appendChild(document.getElementById(data));
        } else {
          ev.target.appendChild(document.getElementById(data));
        }
        //alert(document.getElementById(ev.target.id).parentElement.id)
      }
   