import "./banniere.css";

function Banniere () {
    return(
        <div className="banniere">
            <h3 className ="title-banniere"> A propos de mon parcours</h3>
            <span className="txt-banniere">
                <p className="paragraphe">J'ai implémenté divers projets, et obtenu des certifications. Vous pouvez les consulter sur cette page.</p>
                <p className= "icon linkedin"><a href="https://www.linkedin.com/in/ludmilla-marti-345313255/" aria-label="linkedin" target="blank"><i className="fa-brands fa-linkedin"></i></a></p>
            </span>
        </div>
    )
}
export default Banniere;