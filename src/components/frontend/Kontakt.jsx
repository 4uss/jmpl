import React from "react";

function Kontakt() {
  return (
    <div className="container bl__kontakt pb-5 pt-5" id="kontakt">
        <div className="row">
            <div className="col-sm-3 text-center" style={{position: "relative"}}>
                <h1 className="bl__gold">
                    Kontakt
                </h1>
            </div>
            <div className="col-sm-9">
                <p>Potrzebujesz zmian?<br/>Ta świadomość to pierwszy krok na drodze do sukcesu.<br/>Drugim jest komunikacja. Sam wybierz w jakiej formie:
                <br/>Możesz napisać <a href="mailto:joanna.mroczek.pl@gmail.com">joanna.mroczek.pl@gmail.com</a><br/>lub<br/>zadzwonić <a href="tel:723533722">723 533 722</a> - również przez Whatsapp i Signal</p>
            </div>
        </div>
    </div>
  );
}

export default Kontakt;