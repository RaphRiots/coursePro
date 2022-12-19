                    // Validiert das Geschlecht
                    function valGender(){
                        var gender = document.getElementById("gender");
                        if (gender.value == ""){
                            //Wenn die "Auswahl" Option gewählt wurde, zeige mir den Display Error.
                            setMessage1("Bitte Anrede auswählen!");
                            return false;
                        }
                        return true;
                        
                    }

                    // Validiert den Vornamen
                    function valVorName() {
                        let inputElement    = document.getElementById("vName");
                        let value           = inputElement.value;
                    
                        if (!value){
                            // Beispiele: " ", null, undefined */
                            setMessage2("Bitte den Vornamen eingeben.");
                        }
                        else {
                            setMessage2(value);
                        }
                    }

                    // Validiert den Nachnamen
                    function valNachName(){
                        let inputElement    = document.getElementById("nName");
                        let value           = inputElement.value;
                    
                        if (!value){
                            // Beispiele: " ", null, undefined */
                            setMessage3("Bitte den Nachnamen eingeben.");
                        }
                        else {
                            setMessage3(value);
                        }
                    }
                    // Validiert das Alter
                    function old(age){
                        let.inputElement    =document.getElementById("bday");
                        let value           =inputElement.value;
                        if (age>=18){
                            return'You can sign in you Perv.';
                        }
                        else{
                            return'You must be at least 18 to sign up.'
                        }
                    }

                    // Validiert die Strasse

                    // Validiert den Kanton

                    // Validiert die Postleitzahl
                    function valPlz() {
                        let inputElement    = document.getElementById("plz");
                        let value           = inputElement.value;

                        if (!value){
                            // Beispiele: " ", null, undefined 
                            setMessage4("Bitte Postleitzahl eingeben.");
                        }
                        else if (value < 1000 || value > 9658) { //NOT ( 1000<= n <= 9658})
                            // Entweder ist die Zahl kleiner als 1 oder grösser als 9658.                   
                            setMessage4("Entweder ist die Zahl kleiner als 1000 oder grösser als 9658.");
                        }
                        else {
                            setMessage4(value);
                        }
                    }

                    // Validiert die Email
                    function valEmail() {
                        let inputElement    = document.getElementById("email");
                        let value           = inputElement.value;

                        if (!value){
                            // Beispiele: " ", null, undefined  
                            setMessage2("Bitte E-Mail eingeben.");
                        }
                        /** 
                        *! Ab hier enthält value einen nicht leeren String. */
                        else if (value.indexOf("@") === -1){
                            //value enhält KEIN '@' Symbol.
                            setMessage2("Bitte in E-Mail ein '@' einfügen");
                        }
                        else {
                            setMessage2(value);
                        }
                    }

                    // Validiert das Geschäftlihe Telefon

                    
                    // Validiert das Geschäftlihe Telefon





                    
                    // Messages
                    function setMessage1(value){
                        document.getElementById("message-1").innerText = value;
                    }
                    function setMessage2(value){
                        document.getElementById("message-2").innerText = value;
                    }

                    function setMessage3(value){
                        document.getElementById("message-3").innerText = value;
                    }

                    function setMessage4(value){
                        document.getElementById("message-4").innerText = value;
                    }

                    function alertFunction(){
                        alert("Das Formular wurde abgeschickt.");
                    }  