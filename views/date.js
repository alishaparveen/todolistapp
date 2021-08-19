module.exports.getDate =   function() {

        var today = new Date();
              
let options = {
    weekday: "long",
    day : "numeric",
    month:"long"
}
        var day = today.toLocaleDateString("en-US", options);
 
        return day;

    };

