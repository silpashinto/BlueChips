var UserProfile = (function() {
    var userid = "";
  
    var getuserId = function() { 
      return userid;    
    };
  
    var setuserId = function(user_id) { 
        userid = user_id;     
     };
  
    return {
        getuserId: getuserId,
        setuserId: setuserId
    }
  
  })();
  
  export default UserProfile;