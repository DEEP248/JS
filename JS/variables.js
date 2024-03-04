              //VARIABLES
              const accountId = 14453 //constatnt cannot change.
              let accountEmail = "deep.@gamil.com" //value change.
              var accountPassword = "admin" //Dont Use var Because of Scope Problem(block & functional)  Always Use let for declaring Variables.
              accountCity = "patan" //you can declare variable without keyword but bad practice.
              let accountDate; // if you dont give value it will be undefined.
              console.log(accountId);
              console.table([accountId,accountEmail,accountPassword,accountCity,accountDate])